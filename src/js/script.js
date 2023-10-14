import * as THREE from "three";

const scene = new THREE.Scene();

window.alert("wsad - ruch \n [] - ruch w osi Z \n;' -obrót");

//kamera
const camera = new THREE.PerspectiveCamera(
  120,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.z = 30;
camera.position.x = 0;
camera.position.y = 0;
//
//kolory
const colorBlue = new THREE.Color("skyblue");
const colorYellow = new THREE.Color(0xffff00);
const colorGreen = new THREE.Color(0x8ad68a);
//
//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//
//sterowanie
document.addEventListener("keydown", () => {
  switch (event.keyCode) {
    case 65: //lewo
      camera.position.x -= 1 * Math.cos(1);
      //camera.rotateY(-0.036);
      break;
    case 87: //góra
      camera.position.y += 1;
      break;
    case 68: //prawo
      camera.position.x += 1 * Math.cos(1);
      //camera.rotateY(0.036);
      break;
    case 83: //dół
      camera.position.y -= 1;
      break;
    case 222: //obrot
      camera.rotateY(-0.1);
      break;
    case 186: //obrot
      camera.rotateY(0.1);
      break;
    case 221: //tył
      camera.position.z += 0.3;
      break;
    case 219: //przód
      camera.position.z -= 0.3;
      break;
  }
});
//światło
const light = new THREE.PointLight(0x404040, 300);
scene.add(light);

//
//srodki
const geometryUniverseCenter = new THREE.SphereGeometry(0, 0, 0);
const materialUniverseCenter = new THREE.MeshBasicMaterial({
  color: colorYellow,
});
const sphereUniverseCenter1 = new THREE.Mesh(
  geometryUniverseCenter,
  materialUniverseCenter
);
const sphereUniverseCenter2 = new THREE.Mesh(
  geometryUniverseCenter,
  materialUniverseCenter
);
const sphereUniverseCenter3 = new THREE.Mesh(
  geometryUniverseCenter,
  materialUniverseCenter
);
const sphereUniverseCenter4 = new THREE.Mesh(
  geometryUniverseCenter,
  materialUniverseCenter
);
const sphereUniverseCenter5 = new THREE.Mesh(
  geometryUniverseCenter,
  materialUniverseCenter
);
const sphereUniverseCenter6 = new THREE.Mesh(
  geometryUniverseCenter,
  materialUniverseCenter
);
const sphereUniverseCenter7 = new THREE.Mesh(
  geometryUniverseCenter,
  materialUniverseCenter
);
scene.add(sphereUniverseCenter1);
scene.add(sphereUniverseCenter2);
scene.add(sphereUniverseCenter3);
scene.add(sphereUniverseCenter4);
scene.add(sphereUniverseCenter5);
scene.add(sphereUniverseCenter6);
scene.add(sphereUniverseCenter7);

//
//słońce
const geometrySphereSun = new THREE.SphereGeometry(10, 64, 32);
const materialSphereSun = new THREE.MeshBasicMaterial({ color: colorYellow });
const sphereSun = new THREE.Mesh(geometrySphereSun, materialSphereSun);
scene.add(sphereSun);
sphereSun.position.set(0, 0, 0);
//
//planeta - 1
const geometrySphere1 = new THREE.SphereGeometry(2, 64, 32);
const materialSphere1 = new THREE.MeshLambertMaterial({ color: colorGreen });
const sphere1 = new THREE.Mesh(geometrySphere1, materialSphere1);
sphereUniverseCenter1.add(sphere1);
sphere1.position.set(15, 0, 0);
//
//planeta - 2
const geometrySphere2 = new THREE.SphereGeometry(3.5, 64, 32);
const materialSphere2 = new THREE.MeshLambertMaterial({ color: colorBlue });
const sphere2 = new THREE.Mesh(geometrySphere2, materialSphere2);
sphereUniverseCenter2.add(sphere2);
sphere2.position.set(25, 1, 2);
//
//planeta - 3
const geometrySphere3 = new THREE.SphereGeometry(5, 64, 32);
const materialSphere3 = new THREE.MeshLambertMaterial({ color: colorBlue });
const sphere3 = new THREE.Mesh(geometrySphere3, materialSphere3);
sphereUniverseCenter3.add(sphere3);
sphere3.position.set(35, -0.8, -3);
//
//ruch
const animate = () => {
  requestAnimationFrame(animate);
  sphereUniverseCenter1.rotateY(0.011);
  sphereUniverseCenter2.rotateY(0.007);
  sphereUniverseCenter3.rotateY(0.005);
  sphereUniverseCenter4.rotateY(0.02);
  sphereUniverseCenter5.rotateY(0.01);
  sphereUniverseCenter6.rotateY(0.01);
  sphereUniverseCenter7.rotateY(0.01);
  sphereSun.rotateY(0.01);
  sphere1.rotateY(0.01);
  sphere2.rotateY(0.01);
  sphere3.rotateY(0.01);
  renderer.render(scene, camera);
};
animate();
//
