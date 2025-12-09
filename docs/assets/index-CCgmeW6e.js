(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ou="170",rg=0,Ed=1,og=2,vf=1,Bu=2,pi=3,bi=0,ln=1,_t=2,Vi=0,or=1,wd=2,Ad=3,Rd=4,ag=5,hs=100,lg=101,cg=102,ug=103,dg=104,hg=200,fg=201,pg=202,mg=203,_c=204,xc=205,gg=206,_g=207,xg=208,yg=209,vg=210,Sg=211,Mg=212,Tg=213,bg=214,yc=0,vc=1,Sc=2,yr=3,Mc=4,Tc=5,bc=6,Ec=7,Sf=0,Eg=1,wg=2,Hi=0,Ag=1,Rg=2,Cg=3,Pg=4,Dg=5,Lg=6,Ig=7,Cd="attached",Ug="detached",Mf=300,vr=301,Sr=302,wc=303,Ac=304,fl=306,Mr=1e3,Oi=1001,Ua=1002,$t=1003,Tf=1004,ro=1005,Tt=1006,Ta=1007,vi=1008,Ei=1009,bf=1010,Ef=1011,xo=1012,ku=1013,As=1014,zn=1015,Lo=1016,zu=1017,Vu=1018,Tr=1020,wf=35902,Af=1021,Rf=1022,En=1023,Cf=1024,Pf=1025,ar=1026,br=1027,Hu=1028,Gu=1029,Df=1030,Wu=1031,Xu=1033,ba=33776,Ea=33777,wa=33778,Aa=33779,Rc=35840,Cc=35841,Pc=35842,Dc=35843,Lc=36196,Ic=37492,Uc=37496,Nc=37808,Fc=37809,Oc=37810,Bc=37811,kc=37812,zc=37813,Vc=37814,Hc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,jc=37821,Ra=36492,Kc=36494,$c=36495,Lf=36283,Zc=36284,Qc=36285,Jc=36286,yo=2300,vo=2301,wl=2302,Pd=2400,Dd=2401,Ld=2402,Ng=2500,Fg=0,If=1,eu=2,Og=3200,Bg=3201,Uf=0,kg=1,Fi="",Vt="srgb",Zt="srgb-linear",pl="linear",ct="srgb",Us=7680,Id=519,zg=512,Vg=513,Hg=514,Nf=515,Gg=516,Wg=517,Xg=518,qg=519,tu=35044,Ud="300 es",Si=2e3,Na=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nd=1234567;const co=Math.PI/180,Er=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function qu(i,e){return(i%e+e)%e}function Yg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jg(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function Kg(i,e,t,n){return uo(i,e,1-Math.exp(-t*n))}function $g(i,e=1){return e-Math.abs(qu(i,e*2)-e)}function Zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function e0(i,e){return i+Math.random()*(e-i)}function t0(i){return i*(.5-Math.random())}function n0(i){i!==void 0&&(Nd=i);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i0(i){return i*co}function s0(i){return i*Er}function r0(i){return(i&i-1)===0&&i!==0}function o0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function a0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function l0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const c0={DEG2RAD:co,RAD2DEG:Er,generateUUID:Hn,clamp:Xt,euclideanModulo:qu,mapLinear:Yg,inverseLerp:jg,lerp:uo,damp:Kg,pingpong:$g,smoothstep:Zg,smootherstep:Qg,randInt:Jg,randFloat:e0,randFloatSpread:t0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:r0,ceilPowerOfTwo:o0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:l0,normalize:ot,denormalize:Bn};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],T=s[1],b=s[4],x=s[7],P=s[2],R=s[5],A=s[8];return r[0]=o*_+a*T+l*P,r[3]=o*m+a*b+l*R,r[6]=o*f+a*x+l*A,r[1]=c*_+u*T+d*P,r[4]=c*m+u*b+d*R,r[7]=c*f+u*x+d*A,r[2]=h*_+p*T+g*P,r[5]=h*m+p*b+g*R,r[8]=h*f+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new ke;function Ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function u0(){const i=So("canvas");return i.style.display="block",i}const Fd={};function oo(i){i in Fd||(Fd[i]=!0,console.warn(i))}function d0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function h0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function f0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?pl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Od=[.64,.33,.3,.6,.15,.06],Bd=[.2126,.7152,.0722],kd=[.3127,.329],zd=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Zt]:{primaries:Od,whitePoint:kd,transfer:pl,toXYZ:zd,fromXYZ:Vd,luminanceCoefficients:Bd,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:Od,whitePoint:kd,transfer:ct,toXYZ:zd,fromXYZ:Vd,luminanceCoefficients:Bd,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}});let Ns;class p0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=So("canvas")),Ns.width=e.width,Ns.height=e.height;const n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let m0=0;class Of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rl(s[o].image)):r.push(Rl(s[o]))}else r=Rl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?p0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g0=0;class At extends kr{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Oi,s=Oi,r=Tt,o=vi,a=En,l=Ei,c=At.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Hn(),this.name="",this.source=new Of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Mf;At.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,P=(f+1)/2,R=(u+h)/4,A=(d+_)/4,D=(g+m)/4;return b>x&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=A/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _0 extends kr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends _0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bf extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x0 extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*_,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const P=Math.sqrt(b),R=Math.atan2(P,f*T);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const x=a*T;if(l=l*m+h*x,c=c*m+p*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cl=new E,Hd=new Ye;class ni{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Go.subVectors(this.max,$r),Fs.subVectors(e.a,$r),Os.subVectors(e.b,$r),Bs.subVectors(e.c,$r),Ri.subVectors(Os,Fs),Ci.subVectors(Bs,Os),Zi.subVectors(Fs,Bs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Zi.z,Zi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Zi.z,0,-Zi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Zi.y,Zi.x,0];return!Pl(t,Fs,Os,Bs,Go)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,Fs,Os,Bs,Go))?!1:(Wo.crossVectors(Ri,Ci),t=[Wo.x,Wo.y,Wo.z],Pl(t,Fs,Os,Bs,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new E,new E,new E,new E,new E,new E,new E,new E],Rn=new E,Ho=new ni,Fs=new E,Os=new E,Bs=new E,Ri=new E,Ci=new E,Zi=new E,$r=new E,Go=new E,Wo=new E,Qi=new E;function Pl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const y0=new ni,Zr=new E,Dl=new E;class ii{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Dl)),this.expandByPoint(Zr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new E,Ll=new E,Xo=new E,Pi=new E,Il=new E,qo=new E,Ul=new E;class Io{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ll.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Ll);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=Pi.dot(this.direction),l=-Pi.dot(Xo),c=Pi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ll).addScaledVector(Xo,h),p}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){Il.subVectors(t,e),qo.subVectors(n,e),Ul.crossVectors(Il,qo);let o=this.direction.dot(Ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(Pi,qo));if(l<0)return null;const c=a*this.direction.dot(Il.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(Ul);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,S0)}lookAt(e,t,n){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Di.crossVectors(n,hn),Di.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Di.crossVectors(n,hn)),Di.normalize(),Yo.crossVectors(hn,Di),s[0]=Di.x,s[4]=Yo.x,s[8]=hn.x,s[1]=Di.y,s[5]=Yo.y,s[9]=hn.y,s[2]=Di.z,s[6]=Yo.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],b=n[7],x=n[11],P=n[15],R=s[0],A=s[4],D=s[8],v=s[12],y=s[1],C=s[5],U=s[9],I=s[13],F=s[2],Y=s[6],H=s[10],W=s[14],V=s[3],se=s[7],re=s[11],_e=s[15];return r[0]=o*R+a*y+l*F+c*V,r[4]=o*A+a*C+l*Y+c*se,r[8]=o*D+a*U+l*H+c*re,r[12]=o*v+a*I+l*W+c*_e,r[1]=u*R+d*y+h*F+p*V,r[5]=u*A+d*C+h*Y+p*se,r[9]=u*D+d*U+h*H+p*re,r[13]=u*v+d*I+h*W+p*_e,r[2]=g*R+_*y+m*F+f*V,r[6]=g*A+_*C+m*Y+f*se,r[10]=g*D+_*U+m*H+f*re,r[14]=g*v+_*I+m*W+f*_e,r[3]=T*R+b*y+x*F+P*V,r[7]=T*A+b*C+x*Y+P*se,r[11]=T*D+b*U+x*H+P*re,r[15]=T*v+b*I+x*W+P*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*p-n*l*p)+_*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*d+t*a*h+s*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=d*m*c-_*h*c+_*l*p-a*m*p-d*l*f+a*h*f,b=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,x=u*_*c-g*d*c+g*a*p-o*_*p-u*a*f+o*d*f,P=g*d*l-u*_*l-g*a*h+o*_*h+u*a*m-o*d*m,R=t*T+n*b+s*x+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(_*h*r-d*m*r-_*s*p+n*m*p+d*s*f-n*h*f)*A,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*A,e[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*p-n*l*p)*A,e[4]=b*A,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*f+t*h*f)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*A,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*A,e[8]=x*A,e[9]=(g*d*r-u*_*r-g*n*p+t*_*p+u*n*f-t*d*f)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*p-t*a*p)*A,e[12]=P*A,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*m+t*d*m)*A,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,_=o*u,m=o*d,f=a*d,T=l*c,b=l*u,x=l*d,P=n.x,R=n.y,A=n.z;return s[0]=(1-(_+f))*P,s[1]=(p+x)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-x)*R,s[5]=(1-(h+f))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+b)*A,s[9]=(m-T)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ks.set(s[0],s[1],s[2]).length();const o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const c=1/r,u=1/o,d=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Si){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let p,g;if(a===Si)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Na)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Si){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-r),h=(t+e)*c,p=(n+s)*u;let g,_;if(a===Si)g=(o+r)*d,_=-2*d;else if(a===Na)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ks=new E,Cn=new xe,v0=new E(0,0,0),S0=new E(1,1,1),Di=new E,Yo=new E,hn=new E,Gd=new xe,Wd=new Ye;class ti{constructor(e=0,t=0,n=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Yu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M0=0;const Xd=new E,zs=new Ye,ui=new xe,jo=new E,Qr=new E,T0=new E,b0=new Ye,qd=new E(1,0,0),Yd=new E(0,1,0),jd=new E(0,0,1),Kd={type:"added"},E0={type:"removed"},Vs={type:"childadded",child:null},Nl={type:"childremoved",child:null};class ht extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new E,t=new ti,n=new Ye,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ke}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jo.copy(e):jo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Qr,jo,this.up):ui.lookAt(jo,Qr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(ui),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E0),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,T0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,b0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ht.DEFAULT_UP=new E(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new E,di=new E,Fl=new E,hi=new E,Hs=new E,Gs=new E,$d=new E,Ol=new E,Bl=new E,kl=new E,zl=new nt,Vl=new nt,Hl=new nt;class kn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),di.subVectors(n,t),Fl.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(di),l=Pn.dot(Fl),c=di.dot(di),u=di.dot(Fl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return zl.setScalar(0),Vl.setScalar(0),Hl.setScalar(0),zl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,n),Hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zl,r.x),o.addScaledVector(Vl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),di.subVectors(e,t),Pn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Pn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Hs.subVectors(s,n),Gs.subVectors(r,n),Ol.subVectors(e,n);const l=Hs.dot(Ol),c=Gs.dot(Ol);if(l<=0&&c<=0)return t.copy(n);Bl.subVectors(e,s);const u=Hs.dot(Bl),d=Gs.dot(Bl);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Hs,o);kl.subVectors(e,r);const p=Hs.dot(kl),g=Gs.dot(kl);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Gs,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return $d.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector($d,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector(Hs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Gl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=qu(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gl(o,r,e+1/3),this.g=Gl(o,r,e),this.b=Gl(o,r,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=kf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return qe.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Xt(Wt.r*255,0,255))*65536+Math.round(Xt(Wt.g*255,0,255))*256+Math.round(Xt(Wt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Vt){qe.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Ko);const n=uo(Li.h,Ko.h,t),s=uo(Li.s,Ko.s,t),r=uo(Li.l,Ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ge;ge.NAMES=kf;let w0=0;class Gn extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Hn(),this.name="",this.blending=or,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Id&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lt extends Gn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new E,$o=new je;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),e}}class zf extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vf extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let A0=0;const Sn=new xe,Wl=new ht,Ws=new E,fn=new ni,Jr=new ni,Lt=new E;class Rt extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?Vf:zf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Wl.lookAt(e),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(fn.min,Jr.min),fn.expandByPoint(Lt),Lt.addVectors(fn.max,Jr.max),fn.expandByPoint(Lt)):(fn.expandByPoint(Jr.min),fn.expandByPoint(Jr.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),Lt.add(Ws)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new E,l[D]=new E;const c=new E,u=new E,d=new E,h=new je,p=new je,g=new je,_=new E,m=new E;function f(D,v,y){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[D].add(_),a[v].add(_),a[y].add(_),l[D].add(m),l[v].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,v=T.length;D<v;++D){const y=T[D],C=y.start,U=y.count;for(let I=C,F=C+U;I<F;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const b=new E,x=new E,P=new E,R=new E;function A(D){P.fromBufferAttribute(s,D),R.copy(P);const v=a[D];b.copy(v),b.sub(P.multiplyScalar(P.dot(v))).normalize(),x.crossVectors(R,v);const C=x.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,C)}for(let D=0,v=T.length;D<v;++D){const y=T[D],C=y.start,U=y.count;for(let I=C,F=C+U;I<F;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,u=new E,d=new E;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Ct(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zd=new xe,Ji=new Io,Zo=new ii,Qd=new E,Qo=new E,Jo=new E,ea=new E,Xl=new E,ta=new E,Jd=new E,na=new E;class we extends ht{constructor(e=new Rt,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Xl.fromBufferAttribute(d,e),o?ta.addScaledVector(Xl,u):ta.addScaledVector(Xl.sub(t),u))}t.add(ta)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(Zo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Zo,Qd)===null||Ji.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(Zd.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Zd),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,P=b;x<P;x+=3){const R=a.getX(x),A=a.getX(x+1),D=a.getX(x+2);s=ia(this,f,e,n,c,u,d,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=ia(this,o,e,n,c,u,d,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,P=b;x<P;x+=3){const R=x,A=x+1,D=x+2;s=ia(this,f,e,n,c,u,d,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,b=m+1,x=m+2;s=ia(this,o,e,n,c,u,d,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function R0(i,e,t,n,s,r,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===bi,a),l===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(na);return c<t.near||c>t.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Qo),i.getVertexPosition(l,Jo),i.getVertexPosition(c,ea);const u=R0(i,e,t,n,Qo,Jo,ea,Jd);if(u){const d=new E;kn.getBarycoord(Jd,Qo,Jo,ea,d),s&&(u.uv=kn.getInterpolatedAttribute(s,a,l,c,d,new je)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,l,c,d,new je)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,l,c,d,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new E,materialIndex:0};kn.getNormal(Qo,Jo,ea,h.normal),u.face=h,u.barycoord=d}return u}class bn extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(d,2));function g(_,m,f,T,b,x,P,R,A,D,v){const y=x/A,C=P/D,U=x/2,I=P/2,F=R/2,Y=A+1,H=D+1;let W=0,V=0;const se=new E;for(let re=0;re<H;re++){const _e=re*C-I;for(let He=0;He<Y;He++){const Qe=He*y-U;se[_]=Qe*T,se[m]=_e*b,se[f]=F,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[f]=R>0?1:-1,u.push(se.x,se.y,se.z),d.push(He/A),d.push(1-re/D),W+=1}}for(let re=0;re<D;re++)for(let _e=0;_e<A;_e++){const He=h+_e+Y*re,Qe=h+_e+Y*(re+1),K=h+(_e+1)+Y*(re+1),ie=h+(_e+1)+Y*re;l.push(He,Qe,ie),l.push(Qe,K,ie),V+=6}a.addGroup(p,V,v),p+=V,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const n=wr(i[t]);for(const s in n)e[s]=n[s]}return e}function C0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const P0={clone:wr,merge:jt};var D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Gn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gf extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new E,eh=new je,th=new je;class qt extends Gf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,qs=1;class I0 extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Xs,qs,e,t);s.layers=this.layers,this.add(s);const r=new qt(Xs,qs,e,t);r.layers=this.layers,this.add(r);const o=new qt(Xs,qs,e,t);o.layers=this.layers,this.add(o);const a=new qt(Xs,qs,e,t);a.layers=this.layers,this.add(a);const l=new qt(Xs,qs,e,t);l.layers=this.layers,this.add(l);const c=new qt(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wf extends At{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class U0 extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bn(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Vi});r.uniforms.tEquirect.value=t;const o=new we(s,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=Tt),new I0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ql=new E,N0=new E,F0=new ke;class cs{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ql.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ql),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||F0.getNormalMatrix(e),s=this.coplanarPoint(ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ii,sa=new E;class ju{constructor(e=new cs,t=new cs,n=new cs,s=new cs,r=new cs,o=new cs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],T=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,h-c,m-p,x-f).normalize(),n[1].setComponents(l+r,h+c,m+p,x+f).normalize(),n[2].setComponents(l+o,h+u,m+g,x+T).normalize(),n[3].setComponents(l-o,h-u,m-g,x-T).normalize(),n[4].setComponents(l-a,h-d,m-_,x-b).normalize(),t===Si)n[5].setComponents(l+a,h+d,m+_,x+b).normalize();else if(t===Na)n[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function O0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class bt extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const T=f*h-o;for(let b=0;b<c;b++){const x=b*d-r;g.push(x,-T,0),_.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const b=T+c*f,x=T+c*(f+1),P=T+1+c*(f+1),R=T+1+c*f;p.push(b,x,R),p.push(x,P,R)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.widthSegments,e.heightSegments)}}var B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,a_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,P_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,my=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:B0,alphahash_pars_fragment:k0,alphamap_fragment:z0,alphamap_pars_fragment:V0,alphatest_fragment:H0,alphatest_pars_fragment:G0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:Y0,begin_vertex:j0,beginnormal_vertex:K0,bsdfs:$0,iridescence_fragment:Z0,bumpmap_pars_fragment:Q0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:s_,color_pars_vertex:r_,color_vertex:o_,common:a_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:c_,displacementmap_pars_vertex:u_,displacementmap_vertex:d_,emissivemap_fragment:h_,emissivemap_pars_fragment:f_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:__,envmap_pars_fragment:x_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:P_,envmap_vertex:v_,fog_vertex:S_,fog_pars_vertex:M_,fog_fragment:T_,fog_pars_fragment:b_,gradientmap_pars_fragment:E_,lightmap_pars_fragment:w_,lights_lambert_fragment:A_,lights_lambert_pars_fragment:R_,lights_pars_begin:C_,lights_toon_fragment:D_,lights_toon_pars_fragment:L_,lights_phong_fragment:I_,lights_phong_pars_fragment:U_,lights_physical_fragment:N_,lights_physical_pars_fragment:F_,lights_fragment_begin:O_,lights_fragment_maps:B_,lights_fragment_end:k_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:V_,logdepthbuf_pars_vertex:H_,logdepthbuf_vertex:G_,map_fragment:W_,map_pars_fragment:X_,map_particle_fragment:q_,map_particle_pars_fragment:Y_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:K_,morphinstance_vertex:$_,morphcolor_vertex:Z_,morphnormal_vertex:Q_,morphtarget_pars_vertex:J_,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:ux,opaque_fragment:dx,packing:hx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:vx,shadowmap_vertex:Sx,shadowmask_pars_fragment:Mx,skinbase_vertex:Tx,skinning_pars_vertex:bx,skinning_vertex:Ex,skinnormal_vertex:wx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Dx,transmission_pars_fragment:Lx,uv_pars_fragment:Ix,uv_pars_vertex:Ux,uv_vertex:Nx,worldpos_vertex:Fx,background_vert:Ox,background_frag:Bx,backgroundCube_vert:kx,backgroundCube_frag:zx,cube_vert:Vx,cube_frag:Hx,depth_vert:Gx,depth_frag:Wx,distanceRGBA_vert:Xx,distanceRGBA_frag:qx,equirect_vert:Yx,equirect_frag:jx,linedashed_vert:Kx,linedashed_frag:$x,meshbasic_vert:Zx,meshbasic_frag:Qx,meshlambert_vert:Jx,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:ry,meshphong_frag:oy,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:dy,points_frag:hy,shadow_vert:fy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},oe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},qn={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qn.physical={uniforms:jt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ra={r:0,b:0,g:0},ts=new ti,_y=new xe;function xy(i,e,t,n,s,r,o){const a=new ge(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function _(T){let b=!1;const x=g(T);x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===fl)?(u===void 0&&(u=new we(new bn(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:wr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(b.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(ts)),u.material.toneMapped=qe.getTransfer(x.colorSpace)!==ct,(d!==x||h!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new we(new bt(2,2),new Xi({name:"BackgroundMaterial",uniforms:wr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=qe.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,b){T.getRGB(ra,Hf(i)),n.buffers.color.setClear(ra.r,ra.g,ra.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:_,addToRenderList:m}}function yy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(y,C,U,I,F){let Y=!1;const H=d(I,U,C);r!==H&&(r=H,c(r.object)),Y=p(y,I,U,F),Y&&g(y,I,U,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(y,C,U,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,C,U){const I=U.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let Y=F[C.id];Y===void 0&&(Y={},F[C.id]=Y);let H=Y[I];return H===void 0&&(H=h(l()),Y[I]=H),H}function h(y){const C=[],U=[],I=[];for(let F=0;F<t;F++)C[F]=0,U[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,C,U,I){const F=r.attributes,Y=C.attributes;let H=0;const W=U.getAttributes();for(const V in W)if(W[V].location>=0){const re=F[V];let _e=Y[V];if(_e===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(y,C,U,I){const F={},Y=C.attributes;let H=0;const W=U.getAttributes();for(const V in W)if(W[V].location>=0){let re=Y[V];re===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),F[V]=_e,H++}r.attributes=F,r.attributesNum=H,r.index=I}function _(){const y=r.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function m(y){f(y,0)}function f(y,C){const U=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;U[y]=1,I[y]===0&&(i.enableVertexAttribArray(y),I[y]=1),F[y]!==C&&(i.vertexAttribDivisor(y,C),F[y]=C)}function T(){const y=r.newAttributes,C=r.enabledAttributes;for(let U=0,I=C.length;U<I;U++)C[U]!==y[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function b(y,C,U,I,F,Y,H){H===!0?i.vertexAttribIPointer(y,C,U,F,Y):i.vertexAttribPointer(y,C,U,I,F,Y)}function x(y,C,U,I){_();const F=I.attributes,Y=U.getAttributes(),H=C.defaultAttributeValues;for(const W in Y){const V=Y[W];if(V.location>=0){let se=F[W];if(se===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const re=se.normalized,_e=se.itemSize,He=e.get(se);if(He===void 0)continue;const Qe=He.buffer,K=He.type,ie=He.bytesPerElement,Me=K===i.INT||K===i.UNSIGNED_INT||se.gpuType===ku;if(se.isInterleavedBufferAttribute){const le=se.data,De=le.stride,Fe=se.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<V.locationSize;Ge++)f(V.location+Ge,le.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<V.locationSize;Ge++)m(V.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Ge=0;Ge<V.locationSize;Ge++)b(V.location+Ge,_e/V.locationSize,K,re,De*ie,(Fe+_e/V.locationSize*Ge)*ie,Me)}else{if(se.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)f(V.location+le,se.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let le=0;le<V.locationSize;le++)b(V.location+le,_e/V.locationSize,K,re,_e*ie,_e/V.locationSize*le*ie,Me)}}else if(H!==void 0){const re=H[W];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(V.location,re);break;case 3:i.vertexAttrib3fv(V.location,re);break;case 4:i.vertexAttrib4fv(V.location,re);break;default:i.vertexAttrib1fv(V.location,re)}}}}T()}function P(){D();for(const y in n){const C=n[y];for(const U in C){const I=C[U];for(const F in I)u(I[F].object),delete I[F];delete C[U]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const U in C){const I=C[U];for(const F in I)u(I[F].object),delete I[F];delete C[U]}delete n[y.id]}function A(y){for(const C in n){const U=n[C];if(U[y.id]===void 0)continue;const I=U[y.id];for(const F in I)u(I[F].object),delete I[F];delete U[y.id]}}function D(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function vy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==En&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function My(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new cs,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,b=T*4;let x=f.clippingState||null;l.value=x,x=u(g,h,b,p);for(let P=0;P!==b;++P)x[P]=t[P];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ty(i){let e=new WeakMap;function t(o,a){return a===wc?o.mapping=vr:a===Ac&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wc||a===Ac)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new U0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ku extends Gf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=4,nh=[.125,.215,.35,.446,.526,.582],fs=20,Yl=new Ku,ih=new ge;let jl=null,Kl=0,$l=0,Zl=!1;const us=(1+Math.sqrt(5))/2,Ys=1/us,sh=[new E(-us,Ys,0),new E(us,Ys,0),new E(-Ys,0,us),new E(Ys,0,us),new E(0,us,-Ys),new E(0,us,Ys),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Kl,$l),this._renderer.xr.enabled=Zl,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Lo,format:En,colorSpace:Zt,depthBuffer:!1},s=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=by(r)),this._blurMaterial=Ey(r,e,t)}return s}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,Yl)}_sceneToCubeUV(e,t,n,s){const a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(ih),u.toneMapping=Hi,u.autoClear=!1;const p=new lt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new we(new bn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(ih),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;oa(s,T*b,f>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vr||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sh[(s-r-1)%sh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new we(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const f=[];let T=0;for(let A=0;A<fs;++A){const D=A/_,v=Math.exp(-D*D/2);f.push(v),A===0?T+=v:A<m&&(T+=2*v)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const x=this._sizeLods[s],P=3*x*(s>b-nr?s-b+nr:0),R=4*(this._cubeSize-x);oa(t,P,R,3*x,2*x),l.setRenderTarget(t),l.render(d,Yl)}}function by(i){const e=[],t=[],n=[];let s=i;const r=i-nr+1+nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-nr?l=nh[o-i+nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];T.set(v,_*g*R),b.set(h,m*g*R);const y=[R,R,R,R,R,R];x.set(y,f*g*R)}const P=new Rt;P.setAttribute("position",new Ct(T,_)),P.setAttribute("uv",new Ct(b,m)),P.setAttribute("faceIndex",new Ct(x,f)),e.push(P),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oh(i,e,t){const n=new Rs(i,e,t);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ey(i,e,t){const n=new Float32Array(fs),s=new E(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ah(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function lh(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wc||l===Ac,u=l===vr||l===Sr;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new rh(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new rh(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ay(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ry(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let b=0,x=T.length;b<x;b+=3){const P=T[b+0],R=T[b+1],A=T[b+2];h.push(P,R,R,A,A,P)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,x=T.length/3-1;b<x;b+=3){const P=b+0,R=b+1,A=b+2;h.push(P,R,R,A,A,P)}}else return;const m=new(Ff(h)?Vf:zf)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Cy(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Py(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dy(i,e,t){const n=new WeakMap,s=new nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*R*4*d),D=new Bf(A,P,R,d);D.type=zn,D.needsUpdate=!0;const v=x*4;for(let C=0;C<d;C++){const U=f[C],I=T[C],F=b[C],Y=P*R*4*C;for(let H=0;H<U.count;H++){const W=H*v;g===!0&&(s.fromBufferAttribute(U,H),A[Y+W+0]=s.x,A[Y+W+1]=s.y,A[Y+W+2]=s.z,A[Y+W+3]=0),_===!0&&(s.fromBufferAttribute(I,H),A[Y+W+4]=s.x,A[Y+W+5]=s.y,A[Y+W+6]=s.z,A[Y+W+7]=0),m===!0&&(s.fromBufferAttribute(F,H),A[Y+W+8]=s.x,A[Y+W+9]=s.y,A[Y+W+10]=s.z,A[Y+W+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:D,size:new je(P,R)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Ly(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class qf extends At{constructor(e,t,n,s,r,o,a,l,c,u=ar){if(u!==ar&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ar&&(n=As),n===void 0&&u===br&&(n=Tr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yf=new At,ch=new qf(1,1),jf=new Bf,Kf=new x0,$f=new Wf,uh=[],dh=[],hh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function zr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=uh[s];if(r===void 0&&(r=new Float32Array(s),uh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ml(i,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Iy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Fy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Oy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),Dt(t,n)}}function By(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),Dt(t,n)}}function ky(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Dt(t,n)}}function zy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Wy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function jy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=Nf,r=ch):r=Yf,t.setTexture2D(e||r,s)}function Ky(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kf,s)}function $y(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$f,s)}function Zy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jf,s)}function Qy(i){switch(i){case 5126:return Iy;case 35664:return Uy;case 35665:return Ny;case 35666:return Fy;case 35674:return Oy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return Vy;case 35668:case 35672:return Hy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Zy}}function Jy(i,e){i.uniform1fv(this.addr,e)}function ev(i,e){const t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function tv(i,e){const t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function nv(i,e){const t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function iv(i,e){const t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sv(i,e){const t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rv(i,e){const t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ov(i,e){i.uniform1iv(this.addr,e)}function av(i,e){i.uniform2iv(this.addr,e)}function lv(i,e){i.uniform3iv(this.addr,e)}function cv(i,e){i.uniform4iv(this.addr,e)}function uv(i,e){i.uniform1uiv(this.addr,e)}function dv(i,e){i.uniform2uiv(this.addr,e)}function hv(i,e){i.uniform3uiv(this.addr,e)}function fv(i,e){i.uniform4uiv(this.addr,e)}function pv(i,e,t){const n=this.cache,s=e.length,r=ml(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yf,r[o])}function mv(i,e,t){const n=this.cache,s=e.length,r=ml(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Kf,r[o])}function gv(i,e,t){const n=this.cache,s=e.length,r=ml(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$f,r[o])}function _v(i,e,t){const n=this.cache,s=e.length,r=ml(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jf,r[o])}function xv(i){switch(i){case 5126:return Jy;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return dv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return _v}}class yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qy(t.type)}}class vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function mh(i,e){i.seq.push(e),i.map[e.id]=e}function Mv(i,e,t){const n=i.name,s=n.length;for(Ql.lastIndex=0;;){const r=Ql.exec(n),o=Ql.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mh(t,c===void 0?new yv(a,i,e):new vv(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Sv(a),mh(t,d)),t=d}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Mv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function gh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tv=37297;let bv=0;function Ev(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _h=new ke;function wv(i){qe._getMatrix(_h,qe.workingColorSpace,i);const e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case pl:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ev(i.getShaderSource(e),o)}else return s}function Av(i,e){const t=wv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Rv(i,e){let t;switch(e){case Ag:t="Linear";break;case Rg:t="Reinhard";break;case Cg:t="Cineon";break;case Pg:t="ACESFilmic";break;case Lg:t="AgX";break;case Ig:t="Neutral";break;case Dg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const aa=new E;function Cv(){qe.getLuminanceCoefficients(aa);const i=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Dv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ao(i){return i!==""}function yh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(i){return i.replace(Iv,Nv)}const Uv=new Map;function Nv(i,e){let t=Ve[e];if(t===void 0){const n=Uv.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nu(t)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(i){return i.replace(Fv,Ov)}function Ov(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function kv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vr:case Sr:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Vv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sf:e="ENVMAP_BLENDING_MULTIPLY";break;case Eg:e="ENVMAP_BLENDING_MIX";break;case wg:e="ENVMAP_BLENDING_ADD";break}return e}function Hv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bv(t),c=kv(t),u=zv(t),d=Vv(t),h=Hv(t),p=Pv(t),g=Dv(r),_=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),f.length>0&&(f+=`
`)):(m=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),f=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Hi?Rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Av("linearToOutputTexel",t.outputColorSpace),Cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=nu(o),o=yh(o,t),o=vh(o,t),a=nu(a),a=yh(a,t),a=vh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+m+o,x=T+f+a,P=gh(s,s.VERTEX_SHADER,b),R=gh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(P).trim(),F=s.getShaderInfoLog(R).trim();let Y=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,R);else{const W=xh(s,P,"vertex"),V=xh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+W+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||F==="")&&(H=!1);H&&(C.diagnostics={runnable:Y,programLog:U,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:f}})}s.deleteShader(P),s.deleteShader(R),D=new Ca(s,_),v=Lv(s,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Tv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let Wv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qv(e),t.set(e,n)),n}}class qv{constructor(e){this.id=Wv++,this.code=e,this.usedTimes=0}}function Yv(i,e,t,n,s,r,o){const a=new Yu,l=new Xv,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,C,U,I){const F=U.fog,Y=I.geometry,H=v.isMeshStandardMaterial?U.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),V=W&&W.mapping===fl?W.image.height:null,se=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=re!==void 0?re.length:0;let He=0;Y.morphAttributes.position!==void 0&&(He=1),Y.morphAttributes.normal!==void 0&&(He=2),Y.morphAttributes.color!==void 0&&(He=3);let Qe,K,ie,Me;if(se){const rt=qn[se];Qe=rt.vertexShader,K=rt.fragmentShader}else Qe=v.vertexShader,K=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),Me=l.getFragmentShaderID(v);const le=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Ge=I.isBatchedMesh===!0,xt=!!v.map,Je=!!v.matcap,Mt=!!W,z=!!v.aoMap,yn=!!v.lightMap,Ke=!!v.bumpMap,$e=!!v.normalMap,Ce=!!v.displacementMap,ft=!!v.emissiveMap,Re=!!v.metalnessMap,w=!!v.roughnessMap,S=v.anisotropy>0,G=v.clearcoat>0,Z=v.dispersion>0,ee=v.iridescence>0,$=v.sheen>0,be=v.transmission>0,ce=S&&!!v.anisotropyMap,fe=G&&!!v.clearcoatMap,et=G&&!!v.clearcoatNormalMap,te=G&&!!v.clearcoatRoughnessMap,pe=ee&&!!v.iridescenceMap,Pe=ee&&!!v.iridescenceThicknessMap,Ie=$&&!!v.sheenColorMap,me=$&&!!v.sheenRoughnessMap,Ze=!!v.specularMap,ze=!!v.specularColorMap,ut=!!v.specularIntensityMap,N=be&&!!v.transmissionMap,ae=be&&!!v.thicknessMap,j=!!v.gradientMap,Q=!!v.alphaMap,he=v.alphaTest>0,ue=!!v.alphaHash,Oe=!!v.extensions;let yt=Hi;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Ht={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:Qe,fragmentShader:K,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Zt,alphaToCoverage:!!v.alphaToCoverage,map:xt,matcap:Je,envMap:Mt,envMapMode:Mt&&W.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:yn,bumpMap:Ke,normalMap:$e,displacementMap:h&&Ce,emissiveMap:ft,normalMapObjectSpace:$e&&v.normalMapType===kg,normalMapTangentSpace:$e&&v.normalMapType===Uf,metalnessMap:Re,roughnessMap:w,anisotropy:S,anisotropyMap:ce,clearcoat:G,clearcoatMap:fe,clearcoatNormalMap:et,clearcoatRoughnessMap:te,dispersion:Z,iridescence:ee,iridescenceMap:pe,iridescenceThicknessMap:Pe,sheen:$,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:Ze,specularColorMap:ze,specularIntensityMap:ut,transmission:be,transmissionMap:N,thicknessMap:ae,gradientMap:j,opaque:v.transparent===!1&&v.blending===or&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:ue,combine:v.combine,mapUv:xt&&_(v.map.channel),aoMapUv:z&&_(v.aoMap.channel),lightMapUv:yn&&_(v.lightMap.channel),bumpMapUv:Ke&&_(v.bumpMap.channel),normalMapUv:$e&&_(v.normalMap.channel),displacementMapUv:Ce&&_(v.displacementMap.channel),emissiveMapUv:ft&&_(v.emissiveMap.channel),metalnessMapUv:Re&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:ce&&_(v.anisotropyMap.channel),clearcoatMapUv:fe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:Ze&&_(v.specularMap.channel),specularColorMapUv:ze&&_(v.specularColorMap.channel),specularIntensityMapUv:ut&&_(v.specularIntensityMap.channel),transmissionMapUv:N&&_(v.transmissionMap.channel),thicknessMapUv:ae&&_(v.thicknessMap.channel),alphaMapUv:Q&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&($e||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Y.attributes.uv&&(xt||Q),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:De,skinning:I.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:He,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:xt&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_t,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Oe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&v.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function f(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)y.push(C),y.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(T(y,v),b(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function T(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const y=g[v.type];let C;if(y){const U=qn[y];C=P0.clone(U.uniforms)}else C=v.uniforms;return C}function P(v,y){let C;for(let U=0,I=u.length;U<I;U++){const F=u[U];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new Gv(i,y,v,r),u.push(C)),C}function R(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:D}}function jv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Th(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Kv),n.length>1&&n.sort(h||Th),s.length>1&&s.sort(h||Th)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $v(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new bh,i.set(n,[o])):s>=r.length?(o=new bh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ge};break;case"SpotLight":t={position:new E,direction:new E,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function Qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jv=0;function eS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tS(i){const e=new Zv,t=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,r=new xe,o=new xe;function a(c){let u=0,d=0,h=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,b=0,x=0,P=0,R=0,A=0;c.sort(eS);for(let v=0,y=c.length;v<y;v++){const C=c[v],U=C.color,I=C.intensity,F=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*I,d+=U.g*I,h+=U.b*I;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],I);A++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,V=t.get(C);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=H,p++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(I),H.distance=F,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const W=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,W.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=W.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Y,x++}_++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(U).multiplyScalar(I),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=H,m++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const W=C.shadow,V=t.get(C);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(I),H.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=A,n.version=Jv++)}function l(c,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const b=c[f];if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Eh(i){const e=new tS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nS(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Eh(i),e.set(s,[a])):r>=o.length?(a=new Eh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class iS extends Gn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sS extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aS(i,e,t){let n=new ju;const s=new je,r=new je,o=new nt,a=new iS({depthPacking:Bg}),l=new sS,c={},u=t.maxTextureSize,d={[bi]:ln,[ln]:bi,[_t]:_t},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:rS,fragmentShader:oS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new we(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf;let f=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Vi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=f!==pi&&this.type===pi,F=f===pi&&this.type!==pi;for(let Y=0,H=R.length;Y<H;Y++){const W=R[Y],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||I===!0||F===!0){const _e=this.type!==pi?{minFilter:$t,magFilter:$t}:{};V.map!==null&&V.map.dispose(),V.map=new Rs(s.x,s.y,_e),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const re=V.getViewportCount();for(let _e=0;_e<re;_e++){const He=V.getViewport(_e);o.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),U.viewport(o),V.updateMatrices(W,_e),n=V.getFrustum(),x(A,D,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===pi&&T(V,D),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,y,C)};function T(R,A){const D=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rs(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,D,h,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,D,p,_,null)}function b(R,A,D,v){let y=null;const C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)y=C;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=y.uuid,I=A.uuid;let F=c[U];F===void 0&&(F={},c[U]=F);let Y=F[I];Y===void 0&&(Y=y.clone(),F[I]=Y,A.addEventListener("dispose",P)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,v===pi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=D}return y}function x(R,A,D,v,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===pi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const I=e.update(R),F=R.material;if(Array.isArray(F)){const Y=I.groups;for(let H=0,W=Y.length;H<W;H++){const V=Y[H],se=F[V.materialIndex];if(se&&se.visible){const re=b(R,se,v,y);R.onBeforeShadow(i,R,A,D,I,re,V),i.renderBufferDirect(D,null,I,re,R,V),R.onAfterShadow(i,R,A,D,I,re,V)}}}else if(F.visible){const Y=b(R,F,v,y);R.onBeforeShadow(i,R,A,D,I,Y,null),i.renderBufferDirect(D,null,I,Y,R,null),R.onAfterShadow(i,R,A,D,I,Y,null)}}const U=R.children;for(let I=0,F=U.length;I<F;I++)x(U[I],A,D,v,y)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const v=c[D],y=R.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const lS={[yc]:vc,[Sc]:bc,[Mc]:Ec,[yr]:Tc,[vc]:yc,[bc]:Sc,[Ec]:Mc,[Tc]:yr};function cS(i,e){function t(){let N=!1;const ae=new nt;let j=null;const Q=new nt(0,0,0,0);return{setMask:function(he){j!==he&&!N&&(i.colorMask(he,he,he,he),j=he)},setLocked:function(he){N=he},setClear:function(he,ue,Oe,yt,Ht){Ht===!0&&(he*=yt,ue*=yt,Oe*=yt),ae.set(he,ue,Oe,yt),Q.equals(ae)===!1&&(i.clearColor(he,ue,Oe,yt),Q.copy(ae))},reset:function(){N=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,ae=!1,j=null,Q=null,he=null;return{setReversed:function(ue){if(ae!==ue){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const yt=he;he=null,this.setClear(yt)}ae=ue},getReversed:function(){return ae},setTest:function(ue){ue?le(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(ue){j!==ue&&!N&&(i.depthMask(ue),j=ue)},setFunc:function(ue){if(ae&&(ue=lS[ue]),Q!==ue){switch(ue){case yc:i.depthFunc(i.NEVER);break;case vc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case bc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ue}},setLocked:function(ue){N=ue},setClear:function(ue){he!==ue&&(ae&&(ue=1-ue),i.clearDepth(ue),he=ue)},reset:function(){N=!1,j=null,Q=null,he=null,ae=!1}}}function s(){let N=!1,ae=null,j=null,Q=null,he=null,ue=null,Oe=null,yt=null,Ht=null;return{setTest:function(rt){N||(rt?le(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(rt){ae!==rt&&!N&&(i.stencilMask(rt),ae=rt)},setFunc:function(rt,wn,oi){(j!==rt||Q!==wn||he!==oi)&&(i.stencilFunc(rt,wn,oi),j=rt,Q=wn,he=oi)},setOp:function(rt,wn,oi){(ue!==rt||Oe!==wn||yt!==oi)&&(i.stencilOp(rt,wn,oi),ue=rt,Oe=wn,yt=oi)},setLocked:function(rt){N=rt},setClear:function(rt){Ht!==rt&&(i.clearStencil(rt),Ht=rt)},reset:function(){N=!1,ae=null,j=null,Q=null,he=null,ue=null,Oe=null,yt=null,Ht=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,b=null,x=null,P=null,R=null,A=new ge(0,0,0),D=0,v=!1,y=null,C=null,U=null,I=null,F=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=W>=2);let se=null,re={};const _e=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),Qe=new nt().fromArray(_e),K=new nt().fromArray(He);function ie(N,ae,j,Q){const he=new Uint8Array(4),ue=i.createTexture();i.bindTexture(N,ue),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<j;Oe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ae+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ue}const Me={};Me[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(yr),Ke(!1),$e(Ed),le(i.CULL_FACE),z(Vi);function le(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function De(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Fe(N,ae){return d[N]!==ae?(i.bindFramebuffer(N,ae),d[N]=ae,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ge(N,ae){let j=p,Q=!1;if(N){j=h.get(ae),j===void 0&&(j=[],h.set(ae,j));const he=N.textures;if(j.length!==he.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Oe=he.length;ue<Oe;ue++)j[ue]=i.COLOR_ATTACHMENT0+ue;j.length=he.length,Q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Q=!0);Q&&i.drawBuffers(j)}function xt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Je={[hs]:i.FUNC_ADD,[lg]:i.FUNC_SUBTRACT,[cg]:i.FUNC_REVERSE_SUBTRACT};Je[ug]=i.MIN,Je[dg]=i.MAX;const Mt={[hg]:i.ZERO,[fg]:i.ONE,[pg]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[vg]:i.SRC_ALPHA_SATURATE,[xg]:i.DST_COLOR,[gg]:i.DST_ALPHA,[mg]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[yg]:i.ONE_MINUS_DST_COLOR,[_g]:i.ONE_MINUS_DST_ALPHA,[Sg]:i.CONSTANT_COLOR,[Mg]:i.ONE_MINUS_CONSTANT_COLOR,[Tg]:i.CONSTANT_ALPHA,[bg]:i.ONE_MINUS_CONSTANT_ALPHA};function z(N,ae,j,Q,he,ue,Oe,yt,Ht,rt){if(N===Vi){_===!0&&(De(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),N!==ag){if(N!==m||rt!==v){if((f!==hs||x!==hs)&&(i.blendEquation(i.FUNC_ADD),f=hs,x=hs),rt)switch(N){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wd:i.blendFunc(i.ONE,i.ONE);break;case Ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,b=null,P=null,R=null,A.set(0,0,0),D=0,m=N,v=rt}return}he=he||ae,ue=ue||j,Oe=Oe||Q,(ae!==f||he!==x)&&(i.blendEquationSeparate(Je[ae],Je[he]),f=ae,x=he),(j!==T||Q!==b||ue!==P||Oe!==R)&&(i.blendFuncSeparate(Mt[j],Mt[Q],Mt[ue],Mt[Oe]),T=j,b=Q,P=ue,R=Oe),(yt.equals(A)===!1||Ht!==D)&&(i.blendColor(yt.r,yt.g,yt.b,Ht),A.copy(yt),D=Ht),m=N,v=!1}function yn(N,ae){N.side===_t?De(i.CULL_FACE):le(i.CULL_FACE);let j=N.side===ln;ae&&(j=!j),Ke(j),N.blending===or&&N.transparent===!1?z(Vi):z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function $e(N){N!==rg?(le(i.CULL_FACE),N!==C&&(N===Ed?i.cullFace(i.BACK):N===og?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),C=N}function Ce(N){N!==U&&(H&&i.lineWidth(N),U=N)}function ft(N,ae,j){N?(le(i.POLYGON_OFFSET_FILL),(I!==ae||F!==j)&&(i.polygonOffset(ae,j),I=ae,F=j)):De(i.POLYGON_OFFSET_FILL)}function Re(N){N?le(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+Y-1),se!==N&&(i.activeTexture(N),se=N)}function S(N,ae,j){j===void 0&&(se===null?j=i.TEXTURE0+Y-1:j=se);let Q=re[j];Q===void 0&&(Q={type:void 0,texture:void 0},re[j]=Q),(Q.type!==N||Q.texture!==ae)&&(se!==j&&(i.activeTexture(j),se=j),i.bindTexture(N,ae||Me[N]),Q.type=N,Q.texture=ae)}function G(){const N=re[se];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(N){Qe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Qe.copy(N))}function me(N){K.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function Ze(N,ae){let j=c.get(ae);j===void 0&&(j=new WeakMap,c.set(ae,j));let Q=j.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(ae,N.name),j.set(N,Q))}function ze(N,ae){const Q=c.get(ae).get(N);l.get(ae)!==Q&&(i.uniformBlockBinding(ae,Q,N.__bindingPointIndex),l.set(ae,Q))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,re={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,b=null,x=null,P=null,R=null,A=new ge(0,0,0),D=0,v=!1,y=null,C=null,U=null,I=null,F=null,Qe.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:De,bindFramebuffer:Fe,drawBuffers:Ge,useProgram:xt,setBlending:z,setMaterial:yn,setFlipSided:Ke,setCullFace:$e,setLineWidth:Ce,setPolygonOffset:ft,setScissorTest:Re,activeTexture:w,bindTexture:S,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:pe,texImage3D:Pe,updateUBOMapping:Ze,uniformBlockBinding:ze,texStorage2D:et,texStorage3D:te,texSubImage2D:$,texSubImage3D:be,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Ie,viewport:me,reset:ut}}function wh(i,e,t,n){const s=uS(n);switch(t){case Af:return i*e;case Cf:return i*e;case Pf:return i*e*2;case Hu:return i*e/s.components*s.byteLength;case Gu:return i*e/s.components*s.byteLength;case Df:return i*e*2/s.components*s.byteLength;case Wu:return i*e*2/s.components*s.byteLength;case Rf:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case Xu:return i*e*4/s.components*s.byteLength;case ba:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Dc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(i,8)*Math.max(e,8)/2;case Lc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ra:case Kc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lf:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uS(i){switch(i){case Ei:case bf:return{byteLength:1,components:1};case xo:case Ef:case Lo:return{byteLength:2,components:1};case zu:case Vu:return{byteLength:2,components:4};case As:case ku:case zn:return{byteLength:4,components:1};case wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dS(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):So("canvas")}function _(w,S,G){let Z=1;const ee=Re(w);if((ee.width>G||ee.height>G)&&(Z=G/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Z*ee.width),be=Math.floor(Z*ee.height);d===void 0&&(d=g($,be));const ce=S?g($,be):d;return ce.width=$,ce.height=be,ce.getContext("2d").drawImage(w,0,0,$,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+be+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,S,G,Z,ee=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=S;if(S===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),S===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){const be=ee?pl:qe.getTransfer(Z);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=be===ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(w,S){let G;return w?S===null||S===As||S===Tr?G=i.DEPTH24_STENCIL8:S===zn?G=i.DEPTH32F_STENCIL8:S===xo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===As||S===Tr?G=i.DEPTH_COMPONENT24:S===zn?G=i.DEPTH_COMPONENT32F:S===xo&&(G=i.DEPTH_COMPONENT16),G}function P(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==$t&&w.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),D(S),S.isVideoTexture&&u.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),y(S)}function D(w){const S=n.get(w);if(S.__webglInit===void 0)return;const G=w.source,Z=h.get(G);if(Z){const ee=Z[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(w),Object.keys(Z).length===0&&h.delete(G)}n.remove(w)}function v(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const G=w.source,Z=h.get(G);delete Z[S.__cacheKey],o.memory.textures--}function y(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ee=0;ee<S.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let Z=0,ee=G.length;Z<ee;Z++){const $=n.get(G[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(w)}let C=0;function U(){C=0}function I(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function F(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function Y(w,S){const G=n.get(w);if(w.isVideoTexture&&Ce(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,w,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function H(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){K(G,w,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function W(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){K(G,w,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function V(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){ie(G,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const se={[Mr]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},re={[$t]:i.NEAREST,[Tf]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},_e={[zg]:i.NEVER,[qg]:i.ALWAYS,[Vg]:i.LESS,[Nf]:i.LEQUAL,[Hg]:i.EQUAL,[Xg]:i.GEQUAL,[Gg]:i.GREATER,[Wg]:i.NOTEQUAL};function He(w,S){if(S.type===zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tt||S.magFilter===Ta||S.magFilter===ro||S.magFilter===vi||S.minFilter===Tt||S.minFilter===Ta||S.minFilter===ro||S.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,se[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,re[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$t||S.minFilter!==ro&&S.minFilter!==vi||S.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const $=F(S);if($!==w.__cacheKey){ee[$]===void 0&&(ee[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[$].usedTimes++;const be=ee[w.__cacheKey];be!==void 0&&(ee[w.__cacheKey].usedTimes--,be.usedTimes===0&&v(S)),w.__cacheKey=$,w.__webglTexture=ee[$].texture}return G}function K(w,S,G){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const ee=Qe(w,S),$=S.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+G);const be=n.get($);if($.version!==be.__version||ee===!0){t.activeTexture(i.TEXTURE0+G);const ce=qe.getPrimaries(qe.workingColorSpace),fe=S.colorSpace===Fi?null:qe.getPrimaries(S.colorSpace),et=S.colorSpace===Fi||ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let te=_(S.image,!1,s.maxTextureSize);te=ft(S,te);const pe=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type);let Ie=b(S.internalFormat,pe,Pe,S.colorSpace,S.isVideoTexture);He(Z,S);let me;const Ze=S.mipmaps,ze=S.isVideoTexture!==!0,ut=be.__version===void 0||ee===!0,N=$.dataReady,ae=P(S,te);if(S.isDepthTexture)Ie=x(S.format===br,S.type),ut&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ie,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ie,te.width,te.height,0,pe,Pe,null));else if(S.isDataTexture)if(Ze.length>0){ze&&ut&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,Ze[0].width,Ze[0].height);for(let j=0,Q=Ze.length;j<Q;j++)me=Ze[j],ze?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,pe,Pe,me.data);S.generateMipmaps=!1}else ze?(ut&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,te.width,te.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,pe,Pe,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,te.width,te.height,0,pe,Pe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ie,Ze[0].width,Ze[0].height,te.depth);for(let j=0,Q=Ze.length;j<Q;j++)if(me=Ze[j],S.format!==En)if(pe!==null)if(ze){if(N)if(S.layerUpdates.size>0){const he=wh(me.width,me.height,S.format,S.type);for(const ue of S.layerUpdates){const Oe=me.data.subarray(ue*he/me.data.BYTES_PER_ELEMENT,(ue+1)*he/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ue,me.width,me.height,1,pe,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ie,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,te.depth,pe,Pe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ie,me.width,me.height,te.depth,0,pe,Pe,me.data)}else{ze&&ut&&t.texStorage2D(i.TEXTURE_2D,ae,Ie,Ze[0].width,Ze[0].height);for(let j=0,Q=Ze.length;j<Q;j++)me=Ze[j],S.format!==En?pe!==null?ze?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,j,Ie,me.width,me.height,0,pe,Pe,me.data)}else if(S.isDataArrayTexture)if(ze){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ie,te.width,te.height,te.depth),N)if(S.layerUpdates.size>0){const j=wh(te.width,te.height,S.format,S.type);for(const Q of S.layerUpdates){const he=te.data.subarray(Q*j/te.data.BYTES_PER_ELEMENT,(Q+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,pe,Pe,he)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,te.width,te.height,te.depth,0,pe,Pe,te.data);else if(S.isData3DTexture)ze?(ut&&t.texStorage3D(i.TEXTURE_3D,ae,Ie,te.width,te.height,te.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,te.width,te.height,te.depth,0,pe,Pe,te.data);else if(S.isFramebufferTexture){if(ut)if(ze)t.texStorage2D(i.TEXTURE_2D,ae,Ie,te.width,te.height);else{let j=te.width,Q=te.height;for(let he=0;he<ae;he++)t.texImage2D(i.TEXTURE_2D,he,Ie,j,Q,0,pe,Pe,null),j>>=1,Q>>=1}}else if(Ze.length>0){if(ze&&ut){const j=Re(Ze[0]);t.texStorage2D(i.TEXTURE_2D,ae,Ie,j.width,j.height)}for(let j=0,Q=Ze.length;j<Q;j++)me=Ze[j],ze?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,pe,Pe,me):t.texImage2D(i.TEXTURE_2D,j,Ie,pe,Pe,me);S.generateMipmaps=!1}else if(ze){if(ut){const j=Re(te);t.texStorage2D(i.TEXTURE_2D,ae,Ie,j.width,j.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,Ie,pe,Pe,te);m(S)&&f(Z),be.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ie(w,S,G){if(S.image.length!==6)return;const Z=Qe(w,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);const $=n.get(ee);if(ee.version!==$.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);const be=qe.getPrimaries(qe.workingColorSpace),ce=S.colorSpace===Fi?null:qe.getPrimaries(S.colorSpace),fe=S.colorSpace===Fi||be===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const et=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Q=0;Q<6;Q++)!et&&!te?pe[Q]=_(S.image[Q],!0,s.maxCubemapSize):pe[Q]=te?S.image[Q].image:S.image[Q],pe[Q]=ft(S,pe[Q]);const Pe=pe[0],Ie=r.convert(S.format,S.colorSpace),me=r.convert(S.type),Ze=b(S.internalFormat,Ie,me,S.colorSpace),ze=S.isVideoTexture!==!0,ut=$.__version===void 0||Z===!0,N=ee.dataReady;let ae=P(S,Pe);He(i.TEXTURE_CUBE_MAP,S);let j;if(et){ze&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ze,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){j=pe[Q].mipmaps;for(let he=0;he<j.length;he++){const ue=j[he];S.format!==En?Ie!==null?ze?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,ue.width,ue.height,Ie,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ze,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,ue.width,ue.height,Ie,me,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Ze,ue.width,ue.height,0,Ie,me,ue.data)}}}else{if(j=S.mipmaps,ze&&ut){j.length>0&&ae++;const Q=Re(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pe[Q].width,pe[Q].height,Ie,me,pe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,pe[Q].width,pe[Q].height,0,Ie,me,pe[Q].data);for(let he=0;he<j.length;he++){const Oe=j[he].image[Q].image;ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Oe.width,Oe.height,Ie,me,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ze,Oe.width,Oe.height,0,Ie,me,Oe.data)}}else{ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,me,pe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,Ie,me,pe[Q]);for(let he=0;he<j.length;he++){const ue=j[he];ze?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,Ie,me,ue.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Ze,Ie,me,ue.image[Q])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),$.__version=ee.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Me(w,S,G,Z,ee,$){const be=r.convert(G.format,G.colorSpace),ce=r.convert(G.type),fe=b(G.internalFormat,be,ce,G.colorSpace),et=n.get(S),te=n.get(G);if(te.__renderTarget=S,!et.__hasExternalTextures){const pe=Math.max(1,S.width>>$),Pe=Math.max(1,S.height>>$);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,fe,pe,Pe,S.depth,0,be,ce,null):t.texImage2D(ee,$,fe,pe,Pe,0,be,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),$e(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,te.__webglTexture,0,Ke(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,te.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(w,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,$=x(S.stencilBuffer,ee),be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Ke(S);$e(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,$,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,w)}else{const Z=S.textures;for(let ee=0;ee<Z.length;ee++){const $=Z[ee],be=r.convert($.format,$.colorSpace),ce=r.convert($.type),fe=b($.internalFormat,be,ce,$.colorSpace),et=Ke(S);G&&$e(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,fe,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,fe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,fe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const ee=Z.__webglTexture,$=Ke(S);if(S.depthTexture.format===ar)$e(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(S.depthTexture.format===br)$e(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Fe(w){const S=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");De(S.__webglFramebuffer,w)}else if(G){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),le(S.__webglDepthbuffer[Z],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),le(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(w,S,G){const Z=n.get(w);S!==void 0&&Me(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Fe(w)}function xt(w){const S=w.texture,G=n.get(w),Z=n.get(S);w.addEventListener("dispose",A);const ee=w.textures,$=w.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let fe=0;fe<S.mipmaps.length;fe++)G.__webglFramebuffer[ce][fe]=i.createFramebuffer()}else G.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)G.__webglFramebuffer[ce]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(be)for(let ce=0,fe=ee.length;ce<fe;ce++){const et=n.get(ee[ce]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&$e(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const fe=ee[ce];G.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const et=r.convert(fe.format,fe.colorSpace),te=r.convert(fe.type),pe=b(fe.internalFormat,et,te,fe.colorSpace,w.isXRRenderTarget===!0),Pe=Ke(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,pe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),le(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),He(i.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Me(G.__webglFramebuffer[ce][fe],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Me(G.__webglFramebuffer[ce],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ce=0,fe=ee.length;ce<fe;ce++){const et=ee[ce],te=n.get(et);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),He(i.TEXTURE_2D,et),Me(G.__webglFramebuffer,w,et,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(et)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),He(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Me(G.__webglFramebuffer[fe],w,S,i.COLOR_ATTACHMENT0,ce,fe);else Me(G.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ce,0);m(S)&&f(ce),t.unbindTexture()}w.depthBuffer&&Fe(w)}function Je(w){const S=w.textures;for(let G=0,Z=S.length;G<Z;G++){const ee=S[G];if(m(ee)){const $=T(w),be=n.get(ee).__webglTexture;t.bindTexture($,be),f($),t.unbindTexture()}}}const Mt=[],z=[];function yn(w){if(w.samples>0){if($e(w)===!1){const S=w.textures,G=w.width,Z=w.height;let ee=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(w),ce=S.length>1;if(ce)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const et=n.get(S[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,i.NEAREST),l===!0&&(Mt.length=0,z.length=0,Mt.push(i.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Mt.push($),z.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const et=n.get(S[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ke(w){return Math.min(s.maxSamples,w.samples)}function $e(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(w){const S=o.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function ft(w,S){const G=w.colorSpace,Z=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Zt&&G!==Fi&&(qe.getTransfer(G)===ct?(Z!==En||ee!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Ge,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=$e}function hS(i,e){function t(n,s=Fi){let r;const o=qe.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bf)return i.BYTE;if(n===Ef)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===ku)return i.INT;if(n===As)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Lo)return i.HALF_FLOAT;if(n===Af)return i.ALPHA;if(n===Rf)return i.RGB;if(n===En)return i.RGBA;if(n===Cf)return i.LUMINANCE;if(n===Pf)return i.LUMINANCE_ALPHA;if(n===ar)return i.DEPTH_COMPONENT;if(n===br)return i.DEPTH_STENCIL;if(n===Hu)return i.RED;if(n===Gu)return i.RED_INTEGER;if(n===Df)return i.RG;if(n===Wu)return i.RG_INTEGER;if(n===Xu)return i.RGBA_INTEGER;if(n===ba||n===Ea||n===wa||n===Aa)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Pc||n===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Ic||n===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Ic)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Kc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lf||n===Zc||n===Qc||n===Jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class fS extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pS={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new At,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xi({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends kr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const _=new _S,m=t.getContextAttributes();let f=null,T=null;const b=[],x=[],P=new je;let R=null;const A=new qt;A.viewport=new nt;const D=new qt;D.viewport=new nt;const v=[A,D],y=new fS;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=b[K];return ie===void 0&&(ie=new Jl,b[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=b[K];return ie===void 0&&(ie=new Jl,b[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=b[K];return ie===void 0&&(ie=new Jl,b[K]=ie),ie.getHandSpace()};function I(K){const ie=x.indexOf(K.inputSource);if(ie===-1)return;const Me=b[ie];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||o),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){const ie=x[K];ie!==null&&(x[K]=null,b[K].disconnect(ie))}C=null,U=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,T=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Rs(p.framebufferWidth,p.framebufferHeight,{format:En,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Me=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?br:ar,Me=m.stencil?Tr:As);const De={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(De),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Rs(h.textureWidth,h.textureHeight,{format:En,type:Ei,depthTexture:new qf(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let ie=0;ie<K.removed.length;ie++){const Me=K.removed[ie],le=x.indexOf(Me);le>=0&&(x[le]=null,b[le].disconnect(Me))}for(let ie=0;ie<K.added.length;ie++){const Me=K.added[ie];let le=x.indexOf(Me);if(le===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=x.length){x.push(Me),le=Fe;break}else if(x[Fe]===null){x[Fe]=Me,le=Fe;break}if(le===-1)break}const De=b[le];De&&De.connect(Me)}}const H=new E,W=new E;function V(K,ie,Me){H.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(Me.matrixWorld);const le=H.distanceTo(W),De=ie.projectionMatrix.elements,Fe=Me.projectionMatrix.elements,Ge=De[14]/(De[10]-1),xt=De[14]/(De[10]+1),Je=(De[9]+1)/De[5],Mt=(De[9]-1)/De[5],z=(De[8]-1)/De[0],yn=(Fe[8]+1)/Fe[0],Ke=Ge*z,$e=Ge*yn,Ce=le/(-z+yn),ft=Ce*-z;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ft),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),De[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Re=Ge+Ce,w=xt+Ce,S=Ke-ft,G=$e+(le-ft),Z=Je*xt/w*Re,ee=Mt*xt/w*Re;K.projectionMatrix.makePerspective(S,G,Z,ee,Re,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function se(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ie=K.near,Me=K.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),y.near=D.near=A.near=ie,y.far=D.far=A.far=Me,(C!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,U=y.far),A.layers.mask=K.layers.mask|2,D.layers.mask=K.layers.mask|4,y.layers.mask=A.layers.mask|D.layers.mask;const le=K.parent,De=y.cameras;se(y,le);for(let Fe=0;Fe<De.length;Fe++)se(De[Fe],le);De.length===2?V(y,A,D):y.projectionMatrix.copy(A.projectionMatrix),re(K,y,le)};function re(K,ie,Me){Me===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Er*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let _e=null;function He(K,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let le=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Fe=0;Fe<Me.length;Fe++){const Ge=Me[Fe];let xt=null;if(p!==null)xt=p.getViewport(Ge);else{const Mt=d.getViewSubImage(h,Ge);xt=Mt.viewport,Fe===0&&(e.setRenderTargetTextures(T,Mt.colorTexture,h.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(T))}let Je=v[Fe];Je===void 0&&(Je=new qt,Je.layers.enable(Fe),Je.viewport=new nt,v[Fe]=Je),Je.matrix.fromArray(Ge.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ge.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(xt.x,xt.y,xt.width,xt.height),Fe===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Je)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const Fe=d.getDepthInformation(Me[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,s.renderState)}}for(let Me=0;Me<b.length;Me++){const le=x[Me],De=b[Me];le!==null&&De!==void 0&&De.update(le,ie,c||o)}_e&&_e(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Qe=new Xf;Qe.setAnimationLoop(He),this.setAnimationLoop=function(K){_e=K},this.dispose=function(){}}}const ns=new ti,yS=new xe;function vS(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Hf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,b,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),b=T.envMap,x=T.envMapRotation;b&&(m.envMap.value=b,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(yS.makeRotationFromEuler(ns)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function SS(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const x=b.program;n.uniformBlockBinding(T,x)}function c(T,b){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(T,P);const R=e.render.frame;r[T.id]!==R&&(h(T),r[T.id]=R)}function u(T){const b=d();T.__bindingPointIndex=b;const x=i.createBuffer(),P=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const b=s[T.id],x=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,A=x.length;R<A;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let v=0,y=D.length;v<y;v++){const C=D[v];if(p(C,R,v,P)===!0){const U=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let Y=0;Y<I.length;Y++){const H=I[Y],W=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+F,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,x,P){const R=T.value,A=b+"_"+x;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const D=P[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const b=T.uniforms;let x=0;const P=16;for(let A=0,D=b.length;A<D;A++){const v=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,C=v.length;y<C;y++){const U=v[y],I=Array.isArray(U.value)?U.value:[U.value];for(let F=0,Y=I.length;F<Y;F++){const H=I[F],W=_(H),V=x%P,se=V%W.boundary,re=V+se;x+=se,re!==0&&P-re<W.storage&&(x+=P-re),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=W.storage}}}const R=x%P;return R>0&&(x+=P-R),T.__size=x,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Zf{constructor(e={}){const{canvas:t=u0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=Hi,this.toneMappingExposure=1;const x=this;let P=!1,R=0,A=0,D=null,v=-1,y=null;const C=new nt,U=new nt;let I=null;const F=new ge(0);let Y=0,H=t.width,W=t.height,V=1,se=null,re=null;const _e=new nt(0,0,H,W),He=new nt(0,0,H,W);let Qe=!1;const K=new ju;let ie=!1,Me=!1;const le=new xe,De=new xe,Fe=new E,Ge=new nt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Mt(){return D===null?V:1}let z=n;function yn(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ou}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ue,!1),z===null){const O="webgl2";if(z=yn(O,M),z===null)throw yn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ke,$e,Ce,ft,Re,w,S,G,Z,ee,$,be,ce,fe,et,te,pe,Pe,Ie,me,Ze,ze,ut,N;function ae(){Ke=new Ay(z),Ke.init(),ze=new hS(z,Ke),$e=new Sy(z,Ke,e,ze),Ce=new cS(z,Ke),$e.reverseDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),ft=new Py(z),Re=new jv,w=new dS(z,Ke,Ce,Re,$e,ze,ft),S=new Ty(x),G=new wy(x),Z=new O0(z),ut=new yy(z,Z),ee=new Ry(z,Z,ft,ut),$=new Ly(z,ee,Z,ft),Ie=new Dy(z,$e,w),te=new My(Re),be=new Yv(x,S,G,Ke,$e,ut,te),ce=new vS(x,Re),fe=new $v,et=new nS(Ke),Pe=new xy(x,S,G,Ce,$,p,l),pe=new aS(x,$,$e),N=new SS(z,ft,$e,Ce),me=new vy(z,Ke,ft),Ze=new Cy(z,Ke,ft),ft.programs=be.programs,x.capabilities=$e,x.extensions=Ke,x.properties=Re,x.renderLists=fe,x.shadowMap=pe,x.state=Ce,x.info=ft}ae();const j=new xS(x,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(H,W,!1))},this.getSize=function(M){return M.set(H,W)},this.setSize=function(M,O,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,W=O,t.width=Math.floor(M*V),t.height=Math.floor(O*V),X===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(H*V,W*V).floor()},this.setDrawingBufferSize=function(M,O,X){H=M,W=O,V=X,t.width=Math.floor(M*X),t.height=Math.floor(O*X),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,O,X,q){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,O,X,q),Ce.viewport(C.copy(_e).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(He)},this.setScissor=function(M,O,X,q){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,O,X,q),Ce.scissor(U.copy(He).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(M){Ce.setScissorTest(Qe=M)},this.setOpaqueSort=function(M){se=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,O=!0,X=!0){let q=0;if(M){let B=!1;if(D!==null){const ne=D.texture.format;B=ne===Xu||ne===Wu||ne===Gu}if(B){const ne=D.texture.type,de=ne===Ei||ne===As||ne===xo||ne===Tr||ne===zu||ne===Vu,ye=Pe.getClearColor(),ve=Pe.getClearAlpha(),Ne=ye.r,Be=ye.g,Se=ye.b;de?(g[0]=Ne,g[1]=Be,g[2]=Se,g[3]=ve,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Ne,_[1]=Be,_[2]=Se,_[3]=ve,z.clearBufferiv(z.COLOR,0,_))}else q|=z.COLOR_BUFFER_BIT}O&&(q|=z.DEPTH_BUFFER_BIT),X&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),et.dispose(),Re.dispose(),S.dispose(),G.dispose(),$.dispose(),ut.dispose(),N.dispose(),be.dispose(),j.dispose(),j.removeEventListener("sessionstart",_d),j.removeEventListener("sessionend",xd),$i.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=ft.autoReset,O=pe.enabled,X=pe.autoUpdate,q=pe.needsUpdate,B=pe.type;ae(),ft.autoReset=M,pe.enabled=O,pe.autoUpdate=X,pe.needsUpdate=q,pe.type=B}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){const O=M.target;O.removeEventListener("dispose",Oe),yt(O)}function yt(M){Ht(M),Re.remove(M)}function Ht(M){const O=Re.get(M).programs;O!==void 0&&(O.forEach(function(X){be.releaseProgram(X)}),M.isShaderMaterial&&be.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,X,q,B,ne){O===null&&(O=xt);const de=B.isMesh&&B.matrixWorld.determinant()<0,ye=ng(M,O,X,q,B);Ce.setMaterial(q,de);let ve=X.index,Ne=1;if(q.wireframe===!0){if(ve=ee.getWireframeAttribute(X),ve===void 0)return;Ne=2}const Be=X.drawRange,Se=X.attributes.position;let tt=Be.start*Ne,dt=(Be.start+Be.count)*Ne;ne!==null&&(tt=Math.max(tt,ne.start*Ne),dt=Math.min(dt,(ne.start+ne.count)*Ne)),ve!==null?(tt=Math.max(tt,0),dt=Math.min(dt,ve.count)):Se!=null&&(tt=Math.max(tt,0),dt=Math.min(dt,Se.count));const pt=dt-tt;if(pt<0||pt===1/0)return;ut.setup(B,q,ye,X,ve);let Qt,it=me;if(ve!==null&&(Qt=Z.get(ve),it=Ze,it.setIndex(Qt)),B.isMesh)q.wireframe===!0?(Ce.setLineWidth(q.wireframeLinewidth*Mt()),it.setMode(z.LINES)):it.setMode(z.TRIANGLES);else if(B.isLine){let Ee=q.linewidth;Ee===void 0&&(Ee=1),Ce.setLineWidth(Ee*Mt()),B.isLineSegments?it.setMode(z.LINES):B.isLineLoop?it.setMode(z.LINE_LOOP):it.setMode(z.LINE_STRIP)}else B.isPoints?it.setMode(z.POINTS):B.isSprite&&it.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ee=B._multiDrawStarts,ai=B._multiDrawCounts,st=B._multiDrawCount,An=ve?Z.get(ve).bytesPerElement:1,Is=Re.get(q).currentProgram.getUniforms();for(let dn=0;dn<st;dn++)Is.setValue(z,"_gl_DrawID",dn),it.render(Ee[dn]/An,ai[dn])}else if(B.isInstancedMesh)it.renderInstances(tt,pt,B.count);else if(X.isInstancedBufferGeometry){const Ee=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ai=Math.min(X.instanceCount,Ee);it.renderInstances(tt,pt,ai)}else it.render(tt,pt)};function rt(M,O,X){M.transparent===!0&&M.side===_t&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,Vo(M,O,X),M.side=bi,M.needsUpdate=!0,Vo(M,O,X),M.side=_t):Vo(M,O,X)}this.compile=function(M,O,X=null){X===null&&(X=M),f=et.get(X),f.init(O),b.push(f),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),M!==X&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const q=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ne=B.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const ye=ne[de];rt(ye,X,B),q.add(ye)}else rt(ne,X,B),q.add(ne)}),b.pop(),f=null,q},this.compileAsync=function(M,O,X=null){const q=this.compile(M,O,X);return new Promise(B=>{function ne(){if(q.forEach(function(de){Re.get(de).currentProgram.isReady()&&q.delete(de)}),q.size===0){B(M);return}setTimeout(ne,10)}Ke.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let wn=null;function oi(M){wn&&wn(M)}function _d(){$i.stop()}function xd(){$i.start()}const $i=new Xf;$i.setAnimationLoop(oi),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(M){wn=M,j.setAnimationLoop(M),M===null?$i.stop():$i.start()},j.addEventListener("sessionstart",_d),j.addEventListener("sessionend",xd),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(O),O=j.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,O,D),f=et.get(M,b.length),f.init(O),b.push(f),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(De),Me=this.localClippingEnabled,ie=te.init(this.clippingPlanes,Me),m=fe.get(M,T.length),m.init(),T.push(m),j.enabled===!0&&j.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&El(ne,O,-1/0,x.sortObjects)}El(M,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(se,re),Je=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Je&&Pe.addToRenderList(m,M),this.info.render.frame++,ie===!0&&te.beginShadows();const X=f.state.shadowsArray;pe.render(X,M,O),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ne=O.cameras;if(B.length>0)for(let de=0,ye=ne.length;de<ye;de++){const ve=ne[de];vd(q,B,M,ve)}Je&&Pe.render(M);for(let de=0,ye=ne.length;de<ye;de++){const ve=ne[de];yd(m,M,ve,ve.viewport)}}else B.length>0&&vd(q,B,M,O),Je&&Pe.render(M),yd(m,M,O);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(x,M,O),ut.resetDefaultState(),v=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],ie===!0&&te.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function El(M,O,X,q){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){q&&Ge.setFromMatrixPosition(M.matrixWorld).applyMatrix4(De);const de=$.update(M),ye=M.material;ye.visible&&m.push(M,de,ye,X,Ge.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const de=$.update(M),ye=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ge.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ge.copy(de.boundingSphere.center)),Ge.applyMatrix4(M.matrixWorld).applyMatrix4(De)),Array.isArray(ye)){const ve=de.groups;for(let Ne=0,Be=ve.length;Ne<Be;Ne++){const Se=ve[Ne],tt=ye[Se.materialIndex];tt&&tt.visible&&m.push(M,de,tt,X,Ge.z,Se)}}else ye.visible&&m.push(M,de,ye,X,Ge.z,null)}}const ne=M.children;for(let de=0,ye=ne.length;de<ye;de++)El(ne[de],O,X,q)}function yd(M,O,X,q){const B=M.opaque,ne=M.transmissive,de=M.transparent;f.setupLightsView(X),ie===!0&&te.setGlobalState(x.clippingPlanes,X),q&&Ce.viewport(C.copy(q)),B.length>0&&zo(B,O,X),ne.length>0&&zo(ne,O,X),de.length>0&&zo(de,O,X),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function vd(M,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Rs(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Lo:Ei,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ne=f.state.transmissionRenderTarget[q.id],de=q.viewport||C;ne.setSize(de.z,de.w);const ye=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(F),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Je&&Pe.render(X);const ve=x.toneMapping;x.toneMapping=Hi;const Ne=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),ie===!0&&te.setGlobalState(x.clippingPlanes,q),zo(M,X,q),w.updateMultisampleRenderTarget(ne),w.updateRenderTargetMipmap(ne),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,tt=O.length;Se<tt;Se++){const dt=O[Se],pt=dt.object,Qt=dt.geometry,it=dt.material,Ee=dt.group;if(it.side===_t&&pt.layers.test(q.layers)){const ai=it.side;it.side=ln,it.needsUpdate=!0,Sd(pt,X,q,Qt,it,Ee),it.side=ai,it.needsUpdate=!0,Be=!0}}Be===!0&&(w.updateMultisampleRenderTarget(ne),w.updateRenderTargetMipmap(ne))}x.setRenderTarget(ye),x.setClearColor(F,Y),Ne!==void 0&&(q.viewport=Ne),x.toneMapping=ve}function zo(M,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ne=M.length;B<ne;B++){const de=M[B],ye=de.object,ve=de.geometry,Ne=q===null?de.material:q,Be=de.group;ye.layers.test(X.layers)&&Sd(ye,O,X,ve,Ne,Be)}}function Sd(M,O,X,q,B,ne){M.onBeforeRender(x,O,X,q,B,ne),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(x,O,X,q,M,ne),B.transparent===!0&&B.side===_t&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,x.renderBufferDirect(X,O,q,B,M,ne),B.side=bi,B.needsUpdate=!0,x.renderBufferDirect(X,O,q,B,M,ne),B.side=_t):x.renderBufferDirect(X,O,q,B,M,ne),M.onAfterRender(x,O,X,q,B,ne)}function Vo(M,O,X){O.isScene!==!0&&(O=xt);const q=Re.get(M),B=f.state.lights,ne=f.state.shadowsArray,de=B.state.version,ye=be.getParameters(M,B.state,ne,O,X),ve=be.getProgramCacheKey(ye);let Ne=q.programs;q.environment=M.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(M.isMeshStandardMaterial?G:S).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Oe),Ne=new Map,q.programs=Ne);let Be=Ne.get(ve);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===de)return Td(M,ye),Be}else ye.uniforms=be.getUniforms(M),M.onBeforeCompile(ye,x),Be=be.acquireProgram(ye,ve),Ne.set(ve,Be),q.uniforms=ye.uniforms;const Se=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=te.uniform),Td(M,ye),q.needsLights=sg(M),q.lightsStateVersion=de,q.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.directionalShadowMap.value=B.state.directionalShadowMap,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotShadowMap.value=B.state.spotShadowMap,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMap.value=B.state.pointShadowMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function Md(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Ca.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Td(M,O){const X=Re.get(M);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function ng(M,O,X,q,B){O.isScene!==!0&&(O=xt),w.resetTextureUnits();const ne=O.fog,de=q.isMeshStandardMaterial?O.environment:null,ye=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Zt,ve=(q.isMeshStandardMaterial?G:S).get(q.envMap||de),Ne=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Se=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,dt=!!X.morphAttributes.color;let pt=Hi;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=x.toneMapping);const Qt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=Qt!==void 0?Qt.length:0,Ee=Re.get(q),ai=f.state.lights;if(ie===!0&&(Me===!0||M!==y)){const vn=M===y&&q.id===v;te.setState(q,M,vn)}let st=!1;q.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ai.state.version||Ee.outputColorSpace!==ye||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==ve||q.fog===!0&&Ee.fog!==ne||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==te.numPlanes||Ee.numIntersection!==te.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==Be||Ee.morphTargets!==Se||Ee.morphNormals!==tt||Ee.morphColors!==dt||Ee.toneMapping!==pt||Ee.morphTargetsCount!==it)&&(st=!0):(st=!0,Ee.__version=q.version);let An=Ee.currentProgram;st===!0&&(An=Vo(q,O,B));let Is=!1,dn=!1,jr=!1;const mt=An.getUniforms(),Xn=Ee.uniforms;if(Ce.useProgram(An.program)&&(Is=!0,dn=!0,jr=!0),q.id!==v&&(v=q.id,dn=!0),Is||y!==M){Ce.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),h0(le),f0(le),mt.setValue(z,"projectionMatrix",le)):mt.setValue(z,"projectionMatrix",M.projectionMatrix),mt.setValue(z,"viewMatrix",M.matrixWorldInverse);const wi=mt.map.cameraPosition;wi!==void 0&&wi.setValue(z,Fe.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&mt.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,dn=!0,jr=!0)}if(B.isSkinnedMesh){mt.setOptional(z,B,"bindMatrix"),mt.setOptional(z,B,"bindMatrixInverse");const vn=B.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),mt.setValue(z,"boneTexture",vn.boneTexture,w))}B.isBatchedMesh&&(mt.setOptional(z,B,"batchingTexture"),mt.setValue(z,"batchingTexture",B._matricesTexture,w),mt.setOptional(z,B,"batchingIdTexture"),mt.setValue(z,"batchingIdTexture",B._indirectTexture,w),mt.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(z,"batchingColorTexture",B._colorsTexture,w));const Kr=X.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0)&&Ie.update(B,X,An),(dn||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,mt.setValue(z,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Xn.envMap.value=ve,Xn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Xn.envMapIntensity.value=O.environmentIntensity),dn&&(mt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&ig(Xn,jr),ne&&q.fog===!0&&ce.refreshFogUniforms(Xn,ne),ce.refreshMaterialUniforms(Xn,q,V,W,f.state.transmissionRenderTarget[M.id]),Ca.upload(z,Md(Ee),Xn,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ca.upload(z,Md(Ee),Xn,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(z,"center",B.center),mt.setValue(z,"modelViewMatrix",B.modelViewMatrix),mt.setValue(z,"normalMatrix",B.normalMatrix),mt.setValue(z,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const vn=q.uniformsGroups;for(let wi=0,Ai=vn.length;wi<Ai;wi++){const bd=vn[wi];N.update(bd,An),N.bind(bd,An)}}return An}function ig(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function sg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,O,X){Re.get(M.texture).__webglTexture=O,Re.get(M.depthTexture).__webglTexture=X;const q=Re.get(M);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){const X=Re.get(M);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,X=0){D=M,R=O,A=X;let q=!0,B=null,ne=!1,de=!1;if(M){const ve=Re.get(M);if(ve.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(z.FRAMEBUFFER,null),q=!1;else if(ve.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(ve.__hasExternalTextures)w.rebindTextures(M,Re.get(M.texture).__webglTexture,Re.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Se=M.depthTexture;if(ve.__boundDepthTexture!==Se){if(Se!==null&&Re.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(de=!0);const Be=Re.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?B=Be[O][X]:B=Be[O],ne=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?B=Re.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[X]:B=Be,C.copy(M.viewport),U.copy(M.scissor),I=M.scissorTest}else C.copy(_e).multiplyScalar(V).floor(),U.copy(He).multiplyScalar(V).floor(),I=Qe;if(Ce.bindFramebuffer(z.FRAMEBUFFER,B)&&q&&Ce.drawBuffers(M,B),Ce.viewport(C),Ce.scissor(U),Ce.setScissorTest(I),ne){const ve=Re.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,X)}else if(de){const ve=Re.get(M.texture),Ne=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ve.__webglTexture,X||0,Ne)}v=-1},this.readRenderTargetPixels=function(M,O,X,q,B,ne,de){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Ce.bindFramebuffer(z.FRAMEBUFFER,ye);try{const ve=M.texture,Ne=ve.format,Be=ve.type;if(!$e.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-q&&X>=0&&X<=M.height-B&&z.readPixels(O,X,q,B,ze.convert(Ne),ze.convert(Be),ne)}finally{const ve=D!==null?Re.get(D).__webglFramebuffer:null;Ce.bindFramebuffer(z.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(M,O,X,q,B,ne,de){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const ve=M.texture,Ne=ve.format,Be=ve.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-q&&X>=0&&X<=M.height-B){Ce.bindFramebuffer(z.FRAMEBUFFER,ye);const Se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.bufferData(z.PIXEL_PACK_BUFFER,ne.byteLength,z.STREAM_READ),z.readPixels(O,X,q,B,ze.convert(Ne),ze.convert(Be),0);const tt=D!==null?Re.get(D).__webglFramebuffer:null;Ce.bindFramebuffer(z.FRAMEBUFFER,tt);const dt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await d0(z,dt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ne),z.deleteBuffer(Se),z.deleteSync(dt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,O=null,X=0){M.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(M.image.width*q),ne=Math.floor(M.image.height*q),de=O!==null?O.x:0,ye=O!==null?O.y:0;w.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,de,ye,B,ne),Ce.unbindTexture()},this.copyTextureToTexture=function(M,O,X=null,q=null,B=0){M.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,M=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let ne,de,ye,ve,Ne,Be,Se,tt,dt;const pt=M.isCompressedTexture?M.mipmaps[B]:M.image;X!==null?(ne=X.max.x-X.min.x,de=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,ve=X.min.x,Ne=X.min.y,Be=X.isBox3?X.min.z:0):(ne=pt.width,de=pt.height,ye=pt.depth||1,ve=0,Ne=0,Be=0),q!==null?(Se=q.x,tt=q.y,dt=q.z):(Se=0,tt=0,dt=0);const Qt=ze.convert(O.format),it=ze.convert(O.type);let Ee;O.isData3DTexture?(w.setTexture3D(O,0),Ee=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Ee=z.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Ee=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const ai=z.getParameter(z.UNPACK_ROW_LENGTH),st=z.getParameter(z.UNPACK_IMAGE_HEIGHT),An=z.getParameter(z.UNPACK_SKIP_PIXELS),Is=z.getParameter(z.UNPACK_SKIP_ROWS),dn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ve),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ne),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Be);const jr=M.isDataArrayTexture||M.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Xn=Re.get(M),Kr=Re.get(O),vn=Re.get(Xn.__renderTarget),wi=Re.get(Kr.__renderTarget);Ce.bindFramebuffer(z.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ai=0;Ai<ye;Ai++)jr&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(M).__webglTexture,B,Be+Ai),M.isDepthTexture?(mt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,B,dt+Ai),z.blitFramebuffer(ve,Ne,ne,de,Se,tt,ne,de,z.DEPTH_BUFFER_BIT,z.NEAREST)):mt?z.copyTexSubImage3D(Ee,B,Se,tt,dt+Ai,ve,Ne,ne,de):z.copyTexSubImage2D(Ee,B,Se,tt,dt+Ai,ve,Ne,ne,de);Ce.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else mt?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(Ee,B,Se,tt,dt,ne,de,ye,Qt,it,pt.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Ee,B,Se,tt,dt,ne,de,ye,Qt,pt.data):z.texSubImage3D(Ee,B,Se,tt,dt,ne,de,ye,Qt,it,pt):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,Se,tt,ne,de,Qt,it,pt.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,Se,tt,pt.width,pt.height,Qt,pt.data):z.texSubImage2D(z.TEXTURE_2D,B,Se,tt,ne,de,Qt,it,pt);z.pixelStorei(z.UNPACK_ROW_LENGTH,ai),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),z.pixelStorei(z.UNPACK_SKIP_PIXELS,An),z.pixelStorei(z.UNPACK_SKIP_ROWS,Is),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dn),B===0&&O.generateMipmaps&&z.generateMipmap(Ee),Ce.unbindTexture()},this.copyTextureToTexture3D=function(M,O,X=null,q=null,B=0){return M.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,M=arguments[2],O=arguments[3],B=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,X,q,B)},this.initRenderTarget=function(M){Re.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,Ce.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class Qf extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class MS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new E;class Zu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ah=new E,Rh=new nt,Ch=new nt,TS=new E,Ph=new xe,la=new E,ec=new ii,Dh=new xe,tc=new Io;class bS extends we{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cd,this.bindMatrix=new xe,this.bindMatrixInverse=new xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingBox.expandByPoint(la)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingSphere.expandByPoint(la)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ec.copy(this.boundingSphere),ec.applyMatrix4(s),e.ray.intersectsSphere(ec)!==!1&&(Dh.copy(s).invert(),tc.copy(e.ray).applyMatrix4(Dh),!(this.boundingBox!==null&&tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ug?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Rh.fromBufferAttribute(s.attributes.skinIndex,e),Ch.fromBufferAttribute(s.attributes.skinWeight,e),Ah.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ch.getComponent(r);if(o!==0){const a=Rh.getComponent(r);Ph.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TS.copy(Ah).applyMatrix4(Ph),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jf extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ep extends At{constructor(e=null,t=1,n=1,s,r,o,a,l,c=$t,u=$t,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lh=new xe,ES=new xe;class Qu{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ES;Lh.multiplyMatrices(a,t[r]),Lh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ep(t,e,e,En,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Jf),this.bones.push(o),this.boneInverses.push(new xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class iu extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new xe,Ih=new xe,ca=[],Uh=new ni,wS=new xe,eo=new we,to=new ii;class AS extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new iu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Uh.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),to.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Ih.multiplyMatrices(n,js),eo.matrixWorld=Ih,eo.raycast(e,ca);for(let o=0,a=ca.length;o<a;o++){const l=ca[o];l.instanceId=r,l.object=this,t.push(l)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new iu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ep(new Float32Array(s*this.count),s,this.count,Hu,zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cs extends Gn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new E,Oa=new E,Nh=new xe,no=new Io,ua=new ii,nc=new E,Fh=new E;class Ps extends ht{constructor(e=new Rt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fa.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(Oa);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;Nh.copy(s).invert(),no.copy(e.ray).applyMatrix4(Nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=u.getX(_),T=u.getX(_+1),b=da(this,e,no,l,f,T);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=da(this,e,no,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=da(this,e,no,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=da(this,e,no,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function da(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Fa.fromBufferAttribute(o,s),Oa.fromBufferAttribute(o,r),t.distanceSqToSegment(Fa,Oa,nc,Fh)>n)return;nc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(nc);if(!(l<e.near||l>e.far))return{distance:l,point:Fh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Oh=new E,Bh=new E;class tp extends Ps{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Oh.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oh.distanceTo(Bh);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RS extends Ps{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends Gn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kh=new xe,su=new Io,ha=new ii,fa=new E;class CS extends ht{constructor(e=new Rt,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;kh.copy(s).invert(),su.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,_=p;g<_;g++){const m=c.getX(g);fa.fromBufferAttribute(d,m),zh(fa,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,_=p;g<_;g++)fa.fromBufferAttribute(d,g),zh(fa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zh(i,e,t,n,s,r,o){const a=su.distanceSqToPoint(i);if(a<t){const l=new E;su.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xn extends At{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=n/2;let f=0;T(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(p,2));function T(){const x=new E,P=new E;let R=0;const A=(t-e)/n;for(let D=0;D<=r;D++){const v=[],y=D/r,C=y*(t-e)+e;for(let U=0;U<=s;U++){const I=U/s,F=I*l+a,Y=Math.sin(F),H=Math.cos(F);P.x=C*Y,P.y=-y*n+m,P.z=C*H,d.push(P.x,P.y,P.z),x.set(Y,A,H).normalize(),h.push(x.x,x.y,x.z),p.push(I,1-y),v.push(g++)}_.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){const y=_[v][D],C=_[v+1][D],U=_[v+1][D+1],I=_[v][D+1];(e>0||v!==0)&&(u.push(y,C,I),R+=3),(t>0||v!==r-1)&&(u.push(C,U,I),R+=3)}c.addGroup(f,R,0),f+=R}function b(x){const P=g,R=new je,A=new E;let D=0;const v=x===!0?e:t,y=x===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const F=U/s*l+a,Y=Math.cos(F),H=Math.sin(F);A.x=v*H,A.y=m*y,A.z=v*Y,d.push(A.x,A.y,A.z),h.push(0,y,0),R.x=Y*.5+.5,R.y=H*.5*y+.5,p.push(R.x,R.y),g++}for(let U=0;U<s;U++){const I=P+U,F=C+U;x===!0?u.push(F,F+1,I):u.push(F+1,F,I),D+=3}c.addGroup(f,D,x===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ju extends cr{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ju(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ji extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new E,h=new E,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const T=[],b=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const R=P/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(R+x,1-b),T.push(c++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const b=u[f][T+1],x=u[f][T],P=u[f+1][T],R=u[f+1][T+1];(f!==0||o>0)&&p.push(b,x,R),(f!==n-1||l<Math.PI)&&p.push(x,P,R)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ps extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new E,d=new E,h=new E;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,T=(s+1)*p+g;o.push(_,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ed extends Gn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class It extends Gn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uf,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends It{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function pa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function PS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function DS(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function ip(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Uo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class LS extends Uo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dd:r=e,a=2*t-n;break;case Ld:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dd:o=e,l=2*n-t;break;case Ld:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-h*m+2*h*_-h*g,T=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let P=0;P!==a;++P)r[P]=f*o[u+P]+T*o[c+P]+b*o[l+P]+x*o[d+P];return r}}class IS extends Uo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}}class US extends Uo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ri{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new US(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new IS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new LS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case vo:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&PS(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*n,h=d-n,p=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=vo;class Vr extends ri{constructor(e,t,n){super(e,t,n)}}Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=yo;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class sp extends ri{}sp.prototype.ValueTypeName="color";class Ar extends ri{}Ar.prototype.ValueTypeName="number";class NS extends Uo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ye.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Rr extends ri{InterpolantFactoryMethodLinear(e){return new NS(this.times,this.values,this.getValueSize(),e)}}Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends ri{constructor(e,t,n){super(e,t,n)}}Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=yo;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends ri{}Cr.prototype.ValueTypeName="vector";class FS{constructor(e="",t=-1,n=[],s=Ng){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(BS(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ri.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=DS(l);l=Vh(l,1,u),c=Vh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ar(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,p,g,_){if(p.length!==0){const m=[],f=[];ip(p,m,f,g),m.length!==0&&_.push(new d(h,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let T=0;T!==h[g].morphTargets.length;++T){const b=h[g];m.push(b.time),f.push(b.morphTarget===_?1:0)}s.push(new Ar(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[d].name+"]";n(Cr,p+".position",h,"pos",s),n(Rr,p+".quaternion",h,"rot",s),n(Cr,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function OS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ar;case"vector":case"vector2":case"vector3":case"vector4":return Cr;case"color":return sp;case"quaternion":return Rr;case"bool":case"boolean":return Vr;case"string":return Hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function BS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=OS(i.type);if(i.times===void 0){const t=[],n=[];ip(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kS{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const zS=new kS;class Ds{constructor(e){this.manager=e!==void 0?e:zS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class VS extends Error{constructor(e,t){super(e),this.response=t}}class td extends Ds{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:s});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=fi[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){T();function T(){d.read().then(({done:b,value:x})=>{if(b)f.close();else{_+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,A=u.length;R<A;R++){const D=u[R];D.onProgress&&D.onProgress(P)}f.enqueue(x),T()}},b=>{f.error(b)})}}});return new Response(m)}else throw new VS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Bi.add(e,c);const u=fi[e];delete fi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class HS extends Ds{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=So("img");function l(){u(),Bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class GS extends Ds{constructor(e){super(e)}load(e,t,n,s){const r=new At,o=new HS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class gl extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ic=new xe,Hh=new E,Gh=new E;class nd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ju,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WS extends nd{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XS extends gl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new WS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wh=new xe,io=new E,sc=new E;class qS extends nd{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),n.position.copy(io),sc.copy(n.position),sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sc),n.updateMatrixWorld(),s.makeTranslation(-io.x,-io.y,-io.z),Wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh)}}class YS extends gl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jS extends nd{constructor(){super(new Ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gr extends gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new jS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rp extends gl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ho{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class KS extends Ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(e,l),r.manager.itemStart(e)}}let ma;class op{static getContext(){return ma===void 0&&(ma=new(window.AudioContext||window.webkitAudioContext)),ma}static setContext(e){ma=e}}class Wr extends Ds{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new td(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);op.getContext().decodeAudioData(c,function(d){t(d)}).catch(a)}catch(c){a(c)}},n,s);function a(l){s?s(l):console.error(l),r.manager.itemError(e)}}}class $S{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xh(){return performance.now()}const is=new E,qh=new Ye,ZS=new E,ss=new E;class QS extends ht{constructor(){super(),this.type="AudioListener",this.context=op.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $S}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(is,qh,ZS),ss.set(0,0,-1).applyQuaternion(qh),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(is.x,s),t.positionY.linearRampToValueAtTime(is.y,s),t.positionZ.linearRampToValueAtTime(is.z,s),t.forwardX.linearRampToValueAtTime(ss.x,s),t.forwardY.linearRampToValueAtTime(ss.y,s),t.forwardZ.linearRampToValueAtTime(ss.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(is.x,is.y,is.z),t.setOrientation(ss.x,ss.y,ss.z,n.x,n.y,n.z)}}let Pr=class extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};const rs=new E,Yh=new Ye,JS=new E,os=new E;class ap extends Pr{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(rs,Yh,JS),os.set(0,0,1).applyQuaternion(Yh);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(rs.x,n),t.positionY.linearRampToValueAtTime(rs.y,n),t.positionZ.linearRampToValueAtTime(rs.z,n),t.orientationX.linearRampToValueAtTime(os.x,n),t.orientationY.linearRampToValueAtTime(os.y,n),t.orientationZ.linearRampToValueAtTime(os.z,n)}else t.setPosition(rs.x,rs.y,rs.z),t.setOrientation(os.x,os.y,os.z)}}const id="\\[\\]\\.:\\/",eM=new RegExp("["+id+"]","g"),sd="[^"+id+"]",tM="[^"+id.replace("\\.","")+"]",nM=/((?:WC+[\/:])*)/.source.replace("WC",sd),iM=/(WCOD+)?/.source.replace("WCOD",tM),sM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),rM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),oM=new RegExp("^"+nM+iM+sM+rM+"$"),aM=["material","materials","bones","map"];class lM{constructor(e,t,n){const s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eM,"")}static parseTrackName(e){const t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);aM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=lM;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const jh=new xe;class cM{constructor(e,t,n=0,s=1/0){this.ray=new Io(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(e,t=!0,n=[]){return ru(e,this,n,t),n.sort(Kh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ru(e[s],this,n,t);return n.sort(Kh),n}}function Kh(i,e){return i.distance-e.distance}function ru(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ru(r[o],e,t,!0)}}class uM extends tp{constructor(e=10,t=10,n=4473924,s=8947848){n=new ge(n),s=new ge(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===r?n:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new Rt;u.setAttribute("position",new St(l,3)),u.setAttribute("color",new St(c,3));const d=new Cs({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ou);function $h(i,e){if(e===Fg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===eu||e===If){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===eu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class rd extends Ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ho.extractUrlBase(e);o=ho.resolveURL(c,this.path)}else o=ho.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new td(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===lp){try{o[Xe.KHR_BINARY_GLTF]=new PM(e)}catch(d){s&&s(d);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new GM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case Xe.KHR_MATERIALS_UNLIT:o[d]=new fM;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[d]=new DM(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[d]=new LM;break;case Xe.KHR_MESH_QUANTIZATION:o[d]=new IM;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function dM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hM{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new YS(u),c.distance=d;break;case"spot":c=new XS(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class fM{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return lt}extendParams(e,t,n){const s=[];e.color=new ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(s)}}class pM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class mM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(a,a)}return Promise.all(r)}}class gM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class xM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class vM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class MM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Vt)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class wM{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AM{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class RM{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,h,s.mode,s.filter),p})})}else return null}}class CM{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of d){const _=new xe,m=new E,f=new Ye,T=new E(1,1,1),b=new AS(g.geometry,g.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&T.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,_.compose(m,f,T));for(const x in l)if(x==="_COLOR_0"){const P=l[x];b.instanceColor=new iu(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ht.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),p.push(b)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const lp="glTF",so=12,Zh={JSON:1313821514,BIN:5130562};class PM{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,so),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-so,r=new DataView(e,so);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Zh.JSON){const c=new Uint8Array(e,so+o,a);this.content=n.decode(c)}else if(l===Zh.BIN){const c=so+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=ou[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=ou[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=ur[h.componentType];c[d]=p.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(p)},a,c,Zt,h)})})}}class LM{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class IM{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class cp extends Uo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(n-t)/u,h=d*d,p=h*d,g=e*c,_=g-c,m=-2*p+3*h,f=p-h,T=1-m,b=f-h+d;for(let x=0;x!==a;x++){const P=o[_+x+a],R=o[_+x+l]*u,A=o[g+x+a],D=o[g+x]*u;r[x]=T*P+b*R+m*A+f*D}return r}}const UM=new Ye;class NM extends cp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return UM.fromArray(r).normalize().toArray(r),r}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qh={9728:$t,9729:Tt,9984:Tf,9985:Ta,9986:ro,9987:vi},Jh={33071:Oi,33648:Ua,10497:Mr},rc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ou={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FM={CUBICSPLINE:void 0,LINEAR:vo,STEP:yo},oc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new It({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),i.DefaultMaterial}function as(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function BM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(h)}if(s){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function kM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zM(i){let e;const t=i.extensions&&i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ac(t.attributes):e=i.indices+":"+ac(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ac(i.targets[n]);return e}function ac(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function au(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HM=new xe;class GM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new GS(this.options.manager):this.textureLoader=new KS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new td(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return as(r,a,s),mi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ho.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=rc[s.type],a=ur[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ct(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=rc[s.type],c=ur[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==d){const f=Math.floor(h/p),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let b=t.cache.get(T);b||(_=new c(a,f*p,s.count*p/u),b=new MS(_,p/u),t.cache.add(T,b)),m=new Zu(b,l,h%p/u,g)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),m=new Ct(_,l,g);if(s.sparse!==void 0){const f=rc.SCALAR,T=ur[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,P=new T(o[1],b,s.sparse.count*f),R=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,D=P.length;A<D;A++){const v=P[A];if(m.setX(v,R[A*l]),l>=2&&m.setY(v,R[A*l+1]),l>=3&&m.setZ(v,R[A*l+2]),l>=4&&m.setW(v,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Qh[h.magFilter]||Tt,u.minFilter=Qh[h.minFilter]||vi,u.wrapS=Jh[h.wrapS]||Mr,u.wrapT=Jh[h.wrapT]||Mr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==$t&&u.minFilter!==Tt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new At(_);m.needsUpdate=!0,h(m)}),t.load(ho.resolveURL(d,r.path),g,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),mi(d,o),d.userData.mimeType=o.mimeType||VM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new np,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cs,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return It}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const d=s[Xe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new ge(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Zt),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Vt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_t);const u=r.alphaMode||oc.OPAQUE;if(u===oc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===oc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==lt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==lt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==lt){const d=r.emissiveFactor;a.emissive=new ge().setRGB(d[0],d[1],d[2],Zt)}return r.emissiveTexture!==void 0&&o!==lt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),mi(d,r),t.associations.set(d,{materials:e}),r.extensions&&as(s,d,r),d})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ef(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=zM(c),d=s[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=ef(new Rt,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?OM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let f;const T=c[p];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new bS(_,T):new we(_,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?f.geometry=$h(f.geometry,If):m.mode===Tn.TRIANGLE_FAN&&(f.geometry=$h(f.geometry,eu));else if(m.mode===Tn.LINES)f=new tp(_,T);else if(m.mode===Tn.LINE_STRIP)f=new Ps(_,T);else if(m.mode===Tn.LINE_LOOP)f=new RS(_,T);else if(m.mode===Tn.POINTS)f=new CS(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&kM(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),mi(f,r),m.extensions&&as(s,f,m),t.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&as(s,d[0],r),d[0];const h=new gs;r.extensions&&as(s,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(c0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ku(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new xe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){const p=s.channels[d],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],g=d[2],_=d[3],m=d[4],f=[];for(let T=0,b=h.length;T<b;T++){const x=h[T],P=p[T],R=g[T],A=_[T],D=m[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,P,R,A,D);if(v)for(let y=0;y<v.length;y++)f.push(v[y])}return new FS(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,HM)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Jf:c.length>1?u=new gs:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),mi(u,r),r.extensions&&as(n,u,r),r.matrix!==void 0){const d=new xe;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new gs;n.name&&(r.name=s.createUniqueName(n.name)),mi(r,n),n.extensions&&as(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,p]of s.associations)(h instanceof Gn||h instanceof At)&&d.set(h,p);return u.traverse(h=>{const p=s.associations.get(h);p!=null&&d.set(h,p)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ui[r.path]===Ui.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ui[r.path]){case Ui.weights:c=Ar;break;case Ui.rotation:c=Rr;break;case Ui.position:case Ui.scale:c=Cr;break;default:switch(n.itemSize){case 1:c=Ar;break;case 2:case 3:default:c=Cr;break}break}const u=s.interpolation!==void 0?FM[s.interpolation]:vo,d=this._getArrayFromAccessor(n);for(let h=0,p=l.length;h<p;h++){const g=new c(l[h]+"."+Ui[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=au(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Rr?NM:cp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function WM(i,e,t){const n=e.attributes,s=new ni;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new E(l[0],l[1],l[2]),new E(c[0],c[1],c[2])),a.normalized){const u=au(ur[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new E,l=new E;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const _=au(ur[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ii;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ef(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ou[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return qe.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),mi(i,e),WM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?BM(i,e.targets,t):i})}const XM=document.getElementById("drone-3d-container"),No=new Qf,od=new qt(50,1,.1,100);od.position.set(0,.5,2);od.lookAt(0,0,0);const _l=new Zf({alpha:!0,antialias:!0});_l.setSize(400,400);_l.setClearColor(0,0);XM.appendChild(_l.domElement);const qM=new rp(16777215,.8);No.add(qM);const up=new Gr(51455,1);up.position.set(2,2,2);No.add(up);const dp=new Gr(16739179,.5);dp.position.set(-2,1,-2);No.add(dp);let gi=null,hp=[];const YM=new rd;YM.load("./doron.glb",i=>{gi=i.scene,gi.scale.set(.8,.8,.8),gi.position.set(0,0,0),No.add(gi),gi.traverse(a=>{if(a.name==="pera1"||a.name==="pera2"||a.name==="pera3"||a.name==="pera4"){if(a.geometry){a.geometry.computeBoundingBox();const l=new E;a.geometry.boundingBox.getCenter(l),a.geometry.translate(-l.x,-l.y,-l.z),a.position.copy(l)}hp.push(a)}});const e=new bn(.1,.04,.01),t=new It({color:35071,emissive:35071,emissiveIntensity:2}),n=new we(e,t);n.position.set(0,.04,.22),gi.add(n);let s=0;const r=[{visible:!0,duration:150},{visible:!1,duration:150},{visible:!0,duration:150},{visible:!1,duration:1e3}];function o(){n.visible=r[s].visible,setTimeout(()=>{s=(s+1)%r.length,o()},r[s].duration)}o()});let tf=0;function fp(){requestAnimationFrame(fp),gi&&(tf+=.016,gi.position.y=Math.sin(tf*1.2)*.05,gi.rotation.y+=.005,hp.forEach(i=>{i.rotation.y+=.5})),_l.render(No,od)}fp();const xi=new Audio("./mainBGM.mp3");xi.loop=!0;xi.volume=.2;let fo=!1;const Dr=document.getElementById("bgm-btn");function jM(){fo?(xi.pause(),Dr.classList.remove("playing"),fo=!1):xi.play().then(()=>{Dr.classList.add("playing"),fo=!0}).catch(i=>console.log("BGM再生エラー:",i))}Dr.addEventListener("click",jM);const pp=new Audio("./mainbutton.mp3");pp.volume=.5;const Mo=new Audio("./crash.mp3");Mo.volume=.3;const KM=document.getElementById("credits-btn"),lu=document.getElementById("back-btn"),mp=document.getElementById("credits-page"),gp=document.getElementById("landing-page");KM.addEventListener("click",()=>{Mo.currentTime=0,Mo.play(),gp.style.display="none",mp.style.display="flex",lu.style.display="block",Dr.style.display="none"});lu.addEventListener("click",()=>{Mo.currentTime=0,Mo.play(),mp.style.display="none",gp.style.display="flex",lu.style.display="none",Dr.style.display="flex"});function $M(i=2e3){if(!fo)return;const e=xi.volume,t=20,n=i/t,s=e/t;let r=0;const o=setInterval(()=>{r++,xi.volume=Math.max(0,e-s*r),r>=t&&(clearInterval(o),xi.pause(),xi.currentTime=0,xi.volume=.2,Dr.classList.remove("playing"),fo=!1)},n)}function _p(i,e){pp.play(),$M(2500);let t=0;const n=setInterval(()=>{i.style.opacity=i.style.opacity==="0.3"?"1":"0.3",t++,t>=15&&(clearInterval(n),i.style.opacity="1",e())},200)}document.getElementById("landing-mr-btn").addEventListener("click",function(){const i=this;i.disabled=!0,document.getElementById("landing-vr-btn").disabled=!0,_p(i,function(){document.getElementById("landing-page").style.display="none",document.getElementById("start-button").click()})});document.getElementById("landing-vr-btn").addEventListener("click",function(){const i=this;i.disabled=!0,document.getElementById("landing-mr-btn").disabled=!0,_p(i,function(){document.getElementById("landing-page").style.display="none",document.getElementById("vr-button").click()})});const vt={ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function xp(i){const e=await fetch(i);if(e.ok)return e.json();throw new Error(e.statusText)}async function ZM(i){if(!i)throw new Error("No basePath supplied");return await xp(`${i}/profilesList.json`)}async function QM(i,e,t=null,n=!0){if(!i)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const s=await ZM(e);let r;if(i.profiles.some(l=>{const c=s[l];return c&&(r={profileId:l,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}),!!r}),!r){if(!t)throw new Error("No matching profile name found");const l=s[t];if(!l)throw new Error(`No matching profile name found and default profile "${t}" missing.`);r={profileId:t,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}}const o=await xp(r.profilePath);let a;if(n){let l;if(i.handedness==="any"?l=o.layouts[Object.keys(o.layouts)[0]]:l=o.layouts[i.handedness],!l)throw new Error(`No matching handedness, ${i.handedness}, in profile ${r.profileId}`);l.assetPath&&(a=r.profilePath.replace("profile.json",l.assetPath))}return{profile:o,assetPath:a}}const JM={xAxis:0,yAxis:0,button:0,state:vt.ComponentState.DEFAULT};function eT(i=0,e=0){let t=i,n=e;if(Math.sqrt(i*i+e*e)>1){const o=Math.atan2(e,i);t=Math.cos(o),n=Math.sin(o)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class tT{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===vt.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(JM)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:s}){const{normalizedXAxis:r,normalizedYAxis:o}=eT(e,t);switch(this.componentProperty){case vt.ComponentProperty.X_AXIS:this.value=this.states.includes(s)?r:.5;break;case vt.ComponentProperty.Y_AXIS:this.value=this.states.includes(s)?o:.5;break;case vt.ComponentProperty.BUTTON:this.value=this.states.includes(s)?n:0;break;case vt.ComponentProperty.STATE:this.valueNodeProperty===vt.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(s):this.value=this.states.includes(s)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class nT{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const s=new tT(t.visualResponses[n]);this.visualResponses[n]=s}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:vt.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=vt.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=vt.ComponentState.PRESSED:(t.touched||this.values.button>vt.ButtonTouchThreshold)&&(this.values.state=vt.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===vt.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>vt.AxisTouchThreshold&&(this.values.state=vt.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===vt.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>vt.AxisTouchThreshold&&(this.values.state=vt.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class iT{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(s=>{const r=this.layoutDescription.components[s];this.components[s]=new nT(s,r)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const sT="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",rT="generic-trigger";class oT extends ht{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:s,minNode:r,maxNode:o,value:a,valueNodeProperty:l}=n;s&&(l===vt.VisualResponseProperty.VISIBILITY?s.visible=a:l===vt.VisualResponseProperty.TRANSFORM&&(s.quaternion.slerpQuaternions(r.quaternion,o.quaternion,a),s.position.lerpVectors(r.position,o.position,a)))})}))}}function aT(i,e){Object.values(i.components).forEach(t=>{const{type:n,touchPointNodeName:s,visualResponses:r}=t;if(n===vt.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(s),t.touchPointNode){const o=new ji(.001),a=new lt({color:255}),l=new we(o,a);t.touchPointNode.add(l)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(r).forEach(o=>{const{valueNodeName:a,minNodeName:l,maxNodeName:c,valueNodeProperty:u}=o;if(u===vt.VisualResponseProperty.TRANSFORM){if(o.minNode=e.getObjectByName(l),o.maxNode=e.getObjectByName(c),!o.minNode){console.warn(`Could not find ${l} in the model`);return}if(!o.maxNode){console.warn(`Could not find ${c} in the model`);return}}o.valueNode=e.getObjectByName(a),o.valueNode||console.warn(`Could not find ${a} in the model`)})})}function nf(i,e){aT(i.motionController,e),i.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=i.envMap,t.material.needsUpdate=!0)}),i.add(e)}class lT{constructor(e=null,t=null){this.gltfLoader=e,this.path=sT,this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new rd)}setPath(e){return this.path=e,this}createControllerModel(e){const t=new oT;let n=null;return e.addEventListener("connected",s=>{const r=s.data;r.targetRayMode!=="tracked-pointer"||!r.gamepad||r.hand||QM(r,this.path,rT).then(({profile:o,assetPath:a})=>{t.motionController=new iT(r,o,a);const l=this._assetCache[t.motionController.assetUrl];if(l)n=l.scene.clone(),nf(t,n),this.onLoad&&this.onLoad(n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,n=c.scene.clone(),nf(t,n),this.onLoad&&this.onLoad(n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(o=>{console.warn(o)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}let J=null,Te=null,Ae=null,L=null,Ue=null,Et=!1,yp=[],cn=null,We=null,Ni=0,Lr=!1,vp=!1,Dn={horizontal:.15,vertical:.05},ms=!1,Ls=!1,ir=new E,To=.02,Pa="horizontal",Sp=!1,Zn=null,yi=null,Jt=null,en=null,ki=!0,Mp=!1,kt=null,Ba=!1,Tp=!1,zt=null,Ir=!1,Qn=null,cu=0,xl=!1,bp=1,uu=0,yl=!1,Ep=1,Ut=null,bo=!1,wp=0,Ap=!1,Rp=1,Cp=!1,Yn=null,In=null,an=1,Nt=null,Eo=!1,Pp=0,Dp=!1,Lp=1,jn=null,Un=null,Ft=null,Ur=!1,Ip=0,Up=!1,Np=1,Kn=null,Nn=null,Ot=null,ad=!1,Fp=0,Op=!1,Bp=1,$n=null,Fn=null,kp=!1,zp=!1,rn=null,dr=!0,hr=!0,on=null,un=!1,Ki=!1,Fo=0,ka=1,Da=!1,_s=null,sr=null,wo=null,du=null,Vp=null,Gi=!1,rr=null,bs=null,hu=null,Hp=null,lo=null,Gp=!1,tn=new E(0,0,0),mn=new E(0,0,0),Oo=new E(0,0,0),Kt=null,fr=null,Es=null,pr=!1,ws=!0,_n=new Map,fu=null,po=[],Mi=null,gn=null,zi=new Map,vl=!0,Ao=2;function Wp(i){po=i}function Sl(i){Mi=i}function Ml(i){gn=i}function cT(i){vl=i}function uT(i){Ao=i}let Xp=null,qp=null,Jn=!1,ei=!1,Js=null,pu=null,mo=new E,xs=new Ye,mu=!1,gu=!1,qi=!1,La=0,_u=.3,Wn=.3,lc=new E,Ks=new Ye;const cc=.3;let $s=new E,Zs=new Ye;const sf=.3;let uc=new E,Yp=0,Bo=!1,jp=new E,ld=new Ye,cd=new Ye,Ia=0;const dT=1,hT=1/dT;let gt=new E(0,0,0),xu=0,go=.001;const Kp=.001;let za=.015;const fT=.015;let sn=10,yu=null,$p=!1,Zp=!1,nn=null,pn=null,ud=.965;const pT=.965;let Qp=.0015,Va=.06,Jp=.965;const mT=.965;let Ha=.6;const rf=.05;let Tl=.15,mr=!1,Nr=!1;new E;let er=null,vu=null,em=null,Su=!1;function gT(){return(navigator.language||navigator.userLanguage||"en").startsWith("ja")?"ja":"en"}let dd=gT();function _T(i){J=i}function xT(i){Te=i}function yT(i){Ae=i}function vT(i){L=i}function Ga(i){Ue=i}function hd(i){Et=i}function ST(i){yp=i}function MT(i){cn=i}function TT(i){We=i}function Mu(i){Ni=i}function bT(i){Lr=i}function ET(i){vp=i}function wT(i){Dn=i}function _i(i){ms=i}function Tu(i){Ls=i}function tm(i){To=i}function _o(i){Pa=i}function AT(i){Sp=i}function nm(i){Zn=i}function im(i){yi=i}function dc(i){Jt=i}function hc(i){en=i}function RT(i){ki=i}function CT(i){Mp=i}function sm(i){kt=i}function rm(i){Ba=i}function PT(i){Tp=i}function om(i){zt=i}function am(i){Ir=i}function lm(i){Qn=i}function Wa(i){cu=i}function Xa(i){xl=i}function cm(i){bp=i}function qa(i){uu=i}function Ya(i){yl=i}function um(i){Ep=i}function dm(i){Ut=i}function hm(i){bo=i}function fm(i){wp=i}function ja(i){Ap=i}function pm(i){Rp=i}function ga(i){Cp=i}function mm(i){Yn=i}function gm(i){In=i}function Yi(i){an=i}function _m(i){Nt=i}function xm(i){Eo=i}function ym(i){Pp=i}function Ka(i){Dp=i}function vm(i){Lp=i}function Sm(i){jn=i}function Mm(i){Un=i}function Tm(i){Ft=i}function bm(i){Ur=i}function Em(i){Ip=i}function $a(i){Up=i}function wm(i){Np=i}function Am(i){Kn=i}function Rm(i){Nn=i}function Cm(i){Ot=i}function Pm(i){ad=i}function Dm(i){Fp=i}function Za(i){Op=i}function Lm(i){Bp=i}function Im(i){$n=i}function Um(i){Fn=i}function _a(i){kp=i}function Ro(i){zp=i}function bu(i){rn=i}function DT(i){dr=i}function LT(i){hr=i}function Eu(i){on=i}function Co(i){un=i}function Po(i){Ki=i}function Wi(i){Fo=i}function IT(i){ka=i}function UT(i){Da=i}function Fr(i){_s=i}function Do(i){sr=i}function Or(i){wo=i}function xa(i){du=i}function ya(i){Vp=i}function Nm(i){Gi=i}function wu(i){rr=i}function Au(i){bs=i}function va(i){hu=i}function Sa(i){Hp=i}function Ru(i){lo=i}function Br(i){Gp=i}function of(i){Kt=i}function Fm(i){fr=i}function Om(i){Es=i}function af(i){pr=i}function NT(i){ws=i}function Bm(i){fu=i}function km(i){Xp=i}function zm(i){qp=i}function Cu(i){Jn=i}function Vm(i){ei=i}function Pu(i){Js=i}function Hm(i){pu=i}function FT(i){mu=i}function OT(i){gu=i}function lf(i){qi=i}function BT(i){La=i}function kT(i){_u=i}function zT(i){Wn=i}function VT(i){Yp=i}function fd(i){Bo=i}function Qa(i){Ia=i}function ko(i){xu=i}function Gm(i){go=i}function HT(i){za=i}function cf(i){sn=i}function uf(i){yu=i}function Du(i){$p=i}function Lu(i){Zp=i}function fc(i){nn=i}function pc(i){pn=i}function Wm(i){ud=i}function GT(i){Qp=i}function WT(i){Va=i}function Xm(i){Jp=i}function XT(i){Ha=i}function qT(i){Tl=i}function pd(i){mr=i}function df(i){Nr=i}function md(i){er=i}function Ja(i){vu=i}function el(i){em=i}function tl(i){Su=i}function YT(i){dd=i}function Le(i){const e=document.getElementById("info");e&&(e.textContent=i),console.log("[INFO]",i)}let ys=null,qm=null,vs=null,Ym=null,Ss=null,jm=null,Ms=null,Km=null,Ln=null,$m=null,Vn=null,Zm=null,nl=!1,gr=null;function jT(){if(!cn){console.error("オーディオリスナーが未初期化");return}ys=new Pr(cn),new Wr().load("./button1.mp3",e=>{qm=e,ys.setBuffer(e),ys.setVolume(.2),console.log("ボタン音声読み込み完了")},void 0,e=>{console.error("ボタン音声ファイルの読み込みエラー:",e)})}function Bt(){!ys||!qm||(ys.isPlaying&&ys.stop(),ys.play())}function KT(){if(!cn){console.error("オーディオリスナーが未初期化");return}vs=new Pr(cn),Ss=new Pr(cn);const i=new Wr;i.load("./window1.mp3",e=>{Ym=e,vs.setBuffer(e),vs.setVolume(.2),console.log("ウィンドウ開く音声読み込み完了")},void 0,e=>{console.error("ウィンドウ開く音声ファイルの読み込みエラー:",e)}),i.load("./window2.mp3",e=>{jm=e,Ss.setBuffer(e),Ss.setVolume(.2),console.log("ウィンドウ閉じる音声読み込み完了")},void 0,e=>{console.error("ウィンドウ閉じる音声ファイルの読み込みエラー:",e)})}function Xr(){!vs||!Ym||(vs.isPlaying&&vs.stop(),vs.play())}function qr(){!Ss||!jm||(Ss.isPlaying&&Ss.stop(),Ss.play())}function $T(){if(!cn){console.error("オーディオリスナーが未初期化");return}Ms=new Pr(cn),new Wr().load("./cursor.mp3",e=>{Km=e,Ms.setBuffer(e),Ms.setVolume(.2),console.log("カーソル音声読み込み完了")},void 0,e=>{console.error("カーソル音声ファイルの読み込みエラー:",e)})}function hf(){!Ms||!Km||(Ms.isPlaying&&Ms.stop(),Ms.play())}function ZT(){if(!L||!cn){console.error("ドローンまたはオーディオリスナーが未初期化");return}Ln=new ap(cn),new Wr().load("./crash.mp3",e=>{$m=e,Ln.setBuffer(e),Ln.setVolume(.5),Ln.setRefDistance(.5),Ln.setRolloffFactor(2),Ln.setMaxDistance(10),console.log("衝突音声読み込み完了")},void 0,e=>{console.error("衝突音声ファイルの読み込みエラー:",e)}),L.add(Ln)}function tr(){!Ln||!$m||(Ln.isPlaying&&Ln.stop(),Ln.play())}function QT(){if(!cn){console.error("オーディオリスナーが未初期化");return}Vn=new Pr(cn),new Wr().load("./maou_bgm.mp3",e=>{Zm=e,Vn.setBuffer(e),Vn.setLoop(!0),Vn.setVolume(.2),console.log("チュートリアルBGM読み込み完了")},void 0,e=>{console.error("チュートリアルBGMファイルの読み込みエラー:",e)})}function JT(){!Vn||!Zm||nl||(gr&&(clearInterval(gr),gr=null),Vn.setVolume(.2),Vn.play(),nl=!0,console.log("チュートリアルBGM再生開始"))}function eb(i=2e3){if(!Vn||!nl)return;const e=Vn.getVolume(),t=20,n=i/t,s=e/t;let r=0;gr=setInterval(()=>{r++;const o=Math.max(0,e-s*r);Vn.setVolume(o),r>=t&&(clearInterval(gr),gr=null,Vn.stop(),nl=!1,console.log("チュートリアルBGMフェードアウト完了"))},n)}function tb(){if(!L||!cn){console.error("ドローンまたはオーディオリスナーが未初期化");return}const i=new ap(cn);new Wr().load("./OTO.mp3",t=>{i.setBuffer(t),i.setLoop(!0),i.setVolume(.7),i.setRefDistance(.5),i.setRolloffFactor(2),i.setMaxDistance(10),console.log("ドローン音声読み込み完了"),Le("ドローン音声準備完了")},t=>{console.log("音声読み込み中:",t.loaded/t.total*100+"%")},t=>{console.error("音声ファイルの読み込みエラー:",t),Le("エラー: 音声ファイルを読み込めませんでした")}),L.add(i),TT(i),console.log("ドローンに音声を追加")}function gd(){if(!We||!We.isPlaying||Ki||!un)return;if(!Lr){const n=Math.pow(Wn/.3,.5)*.7,s=Math.max(.1,Math.min(1,n));We.setVolume(s)}let i=Math.pow(.3/Wn,.5);i=Math.max(.2,Math.min(2.7,i));const e=Math.min(Yp*.6,.3),t=i+e;We.setPlaybackRate(Math.max(.2,Math.min(3,t)))}function nb(){const i=new bn(.1,.04,.01),e=new It({color:35071,emissive:35071,emissiveIntensity:2}),t=new we(i,e);t.position.set(0,.04,.22);let n=0;const s=[{visible:!0,duration:150},{visible:!1,duration:150},{visible:!0,duration:150},{visible:!1,duration:1e3}];function r(){if(!Ki&&!un&&Fo===0){t.visible=!0,setTimeout(r,100);return}t.visible=s[n].visible,setTimeout(()=>{n=(n+1)%s.length,r()},s[n].duration)}return r(),t}function Qm(){if(!L)return;const i=new ni().setFromObject(L),e=new E;i.getSize(e);const t=Math.max(e.x,e.z)/2,n=e.y/2*1.1;wT({horizontal:t,vertical:n}),console.log("ドローンのサイズ:",e),console.log("当たり判定 - 水平:",(t*100).toFixed(1)+"cm"),console.log("当たり判定 - 垂直:",(n*100).toFixed(1)+"cm")}function ib(i){L&&(i<.01&&(i=.01),L.scale.set(i,i,i),zT(i),Qm(),il(),gd(),console.log("ドローンのスケール変更:",i.toFixed(2)))}function il(){const i=.05+(sn-1)*3.95/29,e=Math.pow(Wn/.3,.5),t=Math.max(.5,Math.min(2,e)),n=fT*i*t,s=Kp*i*t;HT(n),Gm(s);const r=(t-1)*.04;let o=pT+r;o=Math.max(.9,Math.min(.98,o)),Wm(o);let a=mT+r;a=Math.max(.9,Math.min(.98,a)),Xm(a),Ls?(tm(n*1.5),console.log(`速度レベル: ${sn}, サイズ倍率: ${t.toFixed(2)}, maxSpeed: ${n.toFixed(4)}, autoReturnSpeed: ${To.toFixed(4)}, 摩擦: ${o.toFixed(3)}`)):console.log(`速度レベル: ${sn}, サイズ倍率: ${t.toFixed(2)}, maxSpeed: ${n.toFixed(4)}, 加速度: ${s.toFixed(6)}, 摩擦: ${o.toFixed(3)}`)}function sb(){new rd().load("./doron.glb",e=>{const t=e.scene;t.scale.set(.3,.3,.3),t.position.set(0,0,-2),J.add(t),vT(t);const n=[];t.traverse(r=>{if(r.name==="pera1"||r.name==="pera2"||r.name==="pera3"||r.name==="pera4"){if(r.geometry){r.geometry.computeBoundingBox();const o=new E;r.geometry.boundingBox.getCenter(o),console.log("プロペラ発見:",r.name),console.log("  元の位置:",r.position.clone()),console.log("  ジオメトリ中心:",o),r.geometry.translate(-o.x,-o.y,-o.z),r.position.copy(o),console.log("  新しい位置:",r.position)}n.push(r)}}),ST(n),console.log("ドローンモデル読み込み完了"),console.log("プロペラ数:",n.length),Qm(),il();const s=nb();t.add(s),tb(),jT(),KT(),$T(),ZT(),QT(),t.visible=!1,Le("ドローンモデル読み込み完了")},e=>{console.log("Loading:",e.loaded/e.total*100+"%")},e=>{console.error("ドローンモデルの読み込みエラー:",e),Le("エラー: ドローンモデルを読み込めませんでした")})}const ff={ja:{settings:{title:"設定",language:"言語",languageDesc:"表示言語を選択",deadzone:"デッドゾーン",deadzoneDesc:"スティック入力の無効範囲",acceleration:"加速度",accelerationDesc:"ドローンの加速の強さ",friction:"摩擦",frictionDesc:"高いほど滑らかに止まる",tilt:"傾き量",tiltDesc:"移動時のドローンの傾き",angularSpeed:"旋回スピード",angularSpeedDesc:"左スティック横の回転速度",propellerSpeed:"プロペラ速度",propellerSpeedDesc:"プロペラの回転速度",fpvMode:"FPVモード (実験的機能)",fpvModeDesc:"ドローン視点で操縦",shadow:"影の表示",shadowDesc:"ドローンの影を表示",occlusion:"オクルージョン",occlusionDesc:"深度遮蔽 (変更後はタイトルに戻ると更新)",controllerMode:"操作モード",controllerModeDesc:"コントローラーの操作配置",mode1:"モード1",mode2:"モード2",laserInstruction:"右コントローラーのレーザーで操作",closeInstruction:"X ボタンで閉じる",returnToTitle:"タイトルに戻る",tutorial:"チュートリアルを受ける",default:"DEFAULT",on:"ON",off:"OFF",japanese:"日本語",english:"English"},guide:{title:"操作ガイド",leftController:"左コントローラー",rightController:"右コントローラー",stickUpDown:"スティック↑↓",stickLeftRight:"スティック←→",yButton:"Y ボタン",xButton:"X ボタン",aButton:"A ボタン",bButton:"B ボタン",stickPress:"スティック押込",trigger:"トリガー",grip:"グリップ",forwardBackward:"前進 / 後退",turnLeftRight:"左旋回 / 右旋回",startStop:"起動 / 終了",settingsWindow:"設定ウィンドウ",collisionToggle:"衝突 ON/OFF",speedDown:"速度ダウン",grabDrone:"ドローンを掴む",upDown:"上昇 / 下降",moveLeftRight:"左移動 / 右移動",thisMenu:"このメニュー",volumeToggle:"音量 ON/OFF",autoReturn:"自動帰還",speedUp:"速度アップ",handTracking:"ハンドトラッキング対応",handTrackingDesc:"ピンチジェスチャーでドローンを掴んで移動",bothGrips:"両グリップ同時押し + 左右移動: ドローンサイズ変更",closeWithA:"A ボタンで閉じる",mrWarning:"⚠️ 当たり判定は事前にスキャンした部屋のみになります",trackingWarning:"⚠️ コントローラーがトラッキングロストすると操作できません",occlusionWarning1:"⚠️ 外で使用時にドローンが見えなくなるときは",occlusionWarning2:"オクルージョンをオフにしましょう"},status:{autoReturn:"自動帰還中",volumeOn:"音量 ON",volumeOff:"音量 OFF",collisionOn:"当たり判定 ON",collisionOff:"当たり判定 OFF",startingUp:"起動中",shuttingDown:"終了中",trackingLostBoth:"Controllers Tracking Lost",trackingLostLeft:"Left Controller Tracking Lost",trackingLostRight:"Right Controller Tracking Lost"},welcome:{step:"チュートリアル①",stepEn:"Tutorial 1",title:"ドローンの世界へようこそ",titleEn:"Welcome to Drone World",instruction1:"コントローラーの前にドローンが配置されます",instruction1En:"Drone will be placed in front of your controller",nextWithA:"A ボタンで次へ",nextWithAEn:"Press A to continue"},tutorial2:{step:"チュートリアル②",stepEn:"Tutorial 2",title:"ドローンの世界へようこそ",titleEn:"Welcome to Drone World",instruction1:"Aボタンでコントロールガイドを開く",instruction2:"こちらで操作方法を覚えましょう",instruction1En:"Press A button to open Controller Guide",instruction2En:"Learn how to operate here",nextWithA:"A ボタンで開く",nextWithAEn:"Press A to open"},tutorial3:{step:"チュートリアル③",stepEn:"Tutorial 3",title:"ドローンの世界へようこそ",titleEn:"Welcome to Drone World",instruction1:"Xボタンで各種設定ウィンドウが出ます",instruction1En:"Press X button to open Settings window",nextWithA:"X ボタンで開く",nextWithAEn:"Press X to open"},tutorial4:{step:"チュートリアル④",stepEn:"Tutorial 4",title:"ドローンの世界へようこそ",titleEn:"Welcome to Drone World",instruction1:"Yボタンでドローンを起動できます",instruction2:"さぁドローンを楽しみましょう!!",instruction1En:"Press Y button to start the Drone",instruction2En:"Let's enjoy flying the Drone!!",nextWithA:"Y ボタンで起動",nextWithAEn:"Press Y to start"}},en:{settings:{title:"SETTINGS",language:"Language",languageDesc:"Select display language",deadzone:"Deadzone",deadzoneDesc:"Stick input dead zone",acceleration:"Acceleration",accelerationDesc:"Drone acceleration strength",friction:"Friction",frictionDesc:"Higher = smoother stop",tilt:"Tilt Amount",tiltDesc:"Drone tilt during movement",angularSpeed:"Turn Speed",angularSpeedDesc:"Left stick horizontal rotation",propellerSpeed:"Propeller Speed",propellerSpeedDesc:"Propeller rotation speed",fpvMode:"FPV Mode (Experimental)",fpvModeDesc:"Fly from drone perspective",shadow:"Shadow",shadowDesc:"Show drone shadow",occlusion:"Occlusion",occlusionDesc:"Depth occlusion (return to title to apply)",controllerMode:"Control Mode",controllerModeDesc:"Controller stick layout",mode1:"Mode 1",mode2:"Mode 2",laserInstruction:"Use right controller laser to operate",closeInstruction:"Press X to close",returnToTitle:"Return to Title",tutorial:"Start Tutorial",default:"DEFAULT",on:"ON",off:"OFF",japanese:"日本語",english:"English"},guide:{title:"CONTROLLER GUIDE",leftController:"Left Controller",rightController:"Right Controller",stickUpDown:"Stick ↑↓",stickLeftRight:"Stick ←→",yButton:"Y Button",xButton:"X Button",aButton:"A Button",bButton:"B Button",stickPress:"Stick Press",trigger:"Trigger",grip:"Grip",forwardBackward:"Forward / Backward",turnLeftRight:"Turn Left / Right",startStop:"Start / Stop",settingsWindow:"Settings Window",collisionToggle:"Collision ON/OFF",speedDown:"Speed Down",grabDrone:"Grab Drone",upDown:"Up / Down",moveLeftRight:"Move Left / Right",thisMenu:"This Menu",volumeToggle:"Volume ON/OFF",autoReturn:"Auto Return",speedUp:"Speed Up",handTracking:"Hand Tracking Supported",handTrackingDesc:"Pinch gesture to grab drone and move",bothGrips:"Both Grips + Move: Change Drone Size",closeWithA:"Press A to close",mrWarning:"⚠️ Collision only works in pre-scanned rooms",trackingWarning:"⚠️ Controls disabled when controller tracking is lost",occlusionWarning1:"⚠️ If drone becomes invisible outdoors,",occlusionWarning2:"turn off Occlusion in settings"},status:{autoReturn:"Auto Returning",volumeOn:"Volume On",volumeOff:"Volume Off",collisionOn:"Collision On",collisionOff:"Collision Off",startingUp:"STARTING UP",shuttingDown:"SHUTTING DOWN",trackingLostBoth:"Controllers Tracking Lost",trackingLostLeft:"Left Controller Tracking Lost",trackingLostRight:"Right Controller Tracking Lost"},welcome:{step:"Tutorial 1",stepEn:"Tutorial 1",title:"Welcome to Drone World",titleEn:"Welcome to Drone World",instruction1:"Drone will be placed in front of your controller",instruction1En:"Drone will be placed in front of your controller",nextWithA:"Press A to continue",nextWithAEn:"Press A to continue"},tutorial2:{step:"Tutorial 2",stepEn:"Tutorial 2",title:"Welcome to Drone World",titleEn:"Welcome to Drone World",instruction1:"Press A button to open Controller Guide",instruction1En:"Press A button to open Controller Guide",nextWithA:"Press A to open",nextWithAEn:"Press A to open"},tutorial3:{step:"Tutorial 3",stepEn:"Tutorial 3",title:"Welcome to Drone World",titleEn:"Welcome to Drone World",instruction1:"Press X button to open Settings window",instruction1En:"Press X button to open Settings window",nextWithA:"Press X to open",nextWithAEn:"Press X to open"},tutorial4:{step:"Tutorial 4",stepEn:"Tutorial 4",title:"Welcome to Drone World",titleEn:"Welcome to Drone World",instruction1:"Press Y button to start the Drone",instruction2:"Let's enjoy flying the Drone!!",instruction1En:"Press Y button to start the Drone",instruction2En:"Let's enjoy flying the Drone!!",nextWithA:"Press Y to start",nextWithAEn:"Press Y to start"}}};function k(i,e){return ff[dd||"ja"][i][e]||ff.ja[i][e]||e}function rb(){if(Zn)return;const i=document.createElement("canvas");i.width=512,i.height=128;const e=i.getContext("2d");e.fillStyle="#00ff00",e.font="bold 60px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(k("status","autoReturn"),i.width/2,i.height/2);const t=new xn(i),n=new bt(.15,.0375),s=new lt({map:t,transparent:!0,side:_t,depthWrite:!1}),r=new we(n,s);J.add(r),nm(r)}function ob(){if(yi)return;const i=document.createElement("canvas");i.width=512,i.height=128;const e=i.getContext("2d");e.fillStyle="#00ff00",e.font="bold 60px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(k("status","autoReturn"),i.width/2,i.height/2);const t=new xn(i),n=new bt(.15,.0375),s=new lt({map:t,transparent:!0,side:_t,depthWrite:!1}),r=new we(n,s);J.add(r),im(r)}function Jm(){Zn&&(J.remove(Zn),Zn.geometry.dispose(),Zn.material.dispose(),Zn.material.map.dispose(),nm(null)),yi&&(J.remove(yi),yi.geometry.dispose(),yi.material.dispose(),yi.material.map.dispose(),im(null))}function ab(){if(Zn){const i=new E;Te.getWorldPosition(i);const e=new E(0,0,-1).applyQuaternion(Te.quaternion),t=new E(1,0,0).applyQuaternion(Te.quaternion),n=new E(0,-1,0).applyQuaternion(Te.quaternion),s=i.clone().add(e.multiplyScalar(.5)).add(t.multiplyScalar(.2)).add(n.multiplyScalar(.15));Zn.position.copy(s),Zn.lookAt(Te.position)}yi&&(yi.visible=!1)}function Ma(){nn&&(J.remove(nn),nn.geometry.dispose(),nn.material.dispose(),nn.material.map.dispose(),fc(null)),pn&&(J.remove(pn),pn.geometry.dispose(),pn.material.dispose(),pn.material.map.dispose(),pc(null));const i=document.createElement("canvas");i.width=512,i.height=128;const e=i.getContext("2d");e.fillStyle="#ffff00",e.font="bold 60px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("Speed "+sn,i.width/2,i.height/2);const t=new xn(i),n=new bt(.2,.05),s=new lt({map:t.clone(),transparent:!0,side:_t,depthWrite:!1}),r=new we(n,s);J.add(r),fc(r);const o=new bt(.2,.05),a=new lt({map:t.clone(),transparent:!0,side:_t,depthWrite:!1}),l=new we(o,a);J.add(l),pc(l),yu&&clearTimeout(yu);const c=setTimeout(()=>{nn&&(J.remove(nn),nn.geometry.dispose(),nn.material.dispose(),nn.material.map.dispose(),fc(null)),pn&&(J.remove(pn),pn.geometry.dispose(),pn.material.dispose(),pn.material.map.dispose(),pc(null)),uf(null)},3e3);uf(c)}function lb(){if(nn){const i=new E;Te.getWorldPosition(i);const e=new E(0,0,-1).applyQuaternion(Te.quaternion),t=new E(1,0,0).applyQuaternion(Te.quaternion),n=new E(0,-1,0).applyQuaternion(Te.quaternion),s=i.clone().add(e.multiplyScalar(.5)).add(t.multiplyScalar(.2)).add(n.multiplyScalar(.2));nn.position.copy(s),nn.lookAt(Te.position)}pn&&(pn.visible=!1)}function pf(i){Jt&&(J.remove(Jt),Jt.geometry.dispose(),Jt.material.dispose(),Jt.material.map.dispose(),dc(null));const e=document.createElement("canvas");e.width=512,e.height=128;const t=e.getContext("2d");t.fillStyle="#00ff00",t.font="bold 60px Arial",t.textAlign="center",t.textBaseline="middle";const n=i?k("status","volumeOn"):k("status","volumeOff");t.fillText(n,e.width/2,e.height/2);const s=new xn(e),r=new bt(.2,.05),o=new lt({map:s,transparent:!0,side:_t,depthWrite:!1}),a=new we(r,o);J.add(a),dc(a),setTimeout(()=>{Jt&&(J.remove(Jt),Jt.geometry.dispose(),Jt.material.dispose(),Jt.material.map.dispose(),dc(null))},3e3)}function cb(){if(Jt){const i=new E;Te.getWorldPosition(i);const e=new E(0,0,-1).applyQuaternion(Te.quaternion),t=new E(1,0,0).applyQuaternion(Te.quaternion),n=new E(0,-1,0).applyQuaternion(Te.quaternion),s=i.clone().add(e.multiplyScalar(.5)).add(t.multiplyScalar(.2)).add(n.multiplyScalar(.25));Jt.position.copy(s),Jt.lookAt(Te.position)}}function ub(i){en&&(J.remove(en),en.geometry.dispose(),en.material.dispose(),en.material.map.dispose(),hc(null));const e=document.createElement("canvas");e.width=512,e.height=128;const t=e.getContext("2d");t.fillStyle="#00ff00",t.font="bold 60px Arial",t.textAlign="center",t.textBaseline="middle";const n=i?k("status","collisionOn"):k("status","collisionOff");t.fillText(n,e.width/2,e.height/2);const s=new xn(e),r=new bt(.2,.05),o=new lt({map:s,transparent:!0,side:_t,depthWrite:!1}),a=new we(r,o);J.add(a),hc(a),setTimeout(()=>{en&&(J.remove(en),en.geometry.dispose(),en.material.dispose(),en.material.map.dispose(),hc(null))},3e3)}function db(){if(en){const i=new E;Te.getWorldPosition(i);const e=new E(0,0,-1).applyQuaternion(Te.quaternion),t=new E(-1,0,0).applyQuaternion(Te.quaternion),n=new E(0,-1,0).applyQuaternion(Te.quaternion),s=i.clone().add(e.multiplyScalar(.5)).add(t.multiplyScalar(.2)).add(n.multiplyScalar(.25));en.position.copy(s),en.lookAt(Te.position)}}function hb(){rn&&(J.remove(rn),rn.geometry.dispose(),rn.material.dispose(),rn.material.map.dispose(),bu(null));let i="";if(!dr&&!hr)i="Controllers Tracking Lost";else if(!dr)i="Left Controller Tracking Lost";else if(!hr)i="Right Controller Tracking Lost";else return;const e=document.createElement("canvas");e.width=1024,e.height=128;const t=e.getContext("2d");t.fillStyle="#ff0000",t.font="bold 60px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e.width/2,e.height/2);const n=new xn(e),s=new bt(.4,.05),r=new lt({map:n,transparent:!0,side:_t,depthWrite:!1}),o=new we(s,r);J.add(o),bu(o)}function fb(){rn&&(J.remove(rn),rn.geometry.dispose(),rn.material.dispose(),rn.material.map.dispose(),bu(null))}function pb(){if(rn){const i=new E;Te.getWorldPosition(i);const e=new E(0,0,-1).applyQuaternion(Te.quaternion),t=new E(0,-1,0).applyQuaternion(Te.quaternion),n=i.clone().add(e.multiplyScalar(.5)).add(t.multiplyScalar(.3));rn.position.copy(n),rn.lookAt(Te.position)}}function mf(i){on&&(J.remove(on),on.geometry.dispose(),on.material.dispose(),on.material.map.dispose(),Eu(null));const e=document.createElement("canvas"),t=e.getContext("2d");t.font="bold 60px Arial";const s=t.measureText(i).width,r=60,o=10;e.width=s+o*2,e.height=r+o*2,t.font="bold 60px Arial",t.fillStyle="#00ff00",t.textAlign="center",t.textBaseline="middle",t.fillText(i,e.width/2,e.height/2);const a=new xn(e),l=e.width/e.height,c=.05,u=c*l,d=new bt(u,c),h=new lt({map:a,transparent:!0,side:_t,depthWrite:!1}),p=new we(d,h);J.add(p),Eu(p)}function Iu(){on&&(J.remove(on),on.geometry.dispose(),on.material.dispose(),on.material.map.dispose(),Eu(null))}function mb(){if(on){const i=new E;Te.getWorldPosition(i);const e=new E(0,0,-1).applyQuaternion(Te.quaternion),t=new E(0,-1,0).applyQuaternion(Te.quaternion),n=i.clone().add(e.multiplyScalar(.5)).add(t.multiplyScalar(.2));on.position.copy(n),on.lookAt(Te.position)}}let Ts=null,_r=null,Uu=null;function gb(){if(kt)return;Ts=document.createElement("canvas"),Ts.width=800,Ts.height=920;const i=Ts,e=i.getContext("2d");e.clearRect(0,0,i.width,i.height),e.fillStyle="rgba(10, 10, 26, 0.7)",e.fillRect(0,0,i.width,i.height),e.strokeStyle="rgba(0, 200, 255, 0.5)",e.lineWidth=4,e.strokeRect(2,2,i.width-4,i.height-4);const t=e.createLinearGradient(0,0,i.width,i.height);t.addColorStop(0,"rgba(0, 200, 255, 0.1)"),t.addColorStop(.5,"rgba(255, 107, 107, 0.05)"),t.addColorStop(1,"rgba(0, 200, 255, 0.1)"),e.fillStyle=t,e.fillRect(4,4,i.width-8,i.height-8),e.font="bold 48px Arial",e.fillStyle="#00c8ff",e.textAlign="center",e.shadowColor="rgba(0, 200, 255, 0.8)",e.shadowBlur=20,e.fillText(k("guide","title"),i.width/2,60),e.shadowBlur=0,e.strokeStyle="rgba(0, 200, 255, 0.3)",e.lineWidth=2,e.beginPath(),e.moveTo(50,90),e.lineTo(i.width-50,90),e.stroke();const n=200;let s=140;const r=e.createLinearGradient(n-120,s,n+120,s+30);r.addColorStop(0,"#00c8ff"),r.addColorStop(1,"#ff6b6b"),e.fillStyle=r,e.beginPath(),e.roundRect(n-110,s-5,220,35,8),e.fill(),e.font="bold 20px Arial",e.fillStyle="#0a0a1a",e.textAlign="center",e.fillText(k("guide","leftController"),n,s+20),s+=55,[{button:k("guide","stickUpDown"),desc:k("guide","forwardBackward")},{button:k("guide","stickLeftRight"),desc:k("guide","turnLeftRight")},{button:k("guide","yButton"),desc:k("guide","startStop")},{button:k("guide","xButton"),desc:k("guide","settingsWindow")},{button:k("guide","stickPress"),desc:k("guide","collisionToggle")},{button:k("guide","trigger"),desc:k("guide","speedDown")},{button:k("guide","grip"),desc:k("guide","grabDrone")}].forEach(m=>{const f=e.createLinearGradient(n-105,s,n+25,s);f.addColorStop(0,"rgba(0, 200, 255, 0.2)"),f.addColorStop(1,"rgba(255, 107, 107, 0.2)"),e.fillStyle=f,e.beginPath(),e.roundRect(n-105,s-2,130,28,6),e.fill(),e.strokeStyle="rgba(0, 200, 255, 0.5)",e.lineWidth=1,e.stroke(),e.font="bold 15px Arial",e.fillStyle="#00c8ff",e.textAlign="center",e.fillText(m.button,n-40,s+18),e.font="15px Arial",e.fillStyle="rgba(255, 255, 255, 0.9)",e.textAlign="left",e.fillText(m.desc,n+35,s+18),s+=38});const a=600;s=140;const l=e.createLinearGradient(a-120,s,a+120,s+30);l.addColorStop(0,"#00c8ff"),l.addColorStop(1,"#ff6b6b"),e.fillStyle=l,e.beginPath(),e.roundRect(a-110,s-5,220,35,8),e.fill(),e.font="bold 20px Arial",e.fillStyle="#0a0a1a",e.textAlign="center",e.fillText(k("guide","rightController"),a,s+20),s+=55,[{button:k("guide","stickUpDown"),desc:k("guide","upDown")},{button:k("guide","stickLeftRight"),desc:k("guide","moveLeftRight")},{button:k("guide","aButton"),desc:k("guide","thisMenu")},{button:k("guide","stickPress"),desc:k("guide","volumeToggle")},{button:k("guide","bButton"),desc:k("guide","autoReturn")},{button:k("guide","trigger"),desc:k("guide","speedUp")},{button:k("guide","grip"),desc:k("guide","grabDrone")}].forEach(m=>{const f=e.createLinearGradient(a-105,s,a+25,s);f.addColorStop(0,"rgba(0, 200, 255, 0.2)"),f.addColorStop(1,"rgba(255, 107, 107, 0.2)"),e.fillStyle=f,e.beginPath(),e.roundRect(a-105,s-2,130,28,6),e.fill(),e.strokeStyle="rgba(0, 200, 255, 0.5)",e.lineWidth=1,e.stroke(),e.font="bold 15px Arial",e.fillStyle="#00c8ff",e.textAlign="center",e.fillText(m.button,a-40,s+18),e.font="15px Arial",e.fillStyle="rgba(255, 255, 255, 0.9)",e.textAlign="left",e.fillText(m.desc,a+35,s+18),s+=38}),e.fillStyle="rgba(0, 255, 150, 0.1)",e.strokeStyle="rgba(0, 255, 150, 0.3)",e.lineWidth=2,e.beginPath(),e.roundRect(50,520,i.width-100,80,12),e.fill(),e.stroke(),e.font="bold 22px Arial",e.fillStyle="#00ff96",e.textAlign="center",e.fillText(k("guide","handTracking"),i.width/2,555),e.font="18px Arial",e.fillStyle="rgba(255, 255, 255, 0.8)",e.fillText(k("guide","handTrackingDesc"),i.width/2,585),e.fillStyle="rgba(255, 200, 0, 0.1)",e.strokeStyle="rgba(255, 200, 0, 0.3)",e.beginPath(),e.roundRect(50,620,i.width-100,60,12),e.fill(),e.stroke(),e.font="bold 20px Arial",e.fillStyle="#ffc800",e.fillText(k("guide","bothGrips"),i.width/2,660),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.lineWidth=2,e.beginPath(),e.moveTo(50,710),e.lineTo(i.width-50,710),e.stroke(),e.font="bold 28px Arial",e.fillStyle="#ffff00",e.shadowColor="rgba(255, 255, 0, 0.5)",e.shadowBlur=10,e.fillText(k("guide","closeWithA"),i.width/2,760),e.shadowBlur=0,_r=new xn(i),_r.needsUpdate=!0;const u=i.width/i.height,d=.4,h=d*u,p=new bt(h,d),g=new lt({map:_r,transparent:!0,side:_t}),_=new we(p,g);_.scale.set(.01,.01,.01),_.material.opacity=0,J.add(_),sm(_),rm(!0),Wa(0),Xa(!0),cm(1)}function Nu(i){if(!Ts||!_r)return;const e=Ts,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.fillStyle="rgba(10, 10, 26, 0.7)",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(0, 200, 255, 0.5)",t.lineWidth=4,t.strokeRect(2,2,e.width-4,e.height-4);const n=t.createLinearGradient(0,0,e.width,e.height);n.addColorStop(0,"rgba(0, 200, 255, 0.1)"),n.addColorStop(.5,"rgba(255, 107, 107, 0.05)"),n.addColorStop(1,"rgba(0, 200, 255, 0.1)"),t.fillStyle=n,t.fillRect(4,4,e.width-8,e.height-8),t.font="bold 48px Arial",t.fillStyle="#00c8ff",t.textAlign="center",t.shadowColor="rgba(0, 200, 255, 0.8)",t.shadowBlur=20,t.fillText(k("guide","title"),e.width/2,60),t.shadowBlur=0,t.strokeStyle="rgba(0, 200, 255, 0.3)",t.lineWidth=2,t.beginPath(),t.moveTo(50,90),t.lineTo(e.width-50,90),t.stroke();const s=200;let r=140;const o=t.createLinearGradient(s-120,r,s+120,r+30);o.addColorStop(0,"#00c8ff"),o.addColorStop(1,"#ff6b6b"),t.fillStyle=o,t.beginPath(),t.roundRect(s-110,r-5,220,35,8),t.fill(),t.font="bold 20px Arial",t.fillStyle="#0a0a1a",t.textAlign="center",t.fillText(k("guide","leftController"),s,r+20),r+=55,(Ao===2?[{button:k("guide","stickUpDown"),desc:k("guide","upDown"),key:"leftStickY"},{button:k("guide","stickLeftRight"),desc:k("guide","turnLeftRight"),key:"leftStickX"},{button:k("guide","yButton"),desc:k("guide","startStop"),key:"leftX"},{button:k("guide","xButton"),desc:k("guide","settingsWindow"),key:"leftY"},{button:k("guide","stickPress"),desc:k("guide","collisionToggle"),key:"leftStickPress"},{button:k("guide","trigger"),desc:k("guide","speedDown"),key:"leftTrigger"},{button:k("guide","grip"),desc:k("guide","grabDrone"),key:"leftGrip"}]:[{button:k("guide","stickUpDown"),desc:k("guide","forwardBackward"),key:"leftStickY"},{button:k("guide","stickLeftRight"),desc:k("guide","turnLeftRight"),key:"leftStickX"},{button:k("guide","yButton"),desc:k("guide","startStop"),key:"leftX"},{button:k("guide","xButton"),desc:k("guide","settingsWindow"),key:"leftY"},{button:k("guide","stickPress"),desc:k("guide","collisionToggle"),key:"leftStickPress"},{button:k("guide","trigger"),desc:k("guide","speedDown"),key:"leftTrigger"},{button:k("guide","grip"),desc:k("guide","grabDrone"),key:"leftGrip"}]).forEach(m=>{const f=i[m.key];if(f)t.fillStyle="rgba(255, 255, 0, 0.6)";else{const T=t.createLinearGradient(s-105,r,s+25,r);T.addColorStop(0,"rgba(0, 200, 255, 0.2)"),T.addColorStop(1,"rgba(255, 107, 107, 0.2)"),t.fillStyle=T}t.beginPath(),t.roundRect(s-105,r-2,130,28,6),t.fill(),t.strokeStyle=f?"rgba(255, 255, 0, 0.9)":"rgba(0, 200, 255, 0.5)",t.lineWidth=f?2:1,t.stroke(),t.font="bold 15px Arial",t.fillStyle=f?"#000000":"#00c8ff",t.textAlign="center",t.fillText(m.button,s-40,r+18),t.font="15px Arial",t.fillStyle="rgba(255, 255, 255, 0.9)",t.textAlign="left",t.fillText(m.desc,s+35,r+18),r+=38});const l=600;r=140;const c=t.createLinearGradient(l-120,r,l+120,r+30);c.addColorStop(0,"#00c8ff"),c.addColorStop(1,"#ff6b6b"),t.fillStyle=c,t.beginPath(),t.roundRect(l-110,r-5,220,35,8),t.fill(),t.font="bold 20px Arial",t.fillStyle="#0a0a1a",t.textAlign="center",t.fillText(k("guide","rightController"),l,r+20),r+=55,(Ao===2?[{button:k("guide","stickUpDown"),desc:k("guide","forwardBackward"),key:"rightStickY"},{button:k("guide","stickLeftRight"),desc:k("guide","moveLeftRight"),key:"rightStickX"},{button:k("guide","aButton"),desc:k("guide","thisMenu"),key:"rightA"},{button:k("guide","stickPress"),desc:k("guide","volumeToggle"),key:"rightStickPress"},{button:k("guide","bButton"),desc:k("guide","autoReturn"),key:"rightB"},{button:k("guide","trigger"),desc:k("guide","speedUp"),key:"rightTrigger"},{button:k("guide","grip"),desc:k("guide","grabDrone"),key:"rightGrip"}]:[{button:k("guide","stickUpDown"),desc:k("guide","upDown"),key:"rightStickY"},{button:k("guide","stickLeftRight"),desc:k("guide","moveLeftRight"),key:"rightStickX"},{button:k("guide","aButton"),desc:k("guide","thisMenu"),key:"rightA"},{button:k("guide","stickPress"),desc:k("guide","volumeToggle"),key:"rightStickPress"},{button:k("guide","bButton"),desc:k("guide","autoReturn"),key:"rightB"},{button:k("guide","trigger"),desc:k("guide","speedUp"),key:"rightTrigger"},{button:k("guide","grip"),desc:k("guide","grabDrone"),key:"rightGrip"}]).forEach(m=>{const f=i[m.key];if(f)t.fillStyle="rgba(255, 255, 0, 0.6)";else{const T=t.createLinearGradient(l-105,r,l+25,r);T.addColorStop(0,"rgba(0, 200, 255, 0.2)"),T.addColorStop(1,"rgba(255, 107, 107, 0.2)"),t.fillStyle=T}t.beginPath(),t.roundRect(l-105,r-2,130,28,6),t.fill(),t.strokeStyle=f?"rgba(255, 255, 0, 0.9)":"rgba(0, 200, 255, 0.5)",t.lineWidth=f?2:1,t.stroke(),t.font="bold 15px Arial",t.fillStyle=f?"#000000":"#00c8ff",t.textAlign="center",t.fillText(m.button,l-40,r+18),t.font="15px Arial",t.fillStyle="rgba(255, 255, 255, 0.9)",t.textAlign="left",t.fillText(m.desc,l+35,r+18),r+=38});const d=i.leftGrip&&i.rightGrip;t.fillStyle=d?"rgba(255, 255, 0, 0.4)":"rgba(255, 200, 0, 0.1)",t.strokeStyle=d?"rgba(255, 255, 0, 0.9)":"rgba(255, 200, 0, 0.3)",t.lineWidth=d?3:2,t.beginPath(),t.roundRect(50,520,e.width-100,60,12),t.fill(),t.stroke(),t.font="bold 20px Arial",t.fillStyle=d?"#000000":"#ffc800",t.textAlign="center",t.fillText(k("guide","bothGrips"),e.width/2,558),t.fillStyle="rgba(0, 255, 150, 0.1)",t.strokeStyle="rgba(0, 255, 150, 0.3)",t.lineWidth=2,t.beginPath(),t.roundRect(50,600,e.width-100,80,12),t.fill(),t.stroke(),t.font="bold 22px Arial",t.fillStyle="#00ff96",t.textAlign="center",t.fillText(k("guide","handTracking"),e.width/2,635),t.font="18px Arial",t.fillStyle="rgba(255, 255, 255, 0.8)",t.fillText(k("guide","handTrackingDesc"),e.width/2,665),t.strokeStyle="rgba(0, 200, 255, 0.3)",t.lineWidth=2,t.beginPath(),t.moveTo(50,710),t.lineTo(e.width-50,710),t.stroke();let h=0;Nr&&(t.fillStyle="rgba(255, 150, 0, 0.15)",t.strokeStyle="rgba(255, 150, 0, 0.5)",t.lineWidth=2,t.beginPath(),t.roundRect(50,720,e.width-100,40,8),t.fill(),t.stroke(),t.font="bold 18px Arial",t.fillStyle="#ffa500",t.textAlign="center",t.fillText(k("guide","mrWarning"),e.width/2,747),h=50);const p=720+h;t.fillStyle="rgba(255, 100, 100, 0.15)",t.strokeStyle="rgba(255, 100, 100, 0.5)",t.lineWidth=2,t.beginPath(),t.roundRect(50,p,e.width-100,40,8),t.fill(),t.stroke(),t.font="bold 18px Arial",t.fillStyle="#ff6666",t.textAlign="center",t.fillText(k("guide","trackingWarning"),e.width/2,p+27);const g=p+50;t.fillStyle="rgba(100, 200, 255, 0.15)",t.strokeStyle="rgba(100, 200, 255, 0.5)",t.lineWidth=2,t.beginPath(),t.roundRect(50,g,e.width-100,55,8),t.fill(),t.stroke(),t.font="bold 16px Arial",t.fillStyle="#66ccff",t.textAlign="center",t.fillText(k("guide","occlusionWarning1"),e.width/2,g+22),t.fillText(k("guide","occlusionWarning2"),e.width/2,g+44);const _=g+85;t.font="bold 28px Arial",t.fillStyle="#ffff00",t.shadowColor="rgba(255, 255, 0, 0.5)",t.shadowBlur=10,t.fillText(k("guide","closeWithA"),e.width/2,_),t.shadowBlur=0,_r.needsUpdate=!0}function _b(){kt&&!xl&&(Wa(1),Xa(!0),cm(-1),rm(!1))}function xb(){kt&&(J.remove(kt),kt.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(i.material.map&&i.material.map.dispose(),i.material.dispose())}),sm(null),Ts=null,_r=null,Uu=null)}function mc(){xl||(Ba||kt?(_b(),qr()):(gb(),Xr()))}let On=null,xr=null,Mn=[],ds=null;function ls(i,e){const t=JSON.parse(localStorage.getItem("droneSettings")||"{}");t[i]=e,localStorage.setItem("droneSettings",JSON.stringify(t))}function yb(){const i=JSON.parse(localStorage.getItem("droneSettings")||"{}");console.log("読み込んだ設定:",i),bl.forEach(e=>{i[e.key]!==void 0&&(e.setValue(i[e.key]),console.log(`設定適用: ${e.key} = ${i[e.key]}`))})}const bl=[{nameKey:"language",descKey:"languageDesc",key:"language",type:"language",getValue:()=>dd,setValue:i=>YT(i),defaultValue:"ja"},{nameKey:"controllerMode",descKey:"controllerModeDesc",key:"controllerMode",type:"select",options:[{value:1,labelKey:"mode1"},{value:2,labelKey:"mode2"}],getValue:()=>Ao,setValue:i=>uT(i),defaultValue:2},{nameKey:"deadzone",descKey:"deadzoneDesc",key:"deadzone",type:"value",getValue:()=>Tl,setValue:i=>qT(i),defaultValue:.15,min:.01,max:.35,step:.01,format:i=>(i*100).toFixed(0)+"%"},{nameKey:"acceleration",descKey:"accelerationDesc",key:"acceleration",type:"value",getValue:()=>go,setValue:i=>Gm(i),getDefaultValue:()=>{const i=.05+(sn-1)*3.95/29,e=Math.pow(Wn/.3,.5),t=Math.max(.5,Math.min(2,e));return Kp*i*t},min:1e-4,max:.005,step:1e-4,format:i=>(i*1e3).toFixed(1)},{nameKey:"friction",descKey:"frictionDesc",key:"friction",type:"value",getValue:()=>ud,setValue:i=>{Wm(i),Xm(i)},defaultValue:.965,min:.9,max:.99,step:.01,format:i=>i.toFixed(2)},{nameKey:"tilt",descKey:"tiltDesc",key:"tilt",type:"value",getValue:()=>Ha,setValue:i=>XT(i),defaultValue:.6,min:0,max:1,step:.1,format:i=>i.toFixed(1)},{nameKey:"angularSpeed",descKey:"angularSpeedDesc",key:"angularSpeed",type:"value",getValue:()=>Va,setValue:i=>{WT(i),GT(i*.025)},defaultValue:.06,min:.02,max:.12,step:.01,format:i=>(i*100).toFixed(0)+"%"},{nameKey:"propellerSpeed",descKey:"propellerSpeedDesc",key:"propellerSpeed",type:"value",getValue:()=>ka,setValue:i=>IT(i),defaultValue:1,min:.1,max:2,step:.1,format:i=>(i*100).toFixed(0)+"%"},{nameKey:"shadow",descKey:"shadowDesc",key:"shadow",type:"toggle",getValue:()=>vl,setValue:i=>{cT(i),L&&L.traverse(e=>{e.isMesh&&(e.castShadow=i)})},defaultValue:!0},{nameKey:"occlusion",descKey:"occlusionDesc",key:"occlusion",type:"toggle",getValue:()=>ws,setValue:i=>{NT(i)},defaultValue:!0,isHidden:()=>!Nr},{nameKey:"fpvMode",descKey:"fpvModeDesc",key:"fpvMode",type:"toggle",getValue:()=>mr,setValue:i=>pd(i),defaultValue:!1,isHidden:()=>Nr}];function vb(){if(zt)return;const t=90+bl.filter(c=>!c.isHidden||!c.isHidden()).length*80+160+80+60+60+30;On=document.createElement("canvas"),On.width=700,On.height=t,eg(null),xr=new xn(On),xr.needsUpdate=!0;const n=On.width/On.height,s=.45,r=s*n,o=new bt(r,s),a=new lt({map:xr,transparent:!0,side:_t}),l=new we(o,a);l.scale.set(.01,.01,.01),l.material.opacity=0,J.add(l),om(l),am(!0),qa(0),Ya(!0),um(1),(an===0||an>4)&&Mb()}function eg(i){if(!On)return;const e=On,t=e.getContext("2d");Mn=[],t.clearRect(0,0,e.width,e.height),t.fillStyle="rgba(10, 10, 26, 0.7)",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(0, 200, 255, 0.5)",t.lineWidth=4,t.strokeRect(2,2,e.width-4,e.height-4);const n=t.createLinearGradient(0,0,e.width,e.height);n.addColorStop(0,"rgba(0, 200, 255, 0.1)"),n.addColorStop(.5,"rgba(255, 107, 107, 0.05)"),n.addColorStop(1,"rgba(0, 200, 255, 0.1)"),t.fillStyle=n,t.fillRect(4,4,e.width-8,e.height-8),t.font="bold 48px Arial",t.fillStyle="#00c8ff",t.textAlign="center",t.shadowColor="rgba(0, 200, 255, 0.8)",t.shadowBlur=20,t.fillText(k("settings","title"),e.width/2,60),t.shadowBlur=0,t.strokeStyle="rgba(0, 200, 255, 0.3)",t.lineWidth=2,t.beginPath(),t.moveTo(50,90),t.lineTo(e.width-50,90),t.stroke();const s=bl.filter(b=>!b.isHidden||!b.isHidden());let r=120;const o=80;s.forEach((b,x)=>{const P=b.getValue(),R=b.nameKey?k("settings",b.nameKey):b.name,A=b.descKey?k("settings",b.descKey):b.description;if(t.fillStyle="rgba(30, 30, 50, 0.5)",t.beginPath(),t.roundRect(25,r-5,e.width-50,o-10,8),t.fill(),t.font="bold 20px Arial",t.fillStyle="#ffffff",t.textAlign="left",t.fillText(R,40,r+22),t.font="14px Arial",t.fillStyle="rgba(255, 255, 255, 0.5)",t.fillText(A,40,r+44),b.type==="language"){const D=P==="ja",v=100,y=45,C=10,U=380,I=U,F=r+5,Y=i&&i.index===x&&i.type==="langJa";Y?t.fillStyle="rgba(255, 255, 0, 0.8)":D?t.fillStyle="rgba(0, 255, 150, 0.5)":t.fillStyle="rgba(100, 100, 100, 0.5)",t.beginPath(),t.roundRect(I,F,v,y,6),t.fill(),Y?t.strokeStyle="#ffff00":D?t.strokeStyle="rgba(0, 255, 150, 0.8)":t.strokeStyle="rgba(100, 100, 100, 0.8)",t.lineWidth=2,t.stroke(),t.font="bold 18px Arial",t.fillStyle=Y?"#000000":D?"#00ff96":"rgba(255, 255, 255, 0.6)",t.textAlign="center",t.fillText(k("settings","japanese"),I+v/2,F+y/2+6),Mn.push({x:I,y:F,w:v,h:y,index:x,type:"langJa"});const H=U+v+C,W=r+5,V=i&&i.index===x&&i.type==="langEn";V?t.fillStyle="rgba(255, 255, 0, 0.8)":D?t.fillStyle="rgba(100, 100, 100, 0.5)":t.fillStyle="rgba(0, 255, 150, 0.5)",t.beginPath(),t.roundRect(H,W,v,y,6),t.fill(),V?t.strokeStyle="#ffff00":D?t.strokeStyle="rgba(100, 100, 100, 0.8)":t.strokeStyle="rgba(0, 255, 150, 0.8)",t.lineWidth=2,t.stroke(),t.font="bold 18px Arial",t.fillStyle=V?"#000000":D?"rgba(255, 255, 255, 0.6)":"#00ff96",t.textAlign="center",t.fillText(k("settings","english"),H+v/2,W+y/2+6),Mn.push({x:H,y:W,w:v,h:y,index:x,type:"langEn"})}else if(b.type==="toggle"){const v=r+5,y=110,C=45,U=i&&i.index===x&&i.type==="toggle",I=P===!0;U?t.fillStyle="rgba(255, 255, 0, 0.8)":I?t.fillStyle="rgba(0, 255, 150, 0.5)":t.fillStyle="rgba(100, 100, 100, 0.5)",t.beginPath(),t.roundRect(480,v,y,C,6),t.fill(),U?t.strokeStyle="#ffff00":I?t.strokeStyle="rgba(0, 255, 150, 0.8)":t.strokeStyle="rgba(100, 100, 100, 0.8)",t.lineWidth=2,t.stroke(),t.font="bold 20px Arial",t.fillStyle=U?"#000000":I?"#00ff96":"rgba(255, 255, 255, 0.6)",t.textAlign="center",t.fillText(I?k("settings","on"):k("settings","off"),480+y/2,v+C/2+7),Mn.push({x:480,y:v,w:y,h:C,index:x,type:"toggle"})}else if(b.type==="select"){const D=b.options,v=100,y=45,C=320,U=r+5,I=10;if(D.forEach((F,Y)=>{const H=C+Y*(v+I),W=P===F.value,V=i&&i.index===x&&i.type==="select"&&i.optionIndex===Y;V?t.fillStyle="rgba(255, 255, 0, 0.8)":W?t.fillStyle="rgba(0, 200, 255, 0.5)":t.fillStyle="rgba(100, 100, 100, 0.3)",t.beginPath(),t.roundRect(H,U,v,y,6),t.fill(),V?t.strokeStyle="#ffff00":W?t.strokeStyle="rgba(0, 200, 255, 0.8)":t.strokeStyle="rgba(100, 100, 100, 0.6)",t.lineWidth=2,t.stroke(),t.font="bold 18px Arial",t.fillStyle=V?"#000000":W?"#00c8ff":"rgba(255, 255, 255, 0.6)",t.textAlign="center",t.fillText(k("settings",F.labelKey),H+v/2,U+y/2+6),Mn.push({x:H,y:U,w:v,h:y,index:x,type:"select",optionIndex:Y,optionValue:F.value})}),b.key==="controllerMode"){const F=r+55,Y=150;t.fillStyle="rgba(20, 20, 40, 0.6)",t.beginPath(),t.roundRect(25,F,e.width-50,Y,8),t.fill(),t.strokeStyle="rgba(0, 200, 255, 0.3)",t.lineWidth=1,t.stroke();const H=175;let W=F+15;const V=t.createLinearGradient(H-90,W,H+90,W+30);V.addColorStop(0,"#00c8ff"),V.addColorStop(1,"#ff6b6b"),t.fillStyle=V,t.beginPath(),t.roundRect(H-90,W-5,180,35,8),t.fill(),t.font="bold 16px Arial",t.fillStyle="#0a0a1a",t.textAlign="center",t.fillText(k("guide","leftController"),H,W+20),W+=45,(P===2?[{button:k("guide","stickUpDown"),desc:k("guide","upDown")},{button:k("guide","stickLeftRight"),desc:k("guide","turnLeftRight")}]:[{button:k("guide","stickUpDown"),desc:k("guide","forwardBackward")},{button:k("guide","stickLeftRight"),desc:k("guide","turnLeftRight")}]).forEach(Qe=>{const K=t.createLinearGradient(H-85,W,H+15,W);K.addColorStop(0,"rgba(0, 200, 255, 0.2)"),K.addColorStop(1,"rgba(255, 107, 107, 0.2)"),t.fillStyle=K,t.beginPath(),t.roundRect(H-85,W-2,100,28,6),t.fill(),t.strokeStyle="rgba(0, 200, 255, 0.5)",t.lineWidth=1,t.stroke(),t.font="bold 12px Arial",t.fillStyle="#00c8ff",t.textAlign="center",t.fillText(Qe.button,H-35,W+18),t.font="12px Arial",t.fillStyle="rgba(255, 255, 255, 0.9)",t.textAlign="left",t.fillText(Qe.desc,H+25,W+18),W+=38});const re=525;W=F+15;const _e=t.createLinearGradient(re-90,W,re+90,W+30);_e.addColorStop(0,"#00c8ff"),_e.addColorStop(1,"#ff6b6b"),t.fillStyle=_e,t.beginPath(),t.roundRect(re-90,W-5,180,35,8),t.fill(),t.font="bold 16px Arial",t.fillStyle="#0a0a1a",t.textAlign="center",t.fillText(k("guide","rightController"),re,W+20),W+=45,(P===2?[{button:k("guide","stickUpDown"),desc:k("guide","forwardBackward")},{button:k("guide","stickLeftRight"),desc:k("guide","moveLeftRight")}]:[{button:k("guide","stickUpDown"),desc:k("guide","upDown")},{button:k("guide","stickLeftRight"),desc:k("guide","moveLeftRight")}]).forEach(Qe=>{const K=t.createLinearGradient(re-85,W,re+15,W);K.addColorStop(0,"rgba(0, 200, 255, 0.2)"),K.addColorStop(1,"rgba(255, 107, 107, 0.2)"),t.fillStyle=K,t.beginPath(),t.roundRect(re-85,W-2,100,28,6),t.fill(),t.strokeStyle="rgba(0, 200, 255, 0.5)",t.lineWidth=1,t.stroke(),t.font="bold 12px Arial",t.fillStyle="#00c8ff",t.textAlign="center",t.fillText(Qe.button,re-35,W+18),t.font="12px Arial",t.fillStyle="rgba(255, 255, 255, 0.9)",t.textAlign="left",t.fillText(Qe.desc,re+25,W+18),W+=38}),r+=Y}}else{const D=b.format?b.format(P):P.toString(),v=320,y=r+5,C=45,U=i&&i.index===x&&i.type==="left";t.fillStyle=U?"rgba(255, 255, 0, 0.8)":"rgba(0, 200, 255, 0.3)",t.beginPath(),t.roundRect(v,y,C,C,6),t.fill(),t.strokeStyle=U?"#ffff00":"rgba(0, 200, 255, 0.6)",t.lineWidth=2,t.stroke(),t.font="bold 26px Arial",t.fillStyle=U?"#000000":"#00c8ff",t.textAlign="center",t.fillText("◀",v+C/2,y+C/2+8),Mn.push({x:v,y,w:C,h:C,index:x,type:"left"}),t.font="bold 20px Arial",t.fillStyle="#00c8ff",t.textAlign="center",t.fillText(D,440,r+35);const I=510,F=r+5,Y=i&&i.index===x&&i.type==="right";t.fillStyle=Y?"rgba(255, 255, 0, 0.8)":"rgba(0, 200, 255, 0.3)",t.beginPath(),t.roundRect(I,F,C,C,6),t.fill(),t.strokeStyle=Y?"#ffff00":"rgba(0, 200, 255, 0.6)",t.lineWidth=2,t.stroke(),t.font="bold 26px Arial",t.fillStyle=Y?"#000000":"#00c8ff",t.textAlign="center",t.fillText("▶",I+C/2,F+C/2+8),Mn.push({x:I,y:F,w:C,h:C,index:x,type:"right"});const H=580,W=r+5,V=75,se=i&&i.index===x&&i.type==="default",re=b.getDefaultValue?b.getDefaultValue():b.defaultValue,_e=Math.abs(P-re)<1e-4;t.fillStyle=se?"rgba(255, 107, 107, 0.8)":_e?"rgba(100, 100, 100, 0.3)":"rgba(255, 107, 107, 0.3)",t.beginPath(),t.roundRect(H,W,V,C,6),t.fill(),t.strokeStyle=se?"#ff6b6b":_e?"rgba(100, 100, 100, 0.5)":"rgba(255, 107, 107, 0.6)",t.lineWidth=2,t.stroke(),t.font="bold 14px Arial",t.fillStyle=se?"#000000":_e?"rgba(255, 255, 255, 0.3)":"#ff6b6b",t.textAlign="center",t.fillText(k("settings","default"),H+V/2,W+C/2+5),Mn.push({x:H,y:W,w:V,h:C,index:x,type:"default"})}r+=o});const a=r+10;t.strokeStyle="rgba(0, 200, 255, 0.3)",t.lineWidth=2,t.beginPath(),t.moveTo(50,a),t.lineTo(e.width-50,a),t.stroke();const l=25,c=a+15,u=e.width-50,d=50,h=i&&i.type==="tutorial";t.fillStyle=h?"rgba(100, 200, 255, 0.9)":"rgba(100, 200, 255, 0.4)",t.beginPath(),t.roundRect(l,c,u,d,8),t.fill(),t.strokeStyle=h?"#64c8ff":"rgba(100, 200, 255, 0.8)",t.lineWidth=2,t.stroke(),t.font="bold 22px Arial",t.fillStyle=h?"#000000":"#ffffff",t.textAlign="center",t.fillText(k("settings","tutorial"),e.width/2,c+d/2+8),Mn.push({x:l,y:c,w:u,h:d,type:"tutorial"});const p=25,g=c+d+10,_=e.width-50,m=50,f=i&&i.type==="returnToTitle";t.fillStyle=f?"rgba(255, 100, 100, 0.9)":"rgba(255, 100, 100, 0.4)",t.beginPath(),t.roundRect(p,g,_,m,8),t.fill(),t.strokeStyle=f?"#ff6666":"rgba(255, 100, 100, 0.8)",t.lineWidth=2,t.stroke(),t.font="bold 22px Arial",t.fillStyle=f?"#000000":"#ffffff",t.textAlign="center",t.fillText(k("settings","returnToTitle"),e.width/2,g+m/2+8);const T=g+m+20;t.font="16px Arial",t.fillStyle="rgba(255, 255, 255, 0.6)",t.textAlign="center",t.fillText(k("settings","laserInstruction"),e.width/2,T),t.font="bold 28px Arial",t.fillStyle="#ffff00",t.shadowColor="rgba(255, 255, 0, 0.5)",t.shadowBlur=10,t.fillText(k("settings","closeInstruction"),e.width/2,T+35),t.shadowBlur=0,Mn.push({x:p,y:g,w:_,h:m,type:"returnToTitle"}),xr&&(xr.needsUpdate=!0)}function Fu(){zt&&!yl&&(qa(1),Ya(!0),um(-1),am(!1))}function Sb(){zt&&(J.remove(zt),zt.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(i.material.map&&i.material.map.dispose(),i.material.dispose())}),om(null),On=null,xr=null,Mn=[],ds=null),Tb(),Du(!0),Lu(!0),an===4&&(setTimeout(()=>{Xb()},300),console.log("設定ウィンドウを閉じ、チュートリアル4を表示"))}function gc(){yl||(Ir||zt?(Fu(),qr()):(vb(),Xr()))}function Mb(){const i=new ji(.005,8,8),e=new lt({color:16776960,transparent:!0,opacity:.9}),t=new we(i,e);t.visible=!1,J.add(t),lm(t)}function Tb(){Qn&&(J.remove(Qn),Qn.geometry.dispose(),Qn.material.dispose(),lm(null))}let gf=0;function bb(){if(!yl)return;const i=.08;if(Ep===1){let e=uu+i;if(e>=1&&(e=1,Ya(!1)),qa(e),zt){const n=Yr(e);zt.scale.set(n,n,n),zt.material.opacity=Math.min(1,e*1.5)}}else{let e=uu-i;if(e<=0&&(e=0,Ya(!1),Sb()),qa(e),zt){const t=tg(e),n=Math.max(.01,t);zt.scale.set(n,n,n),zt.material.opacity=e}}}function Eb(){if(bb(),!zt||!Ue)return;const i=Ue.inputSources,e=Ae.xr.getFrame(),t=Ae.xr.getReferenceSpace();if(!e||!t)return;let n=null,s=null,r=!1;for(const c of i){if(c.handedness==="left"&&c.gripSpace){const u=e.getPose(c.gripSpace,t);if(u){const d=new xe().fromArray(u.transform.matrix),p=new E().setFromMatrixPosition(d).clone();if(p.y+=.28,zt.position.copy(p),Te){const g=new E;Te.getWorldPosition(g);const _=new E;_.subVectors(g,p),_.y=0,_.normalize();const m=Math.atan2(_.x,_.z);zt.rotation.set(0,m,0)}}}if(c.handedness==="right"&&c.targetRaySpace){const u=e.getPose(c.targetRaySpace,t);if(u){const d=new xe().fromArray(u.transform.matrix);n=new E().setFromMatrixPosition(d),s=new E(0,0,-1);const h=new Ye().setFromRotationMatrix(d);s.applyQuaternion(h)}c.gamepad&&c.gamepad.buttons[0]&&(r=c.gamepad.buttons[0].pressed)}}let o=null;if(n&&s&&zt){const u=new cM(n,s).intersectObject(zt);if(u.length>0){const d=u[0];if(Qn&&(Qn.visible=!0,Qn.position.copy(d.point)),d.uv){const h=d.uv.x*On.width,p=(1-d.uv.y)*On.height;for(const _ of Mn)if(h>=_.x&&h<=_.x+_.w&&p>=_.y&&p<=_.y+_.h){o=_;break}const g=Date.now();r&&o&&gf<g&&(wb(o),gf=g+200,ds=null)}}else Qn&&(Qn.visible=!1)}const a=o?`${o.index}-${o.type}-${o.optionIndex??""}`:null,l=ds?`${ds.index}-${ds.type}-${ds.optionIndex??""}`:null;a!==l&&(eg(o),ds=o)}function wb(i){if(!zp&&i.type!=="returnToTitle"&&i.type!=="tutorial")return;if(i.type==="tutorial"){Bt(),localStorage.setItem("restartTutorial","true"),Fu(),Ue?Ue.end().then(()=>{window.location.reload()}):window.location.reload();return}if(i.type==="returnToTitle"){Bt(),Fu(),Ue?Ue.end().then(()=>{window.location.reload()}):window.location.reload();return}const t=bl.filter(n=>!n.isHidden||!n.isHidden())[i.index];if(i.type==="langJa")t.setValue("ja"),ls(t.key,"ja"),Bt(),kt&&Nu({});else if(i.type==="langEn")t.setValue("en"),ls(t.key,"en"),Bt(),kt&&Nu({});else if(i.type==="toggle"){const s=!t.getValue();t.setValue(s),ls(t.key,s),Bt()}else if(i.type==="select"){const n=i.optionValue;t.setValue(n),ls(t.key,n),Bt()}else if(i.type==="left"){const n=t.getValue(),s=Math.max(t.min,n-t.step);t.setValue(s),ls(t.key,s),hf()}else if(i.type==="right"){const n=t.getValue(),s=Math.min(t.max,n+t.step);t.setValue(s),ls(t.key,s),hf()}else if(i.type==="default"){const n=t.getDefaultValue?t.getDefaultValue():t.defaultValue;t.setValue(n),ls(t.key,n),Bt()}}function Yr(i){return 1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)}function tg(i){return 2.70158*i*i*i-1.70158*i*i}function Ab(){if(!xl)return;const i=.08;if(bp===1){let e=cu+i;if(e>=1&&(e=1,Xa(!1)),Wa(e),kt){const n=Yr(e);kt.scale.set(n,n,n),kt.material.opacity=Math.min(1,e*1.5)}}else{let e=cu-i;if(e<=0&&(e=0,Xa(!1),xb()),Wa(e),kt){const t=tg(e),n=Math.max(.01,t);kt.scale.set(n,n,n),kt.material.opacity=e}}}function Rb(){if(Ab(),!kt||!Ue)return;const i=Ue.inputSources,e=Ae.xr.getFrame(),t=Ae.xr.getReferenceSpace();if(!e||!t)return;const n={leftStickX:!1,leftStickY:!1,leftY:!1,leftX:!1,leftStickPress:!1,leftTrigger:!1,leftGrip:!1,rightStickX:!1,rightStickY:!1,rightA:!1,rightStickPress:!1,rightB:!1,rightTrigger:!1,rightGrip:!1};for(const r of i){if(r.gamepad){const o=r.gamepad,a=o.buttons,l=o.axes,c=Tl;r.handedness==="left"?(l.length>=4&&(n.leftStickX=Math.abs(l[2])>c,n.leftStickY=Math.abs(l[3])>c),a[5]&&(n.leftX=a[5].pressed),a[4]&&(n.leftY=a[4].pressed),a[3]&&(n.leftStickPress=a[3].pressed),a[0]&&(n.leftTrigger=a[0].pressed||a[0].value>.5),a[1]&&(n.leftGrip=a[1].pressed||a[1].value>.5)):r.handedness==="right"&&(l.length>=4&&(n.rightStickX=Math.abs(l[2])>c,n.rightStickY=Math.abs(l[3])>c),a[4]&&(n.rightA=a[4].pressed),a[3]&&(n.rightStickPress=a[3].pressed),a[5]&&(n.rightB=a[5].pressed),a[0]&&(n.rightTrigger=a[0].pressed||a[0].value>.5),a[1]&&(n.rightGrip=a[1].pressed||a[1].value>.5))}if(r.handedness==="right"&&r.gripSpace){const o=e.getPose(r.gripSpace,t);if(o){const a=new xe().fromArray(o.transform.matrix),c=new E().setFromMatrixPosition(a).clone();if(c.y+=.25,kt.position.copy(c),Te){const u=new E;Te.getWorldPosition(u);const d=new E;d.subVectors(u,c),d.y=0,d.normalize();const h=Math.atan2(d.x,d.z);kt.rotation.set(0,h,0)}}}}const s=Object.values(n).map(r=>r?"1":"0").join("");s!==Uu&&(Nu(n),Uu=s)}function Cb(){Kt&&(J.remove(Kt),Kt.geometry&&Kt.geometry.dispose(),Kt.material&&Kt.material.dispose(),of(null));const i=new Ju(.02,.06,8),e=new lt({color:16776960,transparent:!0,opacity:.9}),t=new we(i,e);J.add(t),of(t)}function Pb(){if(!L||!Te)return;const i=new E;Te.getWorldPosition(i);const e=L.position.clone(),n=e.clone().sub(i).clone().applyQuaternion(Te.quaternion.clone().invert()),s=Te.fov*Math.PI/180,r=Te.aspect||window.innerWidth/window.innerHeight,o=s/2*.7,a=Math.atan(Math.tan(o)*r),l=Math.atan2(n.y,-n.z),c=Math.atan2(n.x,-n.z);if(Math.abs(l)<o&&Math.abs(c)<a&&n.z<0)Kt&&(Kt.visible=!1);else{Kt||Cb(),Kt.visible=!0;const d=new E(0,0,-1).applyQuaternion(Te.quaternion),h=new E(1,0,0).applyQuaternion(Te.quaternion),p=new E(0,1,0).applyQuaternion(Te.quaternion),g=.35;let _=i.clone().add(d.clone().multiplyScalar(g));const m=Math.atan2(l,c),T=l<0?.95:.55,x=Math.cos(m)*a*.55,P=Math.sin(m)*o*T;_.add(h.clone().multiplyScalar(Math.tan(x)*g)),_.add(p.clone().multiplyScalar(Math.tan(P)*g)),Kt.position.copy(_),Kt.lookAt(e),Kt.rotateX(Math.PI/2),Kt.rotateY(Date.now()*.002)}}let sl=null,rl=null;function ol(){if(Ut)return;Xr(),JT();const i=document.createElement("canvas");i.width=600,i.height=400,sl=i;const e=new xn(i);e.minFilter=Tt,e.magFilter=Tt,rl=e,Db();const t=new bt(.6,.4),n=new lt({map:e,transparent:!0,side:_t,depthWrite:!1}),s=new we(t,n);J.add(s),dm(s),hm(!0),fm(0),ja(!0),pm(1)}function Db(){if(!sl)return;const i=sl,e=i.getContext("2d");e.clearRect(0,0,i.width,i.height),e.fillStyle="rgba(10, 10, 26, 0.85)",e.fillRect(0,0,i.width,i.height),e.strokeStyle="rgba(0, 200, 255, 0.5)",e.lineWidth=4,e.strokeRect(2,2,i.width-4,i.height-4);const t=e.createLinearGradient(0,0,i.width,i.height);t.addColorStop(0,"rgba(0, 200, 255, 0.1)"),t.addColorStop(.5,"rgba(255, 107, 107, 0.05)"),t.addColorStop(1,"rgba(0, 200, 255, 0.1)"),e.fillStyle=t,e.fillRect(4,4,i.width-8,i.height-8),e.font="bold 20px Arial",e.fillStyle="#ffcc00",e.textAlign="center",e.fillText(k("welcome","step"),i.width/2,35),e.font="bold 36px Arial",e.fillStyle="#00c8ff",e.shadowColor="rgba(0, 200, 255, 0.8)",e.shadowBlur=15,e.fillText(k("welcome","title"),i.width/2,75),e.shadowBlur=0,e.font="18px Arial",e.fillStyle="rgba(0, 200, 255, 0.7)",e.fillText(k("welcome","titleEn"),i.width/2,100),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.lineWidth=2,e.beginPath(),e.moveTo(40,120),e.lineTo(i.width-40,120),e.stroke(),e.font="22px Arial",e.fillStyle="rgba(255, 255, 255, 0.9)",e.fillText(k("welcome","instruction1"),i.width/2,165),e.font="18px Arial",e.fillStyle="rgba(255, 255, 255, 0.6)",e.fillText(k("welcome","instruction1En"),i.width/2,195),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.beginPath(),e.moveTo(40,260),e.lineTo(i.width-40,260),e.stroke(),e.font="bold 28px Arial",e.fillStyle="#ffff00",e.shadowColor="rgba(255, 255, 0, 0.5)",e.shadowBlur=10,e.textAlign="right",e.fillText(k("welcome","nextWithA"),i.width-40,310),e.shadowBlur=0,e.font="18px Arial",e.fillStyle="rgba(255, 255, 0, 0.7)",e.fillText(k("welcome","nextWithAEn"),i.width-40,340),e.textAlign="center",rl&&(rl.needsUpdate=!0)}function Lb(){!Ut||!bo||(qr(),pm(-1),ja(!0))}function Ib(){if(!Ap)return;const i=.08;let e=wp;if(Rp===1?(e+=i,e>=1&&(e=1,ja(!1))):(e-=i,e<=0&&(e=0,ja(!1),Ut&&(J.remove(Ut),Ut.geometry&&Ut.geometry.dispose(),Ut.material&&(Ut.material.map&&Ut.material.map.dispose(),Ut.material.dispose()),dm(null),hm(!1),sl=null,rl=null),Yn&&(J.remove(Yn),Yn.geometry&&Yn.geometry.dispose(),Yn.material&&Yn.material.dispose(),mm(null)),In&&(J.remove(In),In.geometry&&In.geometry.dispose(),In.material&&In.material.dispose(),gm(null)))),fm(e),Ut){const t=Yr(e);Ut.scale.set(t,t,1),Ut.material&&(Ut.material.opacity=e)}}function Ub(){if(Ib(),!Ut||!Ue)return;const i=new E,e=new Ye;Te.getWorldPosition(i),Te.getWorldQuaternion(e);const t=new E(0,0,-1);t.applyQuaternion(e);const n=i.clone().add(t.clone().multiplyScalar(1));n.y-=.15,Ut.position.copy(n);const s=new E;s.subVectors(i,n),s.y=0,s.normalize();const r=Math.atan2(s.x,s.z);if(Ut.rotation.set(0,r,0),L&&Et){const o=new E;L.getWorldPosition(o);const a=new E(0,-.15,0);a.applyAxisAngle(new E(0,1,0),r);const l=n.clone().add(a),c=o.clone();if(!Yn){const p=new Rt,g=new Cs({color:16776960,transparent:!0,opacity:.8}),_=new Ps(p,g);J.add(_),mm(_)}const u=new Float32Array([l.x,l.y,l.z,c.x,c.y,c.z]);if(Yn.geometry.setAttribute("position",new Ct(u,3)),Yn.geometry.attributes.position.needsUpdate=!0,!In){const p=new ji(.02,16,16),g=new lt({color:16776960,transparent:!0}),_=new we(p,g);J.add(_),gm(_)}In.position.copy(o);const h=(Math.sin(Date.now()*.001*3)+1)/2;In.material.opacity=.3+h*.7,In.scale.setScalar(.8+h*.4)}}let al=null,ll=null;function Nb(){if(Nt)return;Xr();const i=document.createElement("canvas");i.width=600,i.height=400,al=i;const e=new xn(i);e.minFilter=Tt,e.magFilter=Tt,ll=e,Fb();const t=new bt(.6,.4),n=new lt({map:e,transparent:!0,side:_t,depthWrite:!1}),s=new we(t,n);J.add(s),_m(s),xm(!0),ym(0),Ka(!0),vm(1)}function Fb(){if(!al)return;const i=al,e=i.getContext("2d");e.clearRect(0,0,i.width,i.height),e.fillStyle="rgba(10, 10, 26, 0.85)",e.fillRect(0,0,i.width,i.height),e.strokeStyle="rgba(0, 200, 255, 0.5)",e.lineWidth=4,e.strokeRect(2,2,i.width-4,i.height-4);const t=e.createLinearGradient(0,0,i.width,i.height);t.addColorStop(0,"rgba(0, 200, 255, 0.1)"),t.addColorStop(.5,"rgba(255, 107, 107, 0.05)"),t.addColorStop(1,"rgba(0, 200, 255, 0.1)"),e.fillStyle=t,e.fillRect(4,4,i.width-8,i.height-8),e.font="bold 20px Arial",e.fillStyle="#ffcc00",e.textAlign="center",e.fillText(k("tutorial2","step"),i.width/2,35),e.font="bold 36px Arial",e.fillStyle="#00c8ff",e.shadowColor="rgba(0, 200, 255, 0.8)",e.shadowBlur=15,e.fillText(k("tutorial2","title"),i.width/2,75),e.shadowBlur=0,e.font="18px Arial",e.fillStyle="rgba(0, 200, 255, 0.7)",e.fillText(k("tutorial2","titleEn"),i.width/2,100),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.lineWidth=2,e.beginPath(),e.moveTo(40,120),e.lineTo(i.width-40,120),e.stroke(),e.font="22px Arial",e.fillStyle="rgba(255, 255, 255, 0.9)",e.fillText(k("tutorial2","instruction1"),i.width/2,155),e.fillText(k("tutorial2","instruction2"),i.width/2,185),e.font="18px Arial",e.fillStyle="rgba(255, 255, 255, 0.6)",e.fillText(k("tutorial2","instruction1En"),i.width/2,215),e.fillText(k("tutorial2","instruction2En"),i.width/2,240),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.beginPath(),e.moveTo(40,260),e.lineTo(i.width-40,260),e.stroke(),e.font="bold 28px Arial",e.fillStyle="#ffff00",e.shadowColor="rgba(255, 255, 0, 0.5)",e.shadowBlur=10,e.textAlign="right",e.fillText(k("tutorial2","nextWithA"),i.width-40,310),e.shadowBlur=0,e.font="18px Arial",e.fillStyle="rgba(255, 255, 0, 0.7)",e.fillText(k("tutorial2","nextWithAEn"),i.width-40,340),e.textAlign="center",ll&&(ll.needsUpdate=!0)}function Ob(){!Nt||!Eo||(qr(),vm(-1),Ka(!0))}function Bb(){if(!Dp)return;const i=.08;let e=Pp;if(Lp===1?(e+=i,e>=1&&(e=1,Ka(!1))):(e-=i,e<=0&&(e=0,Ka(!1),Nt&&(J.remove(Nt),Nt.geometry&&Nt.geometry.dispose(),Nt.material&&(Nt.material.map&&Nt.material.map.dispose(),Nt.material.dispose()),_m(null),xm(!1),al=null,ll=null),jn&&(J.remove(jn),jn.geometry&&jn.geometry.dispose(),jn.material&&jn.material.dispose(),Sm(null)),Un&&(J.remove(Un),Un.geometry&&Un.geometry.dispose(),Un.material&&Un.material.dispose(),Mm(null)))),ym(e),Nt){const t=Yr(e);Nt.scale.set(t,t,1),Nt.material&&(Nt.material.opacity=e)}}function kb(){if(Bb(),!Nt||!Ue)return;const i=Ae.xr.getFrame(),e=Ae.xr.getReferenceSpace();if(!i||!e)return;const t=new E,n=new Ye;Te.getWorldPosition(t),Te.getWorldQuaternion(n);const s=new E(0,0,-1);s.applyQuaternion(n);const r=t.clone().add(s.clone().multiplyScalar(1));r.y-=.15,Nt.position.copy(r);const o=new E;o.subVectors(t,r),o.y=0,o.normalize();const a=Math.atan2(o.x,o.z);Nt.rotation.set(0,a,0);let l=null;const c=Ue.inputSources;for(const u of c)if(u.handedness==="right"&&u.gripSpace){const d=i.getPose(u.gripSpace,e);if(d){l=new E().setFromMatrixPosition(new xe().fromArray(d.transform.matrix));break}}if(l){const u=new E(.2,-.15,0);u.applyAxisAngle(new E(0,1,0),a);const d=r.clone().add(u),h=l.clone();if(!jn){const m=new Rt,f=new Cs({color:16776960,transparent:!0,opacity:.8}),T=new Ps(m,f);J.add(T),Sm(T)}const p=new Float32Array([d.x,d.y,d.z,h.x,h.y,h.z]);if(jn.geometry.setAttribute("position",new Ct(p,3)),jn.geometry.attributes.position.needsUpdate=!0,!Un){const m=new ji(.015,16,16),f=new lt({color:16776960,transparent:!0}),T=new we(m,f);J.add(T),Mm(T)}Un.position.copy(l);const _=(Math.sin(Date.now()*.001*3)+1)/2;Un.material.opacity=.3+_*.7,Un.scale.setScalar(.8+_*.4)}}let cl=null,ul=null;function zb(){if(Ft)return;Xr();const i=document.createElement("canvas");i.width=600,i.height=400,cl=i;const e=new xn(i);e.minFilter=Tt,e.magFilter=Tt,ul=e,Vb();const t=new bt(.6,.4),n=new lt({map:e,transparent:!0,side:_t,depthWrite:!1}),s=new we(t,n);J.add(s),Tm(s),bm(!0),Em(0),$a(!0),wm(1)}function Vb(){if(!cl)return;const i=cl,e=i.getContext("2d");e.clearRect(0,0,i.width,i.height),e.fillStyle="rgba(10, 10, 26, 0.85)",e.fillRect(0,0,i.width,i.height),e.strokeStyle="rgba(0, 200, 255, 0.5)",e.lineWidth=4,e.strokeRect(2,2,i.width-4,i.height-4);const t=e.createLinearGradient(0,0,i.width,i.height);t.addColorStop(0,"rgba(0, 200, 255, 0.1)"),t.addColorStop(.5,"rgba(255, 107, 107, 0.05)"),t.addColorStop(1,"rgba(0, 200, 255, 0.1)"),e.fillStyle=t,e.fillRect(4,4,i.width-8,i.height-8),e.font="bold 20px Arial",e.fillStyle="#ffcc00",e.textAlign="center",e.fillText(k("tutorial3","step"),i.width/2,35),e.font="bold 36px Arial",e.fillStyle="#00c8ff",e.shadowColor="rgba(0, 200, 255, 0.8)",e.shadowBlur=15,e.fillText(k("tutorial3","title"),i.width/2,75),e.shadowBlur=0,e.font="18px Arial",e.fillStyle="rgba(0, 200, 255, 0.7)",e.fillText(k("tutorial3","titleEn"),i.width/2,100),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.lineWidth=2,e.beginPath(),e.moveTo(40,120),e.lineTo(i.width-40,120),e.stroke(),e.font="22px Arial",e.fillStyle="rgba(255, 255, 255, 0.9)",e.fillText(k("tutorial3","instruction1"),i.width/2,175),e.font="18px Arial",e.fillStyle="rgba(255, 255, 255, 0.6)",e.fillText(k("tutorial3","instruction1En"),i.width/2,205),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.beginPath(),e.moveTo(40,260),e.lineTo(i.width-40,260),e.stroke(),e.font="bold 28px Arial",e.fillStyle="#ffff00",e.shadowColor="rgba(255, 255, 0, 0.5)",e.shadowBlur=10,e.textAlign="right",e.fillText(k("tutorial3","nextWithA"),i.width-40,310),e.shadowBlur=0,e.font="18px Arial",e.fillStyle="rgba(255, 255, 0, 0.7)",e.fillText(k("tutorial3","nextWithAEn"),i.width-40,340),e.textAlign="center",ul&&(ul.needsUpdate=!0)}function Hb(){!Ft||!Ur||(qr(),wm(-1),$a(!0))}function Gb(){if(!Up)return;const i=.08;let e=Ip;if(Np===1?(e+=i,e>=1&&(e=1,$a(!1))):(e-=i,e<=0&&(e=0,$a(!1),Ft&&(J.remove(Ft),Ft.geometry&&Ft.geometry.dispose(),Ft.material&&(Ft.material.map&&Ft.material.map.dispose(),Ft.material.dispose()),Tm(null),bm(!1),cl=null,ul=null),Kn&&(J.remove(Kn),Kn.geometry&&Kn.geometry.dispose(),Kn.material&&Kn.material.dispose(),Am(null)),Nn&&(J.remove(Nn),Nn.geometry&&Nn.geometry.dispose(),Nn.material&&Nn.material.dispose(),Rm(null)))),Em(e),Ft){const t=Yr(e);Ft.scale.set(t,t,1),Ft.material&&(Ft.material.opacity=e)}}function Wb(){if(Gb(),!Ft||!Ue)return;const i=Ae.xr.getFrame(),e=Ae.xr.getReferenceSpace();if(!i||!e)return;const t=new E,n=new Ye;Te.getWorldPosition(t),Te.getWorldQuaternion(n);const s=new E(0,0,-1);s.applyQuaternion(n);const r=t.clone().add(s.clone().multiplyScalar(1));r.y-=.15,Ft.position.copy(r);const o=new E;o.subVectors(t,r),o.y=0,o.normalize();const a=Math.atan2(o.x,o.z);Ft.rotation.set(0,a,0);let l=null;const c=Ue.inputSources;for(const u of c)if(u.handedness==="left"&&u.gripSpace){const d=i.getPose(u.gripSpace,e);if(d){l=new E().setFromMatrixPosition(new xe().fromArray(d.transform.matrix));break}}if(l){const u=new E(-.2,-.15,0);u.applyAxisAngle(new E(0,1,0),a);const d=r.clone().add(u),h=l.clone();if(!Kn){const m=new Rt,f=new Cs({color:16776960,transparent:!0,opacity:.8}),T=new Ps(m,f);J.add(T),Am(T)}const p=new Float32Array([d.x,d.y,d.z,h.x,h.y,h.z]);if(Kn.geometry.setAttribute("position",new Ct(p,3)),Kn.geometry.attributes.position.needsUpdate=!0,!Nn){const m=new ji(.015,16,16),f=new lt({color:16776960,transparent:!0}),T=new we(m,f);J.add(T),Rm(T)}Nn.position.copy(l);const _=(Math.sin(Date.now()*.001*3)+1)/2;Nn.material.opacity=.3+_*.7,Nn.scale.setScalar(.8+_*.4)}}let dl=null,hl=null;function Xb(){if(Ot)return;Xr();const i=document.createElement("canvas");i.width=600,i.height=400,dl=i;const e=new xn(i);e.minFilter=Tt,e.magFilter=Tt,hl=e,qb();const t=new bt(.6,.4),n=new lt({map:e,transparent:!0,side:_t,depthWrite:!1}),s=new we(t,n);J.add(s),Cm(s),Pm(!0),Dm(0),Za(!0),Lm(1)}function qb(){if(!dl)return;const i=dl,e=i.getContext("2d");e.clearRect(0,0,i.width,i.height),e.fillStyle="rgba(10, 10, 26, 0.85)",e.fillRect(0,0,i.width,i.height),e.strokeStyle="rgba(0, 200, 255, 0.5)",e.lineWidth=4,e.strokeRect(2,2,i.width-4,i.height-4);const t=e.createLinearGradient(0,0,i.width,i.height);t.addColorStop(0,"rgba(0, 200, 255, 0.1)"),t.addColorStop(.5,"rgba(255, 107, 107, 0.05)"),t.addColorStop(1,"rgba(0, 200, 255, 0.1)"),e.fillStyle=t,e.fillRect(4,4,i.width-8,i.height-8),e.font="bold 20px Arial",e.fillStyle="#ffcc00",e.textAlign="center",e.fillText(k("tutorial4","step"),i.width/2,35),e.font="bold 36px Arial",e.fillStyle="#00c8ff",e.shadowColor="rgba(0, 200, 255, 0.8)",e.shadowBlur=15,e.fillText(k("tutorial4","title"),i.width/2,75),e.shadowBlur=0,e.font="18px Arial",e.fillStyle="rgba(0, 200, 255, 0.7)",e.fillText(k("tutorial4","titleEn"),i.width/2,100),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.lineWidth=2,e.beginPath(),e.moveTo(40,120),e.lineTo(i.width-40,120),e.stroke(),e.font="22px Arial",e.fillStyle="rgba(255, 255, 255, 0.9)",e.fillText(k("tutorial4","instruction1"),i.width/2,155),e.font="bold 26px Arial",e.fillStyle="#ffff00",e.shadowColor="rgba(255, 255, 0, 0.5)",e.shadowBlur=10,e.fillText(k("tutorial4","instruction2"),i.width/2,195),e.shadowBlur=0,e.font="16px Arial",e.fillStyle="rgba(255, 255, 255, 0.6)",e.fillText(k("tutorial4","instruction1En"),i.width/2,235),e.fillText(k("tutorial4","instruction2En"),i.width/2,255),e.strokeStyle="rgba(0, 200, 255, 0.3)",e.beginPath(),e.moveTo(40,280),e.lineTo(i.width-40,280),e.stroke(),e.font="bold 24px Arial",e.fillStyle="#00ff00",e.shadowColor="rgba(0, 255, 0, 0.5)",e.shadowBlur=10,e.textAlign="right",e.fillText(k("tutorial4","nextWithA"),i.width-40,325),e.shadowBlur=0,e.font="16px Arial",e.fillStyle="rgba(0, 255, 0, 0.7)",e.fillText(k("tutorial4","nextWithAEn"),i.width-40,350),e.textAlign="center",hl&&(hl.needsUpdate=!0)}function Yb(){!Ot||!ad||(qr(),eb(2e3),Lm(-1),Za(!0))}function jb(){if(!Op)return;const i=.08;let e=Fp;if(Bp===1?(e+=i,e>=1&&(e=1,Za(!1))):(e-=i,e<=0&&(e=0,Za(!1),Ot&&(J.remove(Ot),Ot.geometry&&Ot.geometry.dispose(),Ot.material&&(Ot.material.map&&Ot.material.map.dispose(),Ot.material.dispose()),Cm(null),Pm(!1),dl=null,hl=null),$n&&(J.remove($n),$n.geometry&&$n.geometry.dispose(),$n.material&&$n.material.dispose(),Im(null)),Fn&&(J.remove(Fn),Fn.geometry&&Fn.geometry.dispose(),Fn.material&&Fn.material.dispose(),Um(null)))),Dm(e),Ot){const t=Yr(e);Ot.scale.set(t,t,1),Ot.material&&(Ot.material.opacity=e)}}function Kb(){if(jb(),!Ot||!Ue)return;const i=Ae.xr.getFrame(),e=Ae.xr.getReferenceSpace();if(!i||!e)return;const t=new E,n=new Ye;Te.getWorldPosition(t),Te.getWorldQuaternion(n);const s=new E(0,0,-1);s.applyQuaternion(n);const r=t.clone().add(s.clone().multiplyScalar(1));r.y-=.15,Ot.position.copy(r);const o=new E;o.subVectors(t,r),o.y=0,o.normalize();const a=Math.atan2(o.x,o.z);Ot.rotation.set(0,a,0);let l=null;const c=Ue.inputSources;for(const u of c)if(u.handedness==="left"&&u.gripSpace){const d=i.getPose(u.gripSpace,e);if(d){l=new E().setFromMatrixPosition(new xe().fromArray(d.transform.matrix));break}}if(l){const u=new E(-.2,-.15,0);u.applyAxisAngle(new E(0,1,0),a);const d=r.clone().add(u),h=l.clone();if(!$n){const m=new Rt,f=new Cs({color:16776960,transparent:!0,opacity:.8}),T=new Ps(m,f);J.add(T),Im(T)}const p=new Float32Array([d.x,d.y,d.z,h.x,h.y,h.z]);if($n.geometry.setAttribute("position",new Ct(p,3)),$n.geometry.attributes.position.needsUpdate=!0,!Fn){const m=new ji(.015,16,16),f=new lt({color:16776960,transparent:!0}),T=new we(m,f);J.add(T),Um(T)}Fn.position.copy(l);const _=(Math.sin(Date.now()*.001*3)+1)/2;Fn.material.opacity=.3+_*.7,Fn.scale.setScalar(.8+_*.4)}}function $b(){if(!L||!Et)return!1;const i=new E;L.getWorldPosition(i);let e=!1;_n.forEach((s,r)=>{const{position:o,quaternion:a,polygon:l,orientation:c}=s,u=new E(0,1,0).applyQuaternion(a),h=new E().subVectors(i,o).dot(u),p=Math.abs(u.y)>.7?Dn.vertical:Dn.horizontal;if(Math.abs(h)<p){const g=a.clone().invert(),_=i.clone().sub(o).applyQuaternion(g);let m=!1;for(let f=0,T=l.length-1;f<l.length;T=f++){const b=l[f].x,x=l[f].z,P=l[T].x,R=l[T].z;x>_.z!=R>_.z&&_.x<(P-b)*(_.z-x)/(R-x)+b&&(m=!m)}if(m){e=!0;const f=p-Math.abs(h),T=h>0?1:-1,b=u.clone().multiplyScalar(f*T),x=f;L.position.add(b),L.userData.basePosition&&L.userData.basePosition.add(b);const P=gt.dot(u);if((h>0&&P<0||h<0&&P>0)&&gt.sub(u.clone().multiplyScalar(P*1.5)),x>.001&&!ms&&(_i(!0),tr(),Ue)){const R=Ue.inputSources;for(const A of R)if(A.gamepad&&A.gamepad.hapticActuators&&A.gamepad.hapticActuators.length>0){const D=Math.min(Math.max(x*20,.3),1);A.gamepad.hapticActuators[0].pulse(D,33)}}}}});const n=i.y-0;if(n<Dn.vertical){e=!0;const s=Dn.vertical-n;if(new E(0,1,0),L.position.y+=s,L.userData.basePosition&&(L.userData.basePosition.y+=s),gt.y<0&&(gt.y=-gt.y*.5),s>.001&&!ms&&(_i(!0),tr(),Ue)){const r=Ue.inputSources;for(const o of r)if(o.gamepad&&o.gamepad.hapticActuators&&o.gamepad.hapticActuators.length>0){const a=Math.min(Math.max(s*20,.3),1);o.gamepad.hapticActuators[0].pulse(a,33)}}}return po&&po.length>0&&po.forEach(s=>{if(!s.userData.isObstacle)return;const r=s.position.clone(),o=new E().subVectors(i,r);if(s.userData.type==="cube"){const a=s.userData.size/2,l=Dn.horizontal,c=s.quaternion.clone().invert(),u=o.clone().applyQuaternion(c),d=Math.max(0,Math.abs(u.x)-a),h=Math.max(0,Math.abs(u.y)-a),p=Math.max(0,Math.abs(u.z)-a);if(d<l&&h<l&&p<l){e=!0;const g=a+l-Math.abs(u.x),_=a+l-Math.abs(u.y),m=a+l-Math.abs(u.z);let f=new E,T=0;g<=_&&g<=m?(f.set(Math.sign(u.x),0,0),T=g):_<=g&&_<=m?(f.set(0,Math.sign(u.y),0),T=_):(f.set(0,0,Math.sign(u.z)),T=m);const b=f.applyQuaternion(s.quaternion);L.position.add(b.clone().multiplyScalar(T)),L.userData.basePosition&&L.userData.basePosition.add(b.clone().multiplyScalar(T));const x=gt.dot(b);x<0&&gt.sub(b.clone().multiplyScalar(x*1.5)),ms||(_i(!0),tr())}}else if(s.userData.type==="pole"){const a=s.userData.radius,l=s.userData.height,c=a+Dn.horizontal,u=s.quaternion.clone().invert(),d=o.clone().applyQuaternion(u),h=l/2,p=Math.max(-h,Math.min(h,d.y)),g=Math.sqrt(d.x*d.x+d.z*d.z),_=Math.abs(d.y)-h,m=d.y>=-h&&d.y<=h,f=_<Dn.vertical;if(g<c&&(m||f)){e=!0;let T=new E,b=0;if(m)T.set(d.x,0,d.z).normalize(),b=c-g;else{const x=new E(d.x,d.y-p,d.z),P=x.length();P>.001&&(T.copy(x).normalize(),b=c-P)}if(b>0&&T.length()>.001){const x=T.applyQuaternion(s.quaternion);L.position.add(x.clone().multiplyScalar(b)),L.userData.basePosition&&L.userData.basePosition.add(x.clone().multiplyScalar(b));const P=gt.dot(x);P<0&&gt.sub(x.clone().multiplyScalar(P*1.5)),ms||(_i(!0),tr())}}}else if(s.userData.type==="torus"){const a=s.userData.outerRadius,l=s.userData.tubeRadius,c=o.clone(),u=s.quaternion.clone().invert();c.applyQuaternion(u);const h=Math.sqrt(c.x*c.x+c.y*c.y)-a,p=Math.sqrt(h*h+c.z*c.z),g=l+Dn.horizontal;if(p<g){e=!0;const _=Math.atan2(c.y,c.x),m=new E(Math.cos(_)*a,Math.sin(_)*a,0),f=c.clone().sub(m).normalize();f.applyQuaternion(s.quaternion);const T=g-p;L.position.add(f.multiplyScalar(T)),L.userData.basePosition&&L.userData.basePosition.add(f.clone().multiplyScalar(T));const b=gt.dot(f);b<0&&gt.sub(f.clone().multiplyScalar(b*1.5)),ms||(_i(!0),tr())}}}),e||_i(!1),e}function Zb(){if(!L||!Et||un||Ki||_s!==null||rr!==null||bs!==null||Fo>0||Jn||ei||Bo||Ls||Gp)return;const i=0,e=.016;let t=i+Dn.vertical;_n.forEach(o=>{const{position:a,quaternion:l,polygon:c}=o,u=new E(0,1,0).applyQuaternion(l);if(Math.abs(u.y)<.7)return;const d=L.position.clone(),h=l.clone().invert(),p=d.clone().sub(a).applyQuaternion(h);let g=!1;for(let _=0,m=c.length-1;_<c.length;m=_++){const f=c[_].x,T=c[_].z,b=c[m].x,x=c[m].z;T>p.z!=x>p.z&&p.x<(b-f)*(p.z-T)/(x-T)+f&&(g=!g)}if(g){const _=a.y+Dn.vertical;_<=d.y+.01&&_>t&&(t=_)}});const n=Math.abs(L.position.y-t)<.01,s=tn.length()<.05;if(n&&s){L.position.y=t,tn.set(0,0,0),mn.set(0,0,0),Br(!0);return}const r=-9.8;if(tn.y+=r*e,L.position.add(tn.clone().multiplyScalar(e)),L.position.y<=t){const o=Math.abs(tn.y);if(L.position.y=t,tn.y<0){if(tn.y=-tn.y*.5,mn.x+=(Math.random()-.5)*1,mn.z+=(Math.random()-.5)*1,o>.5&&!ms&&(_i(!0),tr(),Ue)){const a=Ue.inputSources;for(const l of a)if(l.gamepad&&l.gamepad.hapticActuators&&l.gamepad.hapticActuators.length>0){const c=Math.min(Math.max(o*.5,.3),1);l.gamepad.hapticActuators[0].pulse(c,33)}}}else _i(!1);tn.x*=.7,tn.z*=.7,mn.multiplyScalar(.7)}else _i(!1);if(mn.length()>.01){const o=mn.clone().normalize(),a=mn.length()*e,l=new Ye().setFromAxisAngle(o,a);L.quaternion.multiply(l),mn.multiplyScalar(.85)}else mn.set(0,0,0)}function Qb(){if(!L||!Et||!un||Jn||ei||Bo||Ls)return;Mu(Ni+.016),L.userData.basePosition||(L.userData.basePosition=L.position.clone());const i=Math.pow(Wn/.3,.5),e=Math.max(.3,Math.min(2,i)),n=Math.min(Ni/1,1),s=Math.sin(Ni*1.2)*.006*e*n,r=Math.cos(Ni*.9)*.004*e*n,o=Math.sin(Ni*.8)*.008*e*n,a=Math.sin(Ni*.7)*.008*e*n,l=Math.cos(Ni*.85)*.008*e*n,c=L.userData.basePosition;L.position.x=c.x+o,L.position.y=c.y+s,L.position.z=c.z+r,L.userData.physicsTilt||(L.userData.physicsTilt={x:0,z:0}),L.rotation.order="YXZ",L.rotation.x=L.userData.physicsTilt.x+a,L.rotation.z=L.userData.physicsTilt.z+l}function Jb(){if(!Bo||!L||!Et)return;Qa(Ia+hT*.016),Ia>=1&&(Qa(1),fd(!1));const i=1-Math.pow(1-Ia,3);L.userData.basePosition||(L.userData.basePosition=L.position.clone()),L.userData.basePosition.copy(L.position),L.quaternion.slerpQuaternions(ld,cd,i),gt.set(0,0,0),ko(0)}function eE(){const i=new Gr(16777215,.5);i.position.set(0,10,0),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=50,i.shadow.camera.left=-5,i.shadow.camera.right=5,i.shadow.camera.top=5,i.shadow.camera.bottom=-5,J.add(i),J.add(i.target),Ml(i);const e=new bt(50,50),t=new ed({opacity:.3}),n=new we(e,t);n.rotation.x=-Math.PI/2,n.position.y=.001,n.receiveShadow=!0,J.add(n),Sl(n),Ae.shadowMap.enabled=!0,Ae.shadowMap.type=Bu,L&&L.traverse(s=>{s.isMesh&&(s.castShadow=vl)}),console.log("MR影設定を作成しました")}function tE(){Mi&&(J.remove(Mi),Mi.geometry.dispose(),Mi.material.dispose(),Sl(null)),gn&&(J.remove(gn.target),J.remove(gn),Ml(null)),zi.forEach(i=>{J.remove(i),i.geometry.dispose(),i.material.dispose()}),zi.clear(),console.log("MR影設定を削除しました")}function nE(){J.background=new ge(13421772);const i=100,e=200,t=new uM(i,e,8947848,10066329);t.position.y=0,J.add(t),Bm(t);const n=new bt(i,i),s=new ed({opacity:.4}),r=new we(n,s);r.rotation.x=-Math.PI/2,r.position.y=.001,r.receiveShadow=!0,J.add(r),Sl(r);const o=new Gr(16777215,.8);o.position.set(10,20,10),o.castShadow=!0,o.shadow.mapSize.width=4096,o.shadow.mapSize.height=4096,o.shadow.camera.near=.5,o.shadow.camera.far=100,o.shadow.camera.left=-50,o.shadow.camera.right=50,o.shadow.camera.top=50,o.shadow.camera.bottom=-50,o.shadow.bias=-1e-4,J.add(o),J.add(o.target),Ml(o),Ae.shadowMap.enabled=!0,Ae.shadowMap.type=Bu,L&&L.traverse(a=>{a.isMesh&&(a.castShadow=vl)}),iE(),console.log("VR環境を作成しました")}function iE(){const i=[];let t=Date.now();function n(){return t=t*1103515245+12345&2147483647,t/2147483647}function s(x,P){return x+n()*(P-x)}function r(x,P,R=1){return Math.sqrt(x*x+P*P)>=R}function o(x){x.castShadow=!0,x.receiveShadow=!0}const a=25;for(let x=0;x<a;x++){let P,R,A=0;do{const V=n()*Math.PI*2,se=s(1,40);P=Math.cos(V)*se+s(-3,3),R=Math.sin(V)*se+s(-3,3),A++}while(!r(P,R)&&A<10);const D=s(1,3.5),v=s(.6,1.3),y=n()<.3?s(0,Math.PI/4):0,C=n()*Math.PI*2,U=n()<.2?s(-Math.PI/6,Math.PI/6):0,I=s(.06,.1),F=new ps(v,I,16,32),Y=n()*.4+.45,H=new It({color:new ge().setHSL(Y,.9,.5),roughness:.2,metalness:.6,emissive:new ge().setHSL(Y,.9,.15),emissiveIntensity:.3}),W=new we(F,H);W.position.set(P,D,R),W.rotation.set(y,C,U),o(W),W.userData.isObstacle=!0,W.userData.type="torus",W.userData.outerRadius=v,W.userData.tubeRadius=I,J.add(W),i.push(W)}const l=35;for(let x=0;x<l;x++){let P,R,A=0;do{const F=n()*Math.PI*2,Y=s(1,38);P=Math.cos(F)*Y+s(-4,4),R=Math.sin(F)*Y+s(-4,4),A++}while(!r(P,R)&&A<10);const D=s(.3,.9),v=s(.8,3.5),y=new bn(D,D,D),C=n()*.2+.02,U=new It({color:new ge().setHSL(C,.8,.5),roughness:.4,metalness:.4}),I=new we(y,U);I.position.set(P,v,R),I.rotation.set(n()*.4,n()*Math.PI,n()*.4),o(I),I.userData.isObstacle=!0,I.userData.type="cube",I.userData.size=D,J.add(I),i.push(I)}const c=20;for(let x=0;x<c;x++){let P,R,A=0;do{const I=n()*Math.PI*2,F=s(1,35);P=Math.cos(I)*F+s(-2,2),R=Math.sin(I)*F+s(-2,2),A++}while(!r(P,R)&&A<10);const D=s(2.5,5.5),v=.12,y=new cr(v,v,D,16),C=new It({color:16724787,roughness:.4,metalness:.3,emissive:3342336,emissiveIntensity:.2}),U=new we(y,C);U.position.set(P,D/2,R),o(U),U.userData.isObstacle=!0,U.userData.type="pole",U.userData.radius=v,U.userData.height=D,J.add(U),i.push(U)}[{dist:40,angle:0},{dist:40,angle:Math.PI/2},{dist:40,angle:Math.PI},{dist:40,angle:Math.PI*1.5},{dist:35,angle:Math.PI/4},{dist:35,angle:Math.PI*3/4},{dist:35,angle:Math.PI*5/4},{dist:35,angle:Math.PI*7/4}].forEach(x=>{const P=Math.cos(x.angle)*x.dist,R=Math.sin(x.angle)*x.dist,A=s(1.5,2.5),D=s(1.2,1.8),v=.1,y=new ps(D,v,16,32),C=new It({color:16766720,roughness:.1,metalness:.9,emissive:16766720,emissiveIntensity:.5}),U=new we(y,C);U.position.set(P,A,R),U.rotation.y=x.angle+Math.PI/2,o(U),U.userData.isObstacle=!0,U.userData.type="torus",U.userData.outerRadius=D,U.userData.tubeRadius=v,J.add(U),i.push(U)});const d=24;for(let x=0;x<d;x++){const P=x/d*Math.PI*2+s(-.1,.1),R=s(38,45),A=Math.cos(P)*R,D=Math.sin(P)*R,v=s(3,5),y=.08,C=new cr(y,y,v,8),U=new It({color:4521796,roughness:.5,metalness:.2,emissive:1131537,emissiveIntensity:.3}),I=new we(C,U);I.position.set(A,v/2,D),o(I),I.userData.isObstacle=!0,I.userData.type="pole",I.userData.radius=y,I.userData.height=v,J.add(I),i.push(I)}const h=12;for(let x=0;x<h;x++){const P=n()*Math.PI*2,R=s(25,38),A=Math.cos(P)*R,D=Math.sin(P)*R,v=s(.8,1.2),y=s(1.2,2.5),C=new bn(v,v,v),U=.7+n()*.2,I=new It({color:new ge().setHSL(U,.7,.5),roughness:.3,metalness:.5,emissive:new ge().setHSL(U,.7,.1),emissiveIntensity:.2}),F=new we(C,I);F.position.set(A,y,D),F.rotation.set(n()*Math.PI,n()*Math.PI,n()*Math.PI),o(F),F.userData.isObstacle=!0,F.userData.type="cube",F.userData.size=v,J.add(F),i.push(F)}const p=15;for(let x=0;x<p;x++){const P=n()*Math.PI*2,R=s(1,40),A=Math.cos(P)*R+s(-5,5),D=Math.sin(P)*R+s(-5,5);if(!r(A,D))continue;const v=s(1.5,4),y=s(1,8),C=new bn(v,v,v),U=n(),I=new It({color:new ge().setHSL(U,.6,.4),roughness:.5,metalness:.3,emissive:new ge().setHSL(U,.6,.1),emissiveIntensity:.15}),F=new we(C,I);F.position.set(A,y,D),F.rotation.set(n()*.5,n()*Math.PI,n()*.5),o(F),F.userData.isObstacle=!0,F.userData.type="cube",F.userData.size=v,J.add(F),i.push(F)}const g=10;for(let x=0;x<g;x++){const P=n()*Math.PI*2,R=s(1,35),A=Math.cos(P)*R+s(-3,3),D=Math.sin(P)*R+s(-3,3);if(!r(A,D))continue;const v=s(1.5,3.5),y=s(2,10),C=n()<.4?s(0,Math.PI/3):0,U=n()*Math.PI*2,I=n()<.3?s(-Math.PI/4,Math.PI/4):0,F=s(.1,.2),Y=new ps(v,F,16,32),H=n()*.3+.55,W=new It({color:new ge().setHSL(H,.85,.55),roughness:.15,metalness:.7,emissive:new ge().setHSL(H,.85,.2),emissiveIntensity:.4}),V=new we(Y,W);V.position.set(A,y,D),V.rotation.set(C,U,I),o(V),V.userData.isObstacle=!0,V.userData.type="torus",V.userData.outerRadius=v,V.userData.tubeRadius=F,J.add(V),i.push(V)}const _=20;for(let x=0;x<_;x++){const P=n()*Math.PI*2,R=s(1,40),A=Math.cos(P)*R+s(-4,4),D=Math.sin(P)*R+s(-4,4);if(!r(A,D))continue;const v=s(.4,2),y=s(5,15),C=new bn(v,v,v),U=n()*.15+.95,I=new It({color:new ge().setHSL(U%1,.75,.55),roughness:.35,metalness:.45,emissive:new ge().setHSL(U%1,.75,.15),emissiveIntensity:.25}),F=new we(C,I);F.position.set(A,y,D),F.rotation.set(n()*Math.PI,n()*Math.PI,n()*Math.PI),o(F),F.userData.isObstacle=!0,F.userData.type="cube",F.userData.size=v,J.add(F),i.push(F)}const m=15;for(let x=0;x<m;x++){const P=n()*Math.PI*2,R=s(1,38),A=Math.cos(P)*R+s(-3,3),D=Math.sin(P)*R+s(-3,3);if(!r(A,D))continue;const v=s(.7,2),y=s(6,14),C=n()*Math.PI/2,U=n()*Math.PI*2,I=n()*Math.PI/3,F=s(.06,.12),Y=new ps(v,F,16,32),H=n()*.2+.35,W=new It({color:new ge().setHSL(H,.9,.5),roughness:.2,metalness:.6,emissive:new ge().setHSL(H,.9,.15),emissiveIntensity:.35}),V=new we(Y,W);V.position.set(A,y,D),V.rotation.set(C,U,I),o(V),V.userData.isObstacle=!0,V.userData.type="torus",V.userData.outerRadius=v,V.userData.tubeRadius=F,J.add(V),i.push(V)}const f=8;for(let x=0;x<f;x++){const P=n()*Math.PI*2,R=s(1,35),A=Math.cos(P)*R,D=Math.sin(P)*R,v=s(2,4),y=s(15,25),C=n()*Math.PI/3,U=n()*Math.PI*2,I=s(.12,.2),F=new ps(v,I,16,32),Y=new It({color:65535,roughness:.1,metalness:.8,emissive:65535,emissiveIntensity:.5}),H=new we(F,Y);H.position.set(A,y,D),H.rotation.set(C,U,0),o(H),H.userData.isObstacle=!0,H.userData.type="torus",H.userData.outerRadius=v,H.userData.tubeRadius=I,J.add(H),i.push(H)}const T=10;for(let x=0;x<T;x++){const P=n()*Math.PI*2,R=s(1,40),A=Math.cos(P)*R+s(-3,3),D=Math.sin(P)*R+s(-3,3);if(!r(A,D))continue;const v=s(1,3),y=s(15,22),C=new bn(v,v,v),U=new It({color:16711935,roughness:.25,metalness:.6,emissive:16711935,emissiveIntensity:.3}),I=new we(C,U);I.position.set(A,y,D),I.rotation.set(n()*Math.PI,n()*Math.PI,n()*Math.PI),o(I),I.userData.isObstacle=!0,I.userData.type="cube",I.userData.size=v,J.add(I),i.push(I)}const b=8;for(let x=0;x<b;x++){const P=n()*Math.PI*2,R=s(1,38),A=Math.cos(P)*R,D=Math.sin(P)*R,v=s(10,25),y=s(.2,.5),C=new cr(y,y,v,16),U=n()*.1+0,I=new It({color:new ge().setHSL(U,.9,.5),roughness:.3,metalness:.4,emissive:new ge().setHSL(U,.9,.15),emissiveIntensity:.25}),F=new we(C,I);F.position.set(A,v/2,D),o(F),F.userData.isObstacle=!0,F.userData.type="pole",F.userData.radius=y,F.userData.height=v,J.add(F),i.push(F)}Wp(i),console.log("競技用コースを配置:",i.length,"個")}function sE(){J.background=null,fu&&(J.remove(fu),Bm(null)),Mi&&(J.remove(Mi),Mi.geometry.dispose(),Mi.material.dispose(),Sl(null)),gn&&(J.remove(gn.target),J.remove(gn),Ml(null)),po.forEach(i=>{J.remove(i),i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()}),Wp([]),console.log("VR環境を削除しました")}function rE(i,e){const t=i.getViewerPose(e);if(!t)return;const n=i.session.renderState.baseLayer;for(const s of t.views)if(n&&n.getDepthInformation){const r=n.getDepthInformation(s);if(r){const o=r.texture;if(!fr){const a=new At,l=Ae.properties.get(a);l.__webglTexture=o,l.__webglInit=!0,a.needsUpdate=!0,Fm(a)}fr.userData.logged||(console.log("深度データ取得 (GPU):",{width:r.width,height:r.height,normDepthBufferFromNormView:r.normDepthBufferFromNormView}),fr.userData.logged=!0)}}}function oE(){if(Es)return;const i=new bt(2,2),e=new lt({map:fr,side:_t,transparent:!0,opacity:.5}),t=new we(i,e);t.position.set(0,1.5,-2),t.visible=pr,J.add(t),Om(t)}function aE(i,e){i.detectedPlanes&&(_n.forEach((t,n)=>{if(!i.detectedPlanes.has(n)&&(_n.delete(n),zi.has(n))){const s=zi.get(n);J.remove(s),s.geometry.dispose(),s.material.dispose(),zi.delete(n)}}),i.detectedPlanes.forEach(t=>{const n=i.getPose(t.planeSpace,e);if(!n)return;const s=new E().setFromMatrixPosition(new xe().fromArray(n.transform.matrix)),r=new Ye().setFromRotationMatrix(new xe().fromArray(n.transform.matrix)),o=t.polygon;if(!_n.has(t))_n.set(t,{position:s,quaternion:r,polygon:o,orientation:t.orientation}),console.log("新しい平面を検出:",t.orientation),Nr&&t.orientation==="horizontal"&&lE(t,s,r,o);else{const a=_n.get(t);a.position=s,a.quaternion=r,a.polygon=o,zi.has(t)&&cE(t,s,r,o)}}))}function lE(i,e,t,n){if(!n||n.length<3)return;const s=[],r=[];for(let c=0;c<n.length;c++){const u=new E(n[c].x,0,n[c].z);u.applyQuaternion(t),u.add(e),u.y+=.002,s.push(u.x,u.y,u.z)}for(let c=1;c<n.length-1;c++)r.push(0,c,c+1);const o=new Rt;o.setAttribute("position",new St(s,3)),o.setIndex(r),o.computeVertexNormals();const a=new ed({opacity:.4}),l=new we(o,a);l.receiveShadow=!0,J.add(l),zi.set(i,l),console.log("平面影メッシュを作成: y =",e.y.toFixed(3))}function cE(i,e,t,n){const s=zi.get(i);if(!s||!n||n.length<3)return;const r=[],o=[];for(let l=0;l<n.length;l++){const c=new E(n[l].x,0,n[l].z);c.applyQuaternion(t),c.add(e),c.y+=.002,r.push(c.x,c.y,c.z)}for(let l=1;l<n.length-1;l++)o.push(0,l,l+1);s.geometry.dispose();const a=new Rt;a.setAttribute("position",new St(r,3)),a.setIndex(o),a.computeVertexNormals(),s.geometry=a}function uE(){if(!Ue||!L||Et)return;const i=Ae.xr.getFrame(),e=Ae.xr.getReferenceSpace();if(!i||!e)return;const t=new E;Te.getWorldPosition(t);const n=new E(0,0,-1);n.applyQuaternion(Te.quaternion),n.y=0,n.normalize();let s=null;if(_n&&_n.size>0){let l=1/0;for(const[c,u]of _n)if(c.orientation==="horizontal"){const h=u.position.y;h<l&&(l=h)}l!==1/0&&(s=l,console.log("検出された床の高さ:",s))}s===null&&(s=0,console.log("床をy=0に設定 (カメラ位置:",t.y,")"));let r=null;const o=Ue.inputSources;for(const l of o)if(l.handedness==="right"&&l.gripSpace){const c=i.getPose(l.gripSpace,e);if(c){r=new E().setFromMatrixPosition(new xe().fromArray(c.transform.matrix)),console.log("右コントローラーの位置にドローンを配置:",r);break}}if(!r){console.log("右コントローラー待機中... inputSources:",o.length);return}L.position.copy(r);const a=Math.atan2(n.x,n.z);L.rotation.order="YXZ",L.rotation.set(0,a,0),L.quaternion.setFromEuler(L.rotation),L.visible=!0,hd(!0),console.log("ドローン配置位置:",L.position),console.log("カメラ位置:",t),console.log("床の高さ:",s)}function dE(){if(!(!Ls||!L||!Et)){if(Pa==="horizontal"){const i=new E(ir.x,L.position.y,ir.z),e=new E().subVectors(i,L.position),t=e.length();if(t<.05)_o("vertical"),Le("水平位置到達 - 高度調整中"),console.log("水平移動完了、高度調整開始");else{e.normalize();const n=Math.min(To,t);L.position.x+=e.x*n,L.position.z+=e.z*n,L.userData.basePosition.copy(L.position);const s=Math.atan2(e.x,e.z),r=L.rotation.y;let o=s-r;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;L.rotation.y+=o*.1}}else if(Pa==="vertical"){const i=Math.abs(ir.y-L.position.y);if(i<.05)_o("rotation"),Le("高度到達 - 向き調整中"),console.log("高度調整完了、向き調整開始");else{const e=Math.sign(ir.y-L.position.y),t=Math.min(To,i);L.position.y+=e*t,L.userData.basePosition.copy(L.position)}}else if(Pa==="rotation"){const i=new E;Te.getWorldPosition(i);const e=new E(0,0,-1);e.applyQuaternion(Te.quaternion),e.y=0,e.normalize();const t=Math.atan2(e.x,e.z),n=L.rotation.y;let s=t-n;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;Math.abs(s)<.05?(L.rotation.y=t,Tu(!1),_o("horizontal"),Jm(),L.userData.basePosition.copy(L.position),gt.set(0,0,0),ko(0),Le("自動帰還完了"),console.log("自動帰還完了")):L.rotation.y+=s*.1}}}function hE(){if(!Ue||!L||!Et||!un||qi||Ir)return;const i=Ue.inputSources;for(const e of i)if(e.gamepad){const n=e.gamepad.buttons[0],s=n&&n.pressed;e.handedness==="left"&&s&&!$p?(sn>1?(cf(sn-1),il(),Ma(),Le(`速度レベル: ${sn}`),Bt()):(Ma(),Le(`速度レベル: ${sn} (最小)`),Bt()),Du(!0)):e.handedness==="left"&&!s&&Du(!1),e.handedness==="right"&&s&&!Zp?(sn<30?(cf(sn+1),il(),Ma(),Le(`速度レベル: ${sn}`),Bt()):(Ma(),Le(`速度レベル: ${sn} (最大)`),Bt()),Lu(!0)):e.handedness==="right"&&!s&&Lu(!1)}}function fE(){if(!Ue||!L||!Et)return;const i=Ue.inputSources;for(const e of i)if(e.handedness==="right"&&e.gamepad){const n=e.gamepad.buttons[4],s=n&&n.pressed;s&&!Tp&&!Cp&&(bo&&an===1?(Lb(),Yi(2),setTimeout(()=>{Nb()},300),console.log("チュートリアル1を閉じ、チュートリアル2を表示"),ga(!0)):Eo&&an===2?(Ob(),Yi(3),setTimeout(()=>{mc()},300),console.log("チュートリアル2を閉じ、コントローラーガイドを表示"),ga(!0)):Ba&&an===3?(mc(),setTimeout(()=>{zb()},300),console.log("コントローラーガイドを閉じ、チュートリアル3を表示"),ga(!0)):!bo&&!Eo&&!Ur&&(mc(),console.log("コントローラーガイドメニュー:",Ba?"表示":"非表示"))),s||ga(!1),PT(s)}if(!(!un||Jn||ei||qi)){for(const e of i)if(e.handedness==="right"&&e.gamepad){const t=e.gamepad.buttons,n=t[5],s=n&&n.pressed;if(s&&!Sp)if(mr)Le("FPVモード中は自動帰還を使用できません"),Bt();else if(Ls)Tu(!1),_o("horizontal"),Jm(),Le("自動帰還モードをキャンセル"),console.log("自動帰還キャンセル"),Bt();else{const a=Ae.xr.getFrame(),l=Ae.xr.getReferenceSpace();if(a&&l&&e.gripSpace){const c=a.getPose(e.gripSpace,l);if(c){const u=new E().setFromMatrixPosition(new xe().fromArray(c.transform.matrix));Tu(!0),_o("horizontal"),ir.copy(u),tm(za*1.5),rb(),ob(),Le("自動帰還モード開始 - 水平移動中"),console.log("自動帰還開始:",ir,"speed:",To),Bt()}}}AT(s);const r=t[3],o=r&&r.pressed;o&&!Mp&&(bT(!Lr),Lr?(We&&We.setVolume(0),console.log("ドローン音声: ミュート"),Le("ドローン音声: ミュート"),pf(!1)):(gd(),console.log("ドローン音声: オン"),Le("ドローン音声: オン"),pf(!0)),Bt()),CT(o)}}}function pE(){if(!Ue||!L||!Et)return;const i=Ue.inputSources;for(const e of i)if(e.handedness==="left"&&e.gamepad){const n=e.gamepad.buttons[4],s=n&&n.pressed;s&&!kp&&(Ur&&an===3?(Hb(),Yi(4),setTimeout(()=>{gc()},300),console.log("チュートリアル3を閉じ、設定ウィンドウを表示"),_a(!0)):Ir&&an===4?(gc(),console.log("設定ウィンドウを閉じる（チュートリアル4へ）"),_a(!0)):!Ur&&an!==4&&(gc(),console.log("設定メニュー:",Ir?"表示":"非表示"),_a(!0))),s||_a(!1)}}function mE(){if(!Ue||!We||bo||Eo||Ur||an>=1&&an<=3||an===4&&Ir)return;if(ad&&an===4){const e=Ue.inputSources;for(const t of e)if(t.handedness==="left"&&t.gamepad){const s=t.gamepad.buttons[5];s&&s.pressed&&!Da&&(Yb(),Yi(0),Ro(!0),localStorage.setItem("tutorialCompleted","true"),console.log("チュートリアル4を閉じ、チュートリアル完了"))}return}const i=Ue.inputSources;for(const e of i)if(e.handedness==="left"&&e.gamepad){const t=e.gamepad.buttons,n=t[5],s=n&&n.pressed;if(s&&!Da&&!un&&!Ki&&!Gi&&Et){if(Po(!0),Br(!1),console.log("起動シーケンス開始"),Le("Drone Starting..."),mf(k("status","startingUp")),Bt(),We&&We.buffer&&!We.isPlaying){let u=Math.pow(.3/Wn,.5);u=Math.max(.2,Math.min(2.7,u));const d=Math.max(u/2,.2);We.setVolume(0),We.setPlaybackRate(d),We.play(),console.log("ドローン音開始 - 開始ピッチ:",d.toFixed(2),"目標ピッチ:",u.toFixed(2))}const r=Date.now(),o=2e3;let a=Math.pow(.3/Wn,.5);a=Math.max(.2,Math.min(2.7,a));const l=Math.max(a/2,.2),c=setInterval(()=>{const u=Date.now()-r,d=Math.min(u/o,1);if(Wi(d),We&&We.isPlaying){Lr||We.setVolume(.7*d);const h=l+(a-l)*d;We.setPlaybackRate(h)}d>=1&&(clearInterval(c),console.log("プロペラ加速完了、音量・ピッチ通常到達"),setTimeout(()=>{console.log("=== 上昇準備完了 - 次のフレームで上昇開始 ==="),Fr(Date.now())},500))},16)}if(s&&!Da&&un&&!Gi&&(Nm(!0),wu(Date.now()),Co(!1),console.log("=== 終了シーケンス開始 - 降下を開始 ==="),Le("Shutting Down..."),mf(k("status","shuttingDown")),Bt()),UT(s),un&&!Gi){const r=t[3],o=r&&r.pressed;o&&!vp&&(RT(!ki),ub(ki),Le(ki?"当たり判定オン":"当たり判定オフ"),console.log(ki?"当たり判定オン":"当たり判定オフ"),Bt()),ET(o)}}}function gE(){if(!Ue||!L||!Et||Jn||ei||Ki||Gi)return;const i=Ue.inputSources;let e=!1,t=!1,n=null,s=null;const r=Ae.xr.getFrame(),o=Ae.xr.getReferenceSpace();if(r&&o){for(const a of i)if(a.gamepad&&a.gripSpace){const c=a.gamepad.buttons[1],u=c&&c.pressed,d=r.getPose(a.gripSpace,o);if(d){const h=new E().setFromMatrixPosition(new xe().fromArray(d.transform.matrix));a.handedness==="right"?(e=u,n=h):a.handedness==="left"&&(t=u,s=h)}}}if(e&&t&&n&&s)if(!qi)lf(!0),BT(n.distanceTo(s)),kT(Wn),Le("サイズ変更モード開始 (初期距離: "+(La*100).toFixed(1)+"cm)"),console.log("サイズ変更モード開始:",La,"スケール:",_u);else{const l=n.distanceTo(s)/La,c=_u*l;ib(c)}else qi&&(lf(!1),Le("サイズ変更モード終了 (最終スケール: "+Wn.toFixed(2)+")"),console.log("サイズ変更モード終了"))}function _E(){if(!Ue||!L||!Et||ei||qi||Ki||Gi)return;const i=Ue.inputSources;for(const e of i)if(e.gamepad&&e.gripSpace){const s=e.gamepad.buttons[1],r=s&&s.pressed;if(e.handedness==="right"){if(r&&!mu&&e.gripSpace){const o=new E;L.getWorldPosition(o);const a=Ae.xr.getFrame(),l=Ae.xr.getReferenceSpace();if(a&&l){const c=a.getPose(e.gripSpace,l);if(c){const u=new E().setFromMatrixPosition(new xe().fromArray(c.transform.matrix)),d=o.distanceTo(u);if(d<.08){Cu(!0),Pu(e),Br(!1),$s.copy(u);const h=new Ye().setFromRotationMatrix(new xe().fromArray(c.transform.matrix));Zs.copy(h),mo.copy(o).sub($s);const p=new Ye;L.getWorldQuaternion(p),xs.copy(Zs).invert().multiply(p),Le("右コントローラーでドローンを掴んだ (距離: "+(d*100).toFixed(1)+"cm)"),console.log("右コントローラーでドローンを掴んだ")}}}}else!r&&mu&&Jn&&Js===e&&_f();FT(r)}if(e.handedness==="left"){if(r&&!gu&&e.gripSpace){const o=new E;L.getWorldPosition(o);const a=Ae.xr.getFrame(),l=Ae.xr.getReferenceSpace();if(a&&l){const c=a.getPose(e.gripSpace,l);if(c){const u=new E().setFromMatrixPosition(new xe().fromArray(c.transform.matrix)),d=o.distanceTo(u);if(d<.08){Cu(!0),Pu(e),Br(!1),$s.copy(u);const h=new Ye().setFromRotationMatrix(new xe().fromArray(c.transform.matrix));Zs.copy(h),mo.copy(o).sub($s);const p=new Ye;L.getWorldQuaternion(p),xs.copy(Zs).invert().multiply(p),Le("左コントローラーでドローンを掴んだ (距離: "+(d*100).toFixed(1)+"cm)"),console.log("左コントローラーでドローンを掴んだ")}}}}else!r&&gu&&Jn&&Js===e&&_f();OT(r)}}if(Jn&&Js&&Js.gripSpace){const e=Ae.xr.getFrame(),t=Ae.xr.getReferenceSpace();if(e&&t){const n=e.getPose(Js.gripSpace,t);if(n){const s=new E().setFromMatrixPosition(new xe().fromArray(n.transform.matrix));$s.lerp(s,sf);const r=$s.clone().add(mo);L.position.copy(r),L.userData.basePosition&&L.userData.basePosition.copy(r);const o=new Ye().setFromRotationMatrix(new xe().fromArray(n.transform.matrix));Zs.slerp(o,sf);const a=Zs.clone().multiply(xs);L.quaternion.copy(a),gt.set(0,0,0),ko(0)}}}}function _f(){const e=L.position.clone().sub(Oo).divideScalar(.016);Cu(!1),Pu(null),un?(fd(!0),Qa(0),jp.copy(L.position),ld.copy(L.quaternion),cd.setFromAxisAngle(new E(0,1,0),L.rotation.y),Le("ドローンを離した - ホバー位置に戻ります"),console.log("ドローンを離した")):(tn.copy(e),mn.set((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),Le("ドローンを離した"),console.log("ドローンを離した - 速度:",e.length().toFixed(2),"m/s"))}function xE(){if(!Ue||!L||!Et||Jn||qi||Ki||Gi||!Ae.xr.getFrame())return;const e=[Xp,qp];for(let t=0;t<e.length;t++){const n=e[t];if(!n)continue;const s=n.joints["index-finger-tip"],r=n.joints["thumb-tip"];if(s&&r){const o=new E,a=new E;s.getWorldPosition(o),r.getWorldPosition(a);const c=o.distanceTo(a)<.025,u=new E;L.getWorldPosition(u);const d=new E().addVectors(o,a).multiplyScalar(.5),h=d.distanceTo(u);if(c&&!ei&&h<.08){Vm(!0),Hm(n),Br(!1),mo.copy(u).sub(d),lc.copy(d);const p=n.joints.wrist;if(p){const g=new Ye;p.getWorldQuaternion(g);const _=new Ye;L.getWorldQuaternion(_),xs.copy(g).invert().multiply(_),Ks.copy(g)}else{const g=new Ye;n.getWorldQuaternion(g);const _=new Ye;L.getWorldQuaternion(_),xs.copy(g).invert().multiply(_),Ks.copy(g)}Le("手でドローンを掴んだ (距離: "+(h*100).toFixed(1)+"cm)"),console.log("手でドローンを掴んだ 距離:",h)}else!c&&ei&&pu===n&&yE();if(ei&&pu===n){s.getWorldPosition(o),r.getWorldPosition(a),d.addVectors(o,a).multiplyScalar(.5),lc.lerp(d,cc);const p=lc.clone().add(mo);L.position.copy(p),L.userData.basePosition&&L.userData.basePosition.copy(p);const g=n.joints.wrist;if(g){const _=new Ye;g.getWorldQuaternion(_),Ks.slerp(_,cc);const m=Ks.clone().multiply(xs);L.quaternion.copy(m)}else{const _=new Ye;n.getWorldQuaternion(_),Ks.slerp(_,cc);const m=Ks.clone().multiply(xs);L.quaternion.copy(m)}gt.set(0,0,0),ko(0)}}}}function yE(){const e=L.position.clone().sub(Oo).divideScalar(.016);Vm(!1),Hm(null),un?(fd(!0),Qa(0),jp.copy(L.position),ld.copy(L.quaternion),cd.setFromAxisAngle(new E(0,1,0),L.rotation.y),Le("ドローンを離した - ホバー位置に戻ります"),console.log("手を離した")):(tn.copy(e),mn.set((Math.random()-.5)*3,(Math.random()-.5)*3,(Math.random()-.5)*3),Le("ドローンを離した"),console.log("手を離した - 速度:",e.length().toFixed(2),"m/s"))}function vE(){const i=new Qf;_T(i);const e=new qt(75,window.innerWidth/window.innerHeight,.1,1e3);xT(e);const t=new QS;e.add(t),MT(t);const n=new Zf({antialias:!0,alpha:!0});n.setSize(window.innerWidth,window.innerHeight),n.xr.enabled=!0,yT(n),document.getElementById("app").appendChild(n.domElement);const r=new rp(16777215,.8);i.add(r);const o=new Gr(16777215,.5);o.position.set(1,1,1),i.add(o),sb(),window.addEventListener("resize",AE),yb(),n.setAnimationLoop(SE)}function SE(){if(ab(),lb(),cb(),db(),pb(),mb(),Rb(),Eb(),Ub(),kb(),Wb(),Kb(),Pb(),Ue){const i=Ae.xr.getFrame(),e=Ae.xr.getReferenceSpace();i&&e&&(ws&&rE(i,e),aE(i,e)),ws&&fr&&!Es&&oE(),Es&&(Es.visible=ws&&pr);const t=Ue.inputSources;let n=!1,s=!1;if(i&&e)for(const a of t)a.handedness==="left"&&a.gripSpace?i.getPose(a.gripSpace,e)&&(n=!0):a.handedness==="right"&&a.gripSpace&&i.getPose(a.gripSpace,e)&&(s=!0);const r=dr,o=hr;DT(n),LT(s),(r!==dr||o!==hr)&&(!dr||!hr?hb():fb())}if(uE(),yp.forEach(i=>{un&&!Gi?i.rotation.y+=ka:i.rotation.y+=ka*Fo}),Jb(),bE(),Zb(),Qb(),gE(),_E(),dE(),hE(),fE(),pE(),mE(),EE(),wE(),xE(),L&&Et){const i=L.position.clone();if(uc.length()>0){const e=i.distanceTo(uc);VT(e/.016),gd()}uc.copy(i)}L&&Oo.copy(L.position),TE(),ME(),Ae.render(J,Te)}function ME(){if(!gn||!L||!Et)return;const i=L.position;if(gn.position.set(i.x,i.y+10,i.z),gn.target.position.copy(i),gn.target.updateMatrixWorld(),Nr&&_n.size>0){let e=50;_n.forEach(t=>{const{position:n,quaternion:s,polygon:r}=t,o=new E(0,1,0).applyQuaternion(s);if(Math.abs(o.y)<.7||n.y>=i.y)return;const a=s.clone().invert(),l=i.clone().sub(n).applyQuaternion(a);let c=!1;for(let u=0,d=r.length-1;u<r.length;d=u++){const h=r[u].x,p=r[u].z,g=r[d].x,_=r[d].z;p>l.z!=_>l.z&&l.x<(g-h)*(l.z-p)/(_-p)+h&&(c=!c)}if(c){const u=i.y-n.y;u<e&&(e=u)}}),gn.shadow.camera.far=10+e+.1,gn.shadow.camera.updateProjectionMatrix()}}function TE(){if(!(!Ue||!L||!Et)){if(!er){const i=Ae.xr.getReferenceSpace();i&&md(i)}if(er){if(mr&&!Su){Ae.xr.setReferenceSpace(er);const i=new E;Te.getWorldPosition(i),Ja(i.clone());const e=L.userData.basePosition?L.userData.basePosition.clone():L.position.clone();el(e),L.rotation.y,tl(!0),console.log("FPVモード開始"),console.log("  カメラ高さ:",i.y.toFixed(3)),console.log("  ドローンbasePosition:",e.x.toFixed(3),e.y.toFixed(3),e.z.toFixed(3))}else if(!mr&&Su){tl(!1),Ja(null),el(null),Ae.xr.setReferenceSpace(er),console.log("FPVモード終了 - 元の位置に戻る");return}if(mr&&em&&vu){const i=L.userData.basePosition?L.userData.basePosition.clone():L.position.clone(),t=L.rotation.y+Math.PI,n=new E(i.x,i.y-vu.y,i.z),s=new Ye;s.setFromAxisAngle(new E(0,1,0),t);const r=n.clone().applyQuaternion(s.clone().invert()),o=new XRRigidTransform({x:-r.x,y:-r.y,z:-r.z},{x:0,y:Math.sin(-t/2),z:0,w:Math.cos(-t/2)}),a=er.getOffsetReferenceSpace(o);Ae.xr.setReferenceSpace(a)}}}}function bE(){if(!(_s===null||!L||!Et)&&sr===null&&Ue){const i=Ae.xr.getFrame(),e=Ae.xr.getReferenceSpace();if(i&&e){for(const t of Ue.inputSources)if(t.handedness==="right"&&t.gripSpace){const n=i.getPose(t.gripSpace,e);if(n){const s=new E().setFromMatrixPosition(new xe().fromArray(n.transform.matrix));Do(L.position.clone()),L.position.y>=s.y?(Or(L.position.y+.1),console.log("上昇開始 - 現在位置:",sr.y.toFixed(3),"目標高さ:",wo.toFixed(3),"(コントローラーより高いため10cm上昇)")):(Or(s.y),console.log("上昇開始 - 現在位置:",sr.y.toFixed(3),"目標高さ:",wo.toFixed(3),"(コントローラーの高さまで)"));break}}sr===null&&(console.log("右コントローラーが見つからないため上昇を中止"),Fr(null))}}}function EE(){if(bs===null||!L||!Et)return;const i=Date.now()-bs,t=Math.min(i/2e3,1);if(Wi(1-t),console.log("減速中 - progress:",t.toFixed(2),"propellerSpeed:",Fo.toFixed(2)),We&&We.isPlaying){const n=Math.pow(.3/Wn,.5),s=Math.max(.2,Math.min(2.7,n)),r=Math.max(s/2,.2),o=s-(s-r)*t;We.setPlaybackRate(o),Lr||We.setVolume(.7*(1-t))}t>=1&&(Au(null),Ru(null),Nm(!1),Wi(0),Br(!0),We&&We.isPlaying&&We.stop(),console.log("終了シーケンス完了"),Le("ドローン停止 - Xボタンで再起動"),Iu())}function wE(){if(!Ue||!L||!Et||!un&&_s===null&&rr===null||Jn||ei||Bo||Ls||qi)return;const i=Ue.inputSources;let e=0,t=0,n=0,s=0,r=0,o=0;if(_s!==null&&sr!==null&&wo!==null){const g=L.userData.basePosition?L.userData.basePosition.y:L.position.y;let _=!1;if(ki&&(du===null?(xa(g),ya(Date.now())):Math.abs(g-du)<.005?Date.now()-Vp>500&&(_=!0,console.log("上昇中にスタック検出 - 0.5秒間動いていない")):(xa(g),ya(Date.now()))),_){Fr(null),Do(null),Or(null),xa(null),ya(null),Co(!0),Po(!1),Wi(1),L.userData.basePosition&&(L.userData.basePosition=L.position.clone()),Mu(0);const m=L.rotation.y;L.rotation.order="YXZ",L.rotation.set(0,m,0),L.quaternion.setFromEuler(L.rotation),L.userData.physicsTilt&&(L.userData.physicsTilt.x=0,L.userData.physicsTilt.z=0),console.log("上昇中に衝突検出 - その場で起動完了"),Le("Collision Detected - Ready"),Iu()}else{const m=wo-g;if(Math.abs(m)>.02)t=Math.min(Math.max(m*2,.3),1);else{Fr(null),Do(null),Or(null),xa(null),ya(null),Co(!0),Po(!1),Wi(1),L.userData.basePosition&&(L.userData.basePosition=L.position.clone()),Mu(0);const f=L.rotation.y;L.rotation.order="YXZ",L.rotation.set(0,f,0),L.quaternion.setFromEuler(L.rotation),L.userData.physicsTilt&&(L.userData.physicsTilt.x=0,L.userData.physicsTilt.z=0),console.log("起動シーケンス完了 - 最終高さ:",L.position.y),Le("Drone Ready"),Iu()}}}if(rr!==null&&bs===null){const _=L.userData.basePosition?L.userData.basePosition.y:L.position.y,m=L.rotation.y;L.rotation.x+=(0-L.rotation.x)*.05,L.rotation.z+=(0-L.rotation.z)*.05,L.rotation.y=m,L.userData.physicsTilt&&(L.userData.physicsTilt.x+=(0-L.userData.physicsTilt.x)*.05,L.userData.physicsTilt.z+=(0-L.userData.physicsTilt.z)*.05);let f=!1;if(ki&&(hu===null?(va(_),Sa(Date.now())):Math.abs(_-hu)<.005?Date.now()-Hp>500&&(f=!0,console.log("降下中にスタック検出 - 0.5秒間動いていない")):(va(_),Sa(Date.now()))),f)wu(null),va(null),Sa(null),Au(Date.now()),Ru(_),L.userData.basePosition&&L.userData.basePosition.copy(L.position),gt.set(0,0,0),console.log("降下中に衝突検出 - その高さで減速シーケンス開始, 着地高さ:",lo.toFixed(3)),Le("Collision Detected - Landing...");else{const T=_-0;Wi(1),T>.02?t=-Math.min(Math.max(T*2,.3),1):(wu(null),va(null),Sa(null),Au(Date.now()),Ru(0),console.log("着地完了 - プロペラ減速開始"),Le("Landing..."))}}const a=Tl;for(const g of i)if(g.gamepad){const m=g.gamepad.axes;_s===null&&rr===null&&bs===null&&(Ao===2?(g.handedness==="right"&&m.length>=4&&(Math.abs(m[2])>a&&(e=m[2],r=m[2]),Math.abs(m[3])>a&&(n=m[3],o=m[3])),g.handedness==="left"&&m.length>=4&&(Math.abs(m[2])>a&&(s=-m[2]),Math.abs(m[3])>a&&(t=-m[3]))):(g.handedness==="right"&&m.length>=4&&(Math.abs(m[2])>a&&(e=m[2],r=m[2]),Math.abs(m[3])>a&&(t=-m[3])),g.handedness==="left"&&m.length>=4&&(Math.abs(m[2])>a&&(s=-m[2]),Math.abs(m[3])>a&&(n=m[3],o=m[3]))))}gt.y+=t*go;const l=new Ye;l.setFromAxisAngle(new E(0,1,0),L.rotation.y);const c=new E(0,0,-1);c.applyQuaternion(l),c.y=0,c.normalize(),c.multiplyScalar(n*go),gt.add(c);const u=new E(-1,0,0);u.applyQuaternion(l),u.y=0,u.normalize(),u.multiplyScalar(e*go),gt.add(u),gt.length()>za&&gt.normalize().multiplyScalar(za),gt.multiplyScalar(ud),L.userData.basePosition||(L.userData.basePosition=L.position.clone()),bs!==null?(gt.set(0,0,0),lo!==null?(L.position.y=lo,L.userData.basePosition&&(L.userData.basePosition.y=lo)):(L.position.y=0,L.userData.basePosition&&(L.userData.basePosition.y=0))):_s!==null||rr!==null?(L.position.add(gt),L.userData.basePosition.copy(L.position)):L.userData.basePosition.add(gt);let d=xu;d+=s*Qp,d=Math.max(-Va,Math.min(Va,d)),d*=Jp,ko(d),L.rotation.y+=xu;const h=-o*Ha,p=r*Ha;L.userData.physicsTilt||(L.userData.physicsTilt={x:0,z:0}),L.userData.physicsTilt.x+=(h-L.userData.physicsTilt.x)*rf,L.userData.physicsTilt.z+=(p-L.userData.physicsTilt.z)*rf,ki&&$b()}function AE(){Te.aspect=window.innerWidth/window.innerHeight,Te.updateProjectionMatrix(),Ae.setSize(window.innerWidth,window.innerHeight)}async function RE(){if(!navigator.xr){Le("WebXRがサポートされていません"),alert("このデバイスはWebXRをサポートしていません");return}try{if(Le("MRセッションを開始中..."),!await navigator.xr.isSessionSupported("immersive-ar")){Le("immersive-ARがサポートされていません"),alert("このデバイスはAR機能をサポートしていません");return}const t={requiredFeatures:[],optionalFeatures:["local-floor","bounded-floor","plane-detection","hand-tracking"]};console.log("オクルージョン設定:",ws),ws?(t.optionalFeatures.push("depth-sensing"),t.depthSensing={usagePreference:["cpu-optimized","gpu-optimized"],dataFormatPreference:["luminance-alpha","float32"]},console.log("depth-sensing有効")):console.log("depth-sensing無効");const n=await navigator.xr.requestSession("immersive-ar",t);Ga(n),df(!0),await Ae.xr.setSession(n),eE();const s=Ae.xr.getController(0),r=Ae.xr.getController(1);J.add(s),J.add(r);const o=Ae.xr.getHand(0),a=Ae.xr.getHand(1);J.add(o),J.add(a),km(o),zm(a),hd(!1),Co(!1),Po(!1),Wi(0),Fr(null),Do(null),Or(null),tn.set(0,0,0),mn.set(0,0,0),Oo.set(0,0,0),We&&We.isPlaying&&(We.stop(),console.log("ドローン音声停止"));const l=document.getElementById("start-button");l&&(l.style.display="none");const c=document.getElementById("vr-button");c&&(c.style.display="none"),window.dispatchEvent(new Event("xr-session-start")),Le("MRセッション開始");const u=localStorage.getItem("tutorialCompleted");localStorage.getItem("restartTutorial")==="true"?(localStorage.removeItem("restartTutorial"),localStorage.removeItem("tutorialCompleted"),Ro(!1),Yi(1),setTimeout(()=>{ol()},1e3)):u==="true"?(Ro(!0),Yi(0)):setTimeout(()=>{ol()},1e3),n.depthUsage?(console.log("深度センサー有効:",n.depthUsage),Le("MRセッション開始 (深度センサー有効)")):(console.log("深度センサー無効"),Le("MRセッション開始 (深度センサー無効)")),n.addEventListener("end",()=>{Ga(null),df(!1),md(null),pd(!1),tl(!1),Ja(null),el(null),tE(),We&&We.isPlaying&&(We.stop(),console.log("ドローン音声停止")),Es&&(J.remove(Es),Om(null)),Fm(null),_n.clear(),window.dispatchEvent(new Event("xr-session-end")),Le("MRセッション終了"),l&&(l.style.display="block"),c&&(c.style.display="block")})}catch(i){console.error("XRセッション開始エラー:",i),Le("エラー: "+(i.message||i.name||"Unknown error")),alert("MRセッションを開始できませんでした: "+(i.message||i.name||"Unknown error"))}}async function CE(){if(!navigator.xr){Le("WebXRがサポートされていません"),alert("このデバイスはWebXRをサポートしていません");return}try{if(Le("VRセッションを開始中..."),!await navigator.xr.isSessionSupported("immersive-vr")){Le("immersive-VRがサポートされていません"),alert("このデバイスはVR機能をサポートしていません");return}const e=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:[],optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});Ga(e),await Ae.xr.setSession(e),nE();const t=Ae.xr.getController(0),n=Ae.xr.getController(1);J.add(t),J.add(n);const s=new lT,r=Ae.xr.getControllerGrip(0),o=Ae.xr.getControllerGrip(1);r.add(s.createControllerModel(r)),o.add(s.createControllerModel(o)),J.add(r),J.add(o);const a=Ae.xr.getHand(0),l=Ae.xr.getHand(1);J.add(a),J.add(l),km(a),zm(l),hd(!1),Co(!1),Po(!1),Wi(0),Fr(null),Do(null),Or(null),tn.set(0,0,0),mn.set(0,0,0),Oo.set(0,0,0),We&&We.isPlaying&&(We.stop(),console.log("ドローン音声停止"));const c=document.getElementById("start-button");c&&(c.style.display="none");const u=document.getElementById("vr-button");u&&(u.style.display="none"),window.dispatchEvent(new Event("xr-session-start")),Le("VRセッション開始");const d=localStorage.getItem("tutorialCompleted");localStorage.getItem("restartTutorial")==="true"?(localStorage.removeItem("restartTutorial"),localStorage.removeItem("tutorialCompleted"),Ro(!1),Yi(1),setTimeout(()=>{ol()},1e3)):d==="true"?(Ro(!0),Yi(0)):setTimeout(()=>{ol()},1e3),e.addEventListener("end",()=>{Ga(null),md(null),pd(!1),tl(!1),Ja(null),el(null),sE(),We&&We.isPlaying&&(We.stop(),console.log("ドローン音声停止")),window.dispatchEvent(new Event("xr-session-end")),Le("VRセッション終了"),c&&(c.style.display="block"),u&&(u.style.display="block")})}catch(i){console.error("VRセッション開始エラー:",i),Le("エラー: "+(i.message||i.name||"Unknown error")),alert("VRセッションを開始できませんでした: "+(i.message||i.name||"Unknown error"))}}vE();const xf=document.getElementById("start-button");xf&&xf.addEventListener("click",RE);const yf=document.getElementById("vr-button");yf&&yf.addEventListener("click",CE);const Qs=document.getElementById("depth-toggle");Qs&&(Qs.addEventListener("click",()=>{af(!pr),Qs.textContent=pr?"深度表示 ON":"深度表示 OFF",console.log("深度表示:",pr)}),window.addEventListener("xr-session-start",()=>{Qs.style.display="block"}),window.addEventListener("xr-session-end",()=>{Qs.style.display="none",af(!1),Qs.textContent="深度表示 OFF"}));
