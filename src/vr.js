import * as THREE from 'three';
import * as state from './state.js';

// MR用のフォールバック床面
let mrFloor = null;

// MR用の影設定を作成
export function createMRShadow() {
  // 影用のディレクショナルライトを追加
  const shadowLight = new THREE.DirectionalLight(0xffffff, 0.5);
  shadowLight.position.set(0, 10, 0);
  shadowLight.castShadow = true;
  shadowLight.shadow.mapSize.width = 2048;
  shadowLight.shadow.mapSize.height = 2048;
  shadowLight.shadow.camera.near = 0.5;
  shadowLight.shadow.camera.far = 50;
  shadowLight.shadow.camera.left = -5;
  shadowLight.shadow.camera.right = 5;
  shadowLight.shadow.camera.top = 5;
  shadowLight.shadow.camera.bottom = -5;
  state.scene.add(shadowLight);
  state.scene.add(shadowLight.target);
  state.setVrShadowLight(shadowLight);

  // フォールバック用の床面（検出された平面がない場合用）
  const floorGeometry = new THREE.PlaneGeometry(50, 50);
  const floorMaterial = new THREE.ShadowMaterial({
    opacity: 0.3
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.001;
  floor.receiveShadow = true;
  state.scene.add(floor);
  mrFloor = floor;

  // レンダラーの影を有効化
  state.renderer.shadowMap.enabled = true;
  state.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // ドローンに影を付ける（設定に応じて）
  if (state.drone) {
    state.drone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = state.shadowEnabled;
      }
    });
  }

  console.log('MR影設定を作成しました');
}

// MR用の影設定を削除
export function removeMRShadow() {
  if (mrFloor) {
    state.scene.remove(mrFloor);
    mrFloor.geometry.dispose();
    mrFloor.material.dispose();
    mrFloor = null;
  }

  if (state.vrShadowLight) {
    state.scene.remove(state.vrShadowLight.target);
    state.scene.remove(state.vrShadowLight);
    state.setVrShadowLight(null);
  }

  // 検出された平面の影メッシュを削除
  state.mrPlaneShadowMeshes.forEach((mesh) => {
    state.scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  });
  state.mrPlaneShadowMeshes.clear();

  console.log('MR影設定を削除しました');
}

// 深度データの処理
export function processDepthInformation(frame, referenceSpace) {
  const pose = frame.getViewerPose(referenceSpace);
  if (!pose) return;

  const glBinding = frame.session.renderState.baseLayer;

  for (const view of pose.views) {
    if (glBinding && glBinding.getDepthInformation) {
      const depthInfo = glBinding.getDepthInformation(view);
      if (depthInfo) {
        const texture = depthInfo.texture;

        if (!state.depthDataTexture) {
          const depthTexture = new THREE.Texture();
          const properties = state.renderer.properties.get(depthTexture);
          properties.__webglTexture = texture;
          properties.__webglInit = true;
          depthTexture.needsUpdate = true;
          state.setDepthDataTexture(depthTexture);
        }

        if (!state.depthDataTexture.userData.logged) {
          console.log('深度データ取得 (GPU):', {
            width: depthInfo.width,
            height: depthInfo.height,
            normDepthBufferFromNormView: depthInfo.normDepthBufferFromNormView
          });
          state.depthDataTexture.userData.logged = true;
        }
      }
    }
  }
}

// 深度メッシュの視覚化を作成
export function createDepthVisualization() {
  if (state.depthMesh) return;

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.MeshBasicMaterial({
    map: state.depthDataTexture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
  });

  const depthMesh = new THREE.Mesh(geometry, material);
  depthMesh.position.set(0, 1.5, -2);
  depthMesh.visible = state.showDepthVisualization;
  state.scene.add(depthMesh);
  state.setDepthMesh(depthMesh);
}

// plane-detectionで検出された平面を処理
export function updatePlanes(frame, referenceSpace) {
  if (!frame.detectedPlanes) return;

  // 削除された平面を処理
  state.detectedPlanes.forEach((planeData, xrPlane) => {
    if (!frame.detectedPlanes.has(xrPlane)) {
      state.detectedPlanes.delete(xrPlane);
      // 対応する影メッシュも削除
      if (state.mrPlaneShadowMeshes.has(xrPlane)) {
        const mesh = state.mrPlaneShadowMeshes.get(xrPlane);
        state.scene.remove(mesh);
        mesh.geometry.dispose();
        mesh.material.dispose();
        state.mrPlaneShadowMeshes.delete(xrPlane);
      }
    }
  });

  // 新しい平面または更新された平面を処理
  frame.detectedPlanes.forEach((xrPlane) => {
    const pose = frame.getPose(xrPlane.planeSpace, referenceSpace);
    if (!pose) return;

    const position = new THREE.Vector3().setFromMatrixPosition(
      new THREE.Matrix4().fromArray(pose.transform.matrix)
    );
    const quaternion = new THREE.Quaternion().setFromRotationMatrix(
      new THREE.Matrix4().fromArray(pose.transform.matrix)
    );

    const polygon = xrPlane.polygon;

    if (!state.detectedPlanes.has(xrPlane)) {
      state.detectedPlanes.set(xrPlane, {
        position: position,
        quaternion: quaternion,
        polygon: polygon,
        orientation: xrPlane.orientation
      });

      console.log('新しい平面を検出:', xrPlane.orientation);

      // MRモードの場合、水平面には影を受けるメッシュを作成
      if (state.isMrMode && xrPlane.orientation === 'horizontal') {
        createPlaneShadowMesh(xrPlane, position, quaternion, polygon);
      }
    } else {
      const planeData = state.detectedPlanes.get(xrPlane);
      planeData.position = position;
      planeData.quaternion = quaternion;
      planeData.polygon = polygon;

      // 既存の影メッシュを更新
      if (state.mrPlaneShadowMeshes.has(xrPlane)) {
        updatePlaneShadowMesh(xrPlane, position, quaternion, polygon);
      }
    }
  });
}

// 平面用の影を受けるメッシュを作成
function createPlaneShadowMesh(xrPlane, position, quaternion, polygon) {
  if (!polygon || polygon.length < 3) return;

  // ポリゴンの頂点をワールド座標に変換してBufferGeometryを作成
  const vertices = [];
  const indices = [];

  for (let i = 0; i < polygon.length; i++) {
    // ローカル座標（XZ平面上）をVector3に変換
    const localPoint = new THREE.Vector3(polygon[i].x, 0, polygon[i].z);
    // クォータニオンで回転してワールド座標系に変換
    localPoint.applyQuaternion(quaternion);
    // 位置を加算
    localPoint.add(position);
    // わずかに上にオフセット
    localPoint.y += 0.002;
    vertices.push(localPoint.x, localPoint.y, localPoint.z);
  }

  // 三角形分割（ファンで分割）
  for (let i = 1; i < polygon.length - 1; i++) {
    indices.push(0, i, i + 1);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const material = new THREE.ShadowMaterial({
    opacity: 0.4
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;

  state.scene.add(mesh);
  state.mrPlaneShadowMeshes.set(xrPlane, mesh);

  console.log('平面影メッシュを作成: y =', position.y.toFixed(3));
}

// 平面用の影メッシュを更新
function updatePlaneShadowMesh(xrPlane, position, quaternion, polygon) {
  const mesh = state.mrPlaneShadowMeshes.get(xrPlane);
  if (!mesh || !polygon || polygon.length < 3) return;

  // ポリゴンの頂点をワールド座標に変換してBufferGeometryを作成
  const vertices = [];
  const indices = [];

  for (let i = 0; i < polygon.length; i++) {
    const localPoint = new THREE.Vector3(polygon[i].x, 0, polygon[i].z);
    localPoint.applyQuaternion(quaternion);
    localPoint.add(position);
    localPoint.y += 0.002;
    vertices.push(localPoint.x, localPoint.y, localPoint.z);
  }

  for (let i = 1; i < polygon.length - 1; i++) {
    indices.push(0, i, i + 1);
  }

  mesh.geometry.dispose();
  const newGeometry = new THREE.BufferGeometry();
  newGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  newGeometry.setIndex(indices);
  newGeometry.computeVertexNormals();
  mesh.geometry = newGeometry;
}

// ドローンの初期配置
export function positionDrone() {
  if (!state.xrSession || !state.drone || state.dronePositioned) return;

  const frame = state.renderer.xr.getFrame();
  const referenceSpace = state.renderer.xr.getReferenceSpace();

  if (!frame || !referenceSpace) return;

  const cameraPos = new THREE.Vector3();
  state.camera.getWorldPosition(cameraPos);

  const cameraDirection = new THREE.Vector3(0, 0, -1);
  cameraDirection.applyQuaternion(state.camera.quaternion);
  cameraDirection.y = 0;
  cameraDirection.normalize();

  let floorY = null;

  if (state.detectedPlanes && state.detectedPlanes.size > 0) {
    let lowestY = Infinity;
    for (const [xrPlane, planeMesh] of state.detectedPlanes) {
      const planeOrientation = xrPlane.orientation;
      if (planeOrientation === 'horizontal') {
        const planeY = planeMesh.position.y;
        if (planeY < lowestY) {
          lowestY = planeY;
        }
      }
    }
    if (lowestY !== Infinity) {
      floorY = lowestY;
      console.log('検出された床の高さ:', floorY);
    }
  }

  if (floorY === null) {
    floorY = 0.0;
    console.log('床をy=0に設定 (カメラ位置:', cameraPos.y, ')');
  }

  // 右コントローラーの位置を取得してドローンを配置
  let dronePos = null;
  const inputSources = state.xrSession.inputSources;
  for (const source of inputSources) {
    if (source.handedness === 'right' && source.gripSpace) {
      const gripPose = frame.getPose(source.gripSpace, referenceSpace);
      if (gripPose) {
        dronePos = new THREE.Vector3().setFromMatrixPosition(
          new THREE.Matrix4().fromArray(gripPose.transform.matrix)
        );
        console.log('右コントローラーの位置にドローンを配置:', dronePos);
        break;
      }
    }
  }

  // 右コントローラーが見つからない場合は次のフレームまで待つ
  if (!dronePos) {
    console.log('右コントローラー待機中... inputSources:', inputSources.length);
    return; // 配置しない、次のフレームで再試行
  }

  state.drone.position.copy(dronePos);

  const angle = Math.atan2(cameraDirection.x, cameraDirection.z);
  state.drone.rotation.order = 'YXZ';
  state.drone.rotation.set(0, angle, 0);
  // quaternionも同期させる
  state.drone.quaternion.setFromEuler(state.drone.rotation);

  // ドローンを表示
  state.drone.visible = true;

  state.setDronePositioned(true);
  console.log('ドローン配置位置:', state.drone.position);
  console.log('カメラ位置:', cameraPos);
  console.log('床の高さ:', floorY);
}
