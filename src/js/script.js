import * as THREE from "three";

const scene = new THREE.Scene();

window.alert("wsad - ruch \n [] - ruch w osi Z \n;' - obrót");

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
const colorBlue = new THREE.Color(0x6defea);
const colorYellow = new THREE.Color(0xffff00);
const colorGreen = new THREE.Color(0x8ad68a);
const colorRed = new THREE.Color(0xcd6464);
const colorWhite = new THREE.Color(0xcdc2c2);
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
const light = new THREE.PointLight(0x404040, 1300);
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
scene.add(sphereUniverseCenter1);
scene.add(sphereUniverseCenter2);
scene.add(sphereUniverseCenter3);
scene.add(sphereUniverseCenter4);

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
sphere1.position.set(15, -1, 0);
//
//planeta - 2
const geometrySphere2 = new THREE.SphereGeometry(3.5, 64, 32);
const materialSphere2 = new THREE.MeshLambertMaterial({ color: colorRed });
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
//planeta - 4
const geometrySphere4 = new THREE.SphereGeometry(3, 64, 32);
const materialSphere4 = new THREE.MeshLambertMaterial({ color: colorWhite });
const sphere4 = new THREE.Mesh(geometrySphere4, materialSphere4);
sphereUniverseCenter4.add(sphere4);
sphere4.position.set(50, 4, -3);
//
//pierścień
const geometryRing = new THREE.RingGeometry(7, 5, 32);
const materialRing = new THREE.MeshLambertMaterial({
  color: colorRed,
  side: THREE.DoubleSide,
});
const ring = new THREE.Mesh(geometryRing, materialRing);
ring.rotateX(-4);
sphere4.add(ring);
//

//gwizdy
const geometryStar = new THREE.SphereGeometry(0.1, 64, 32);
const materialStar = new THREE.MeshBasicMaterial({ color: 0xffffff });
const star1 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star1);
star1.position.set(30, 4, 4);
const star2 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star2);
star2.position.set(-30, -2, -7);
const star3 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star3);
star3.position.set(15, 10, 12);
const star4 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star4);
star4.position.set(5, 6, -20);
const star5 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star5);
star5.position.set(-3, -2, 15);
const star6 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star6);
star6.position.set(4, -7, -15);
const star7 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star7);
star7.position.set(-20, -17, 16);
const star8 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star8);
star8.position.set(14, 14, 16);
const star9 = new THREE.Mesh(geometryStar, materialStar);
scene.add(star9);
star9.position.set(-14, 14, 16);
//

//ruch
const animate = () => {
  requestAnimationFrame(animate);
  sphereUniverseCenter1.rotateY(0.011);
  sphereUniverseCenter2.rotateY(0.007);
  sphereUniverseCenter3.rotateY(0.003);
  sphereUniverseCenter4.rotateY(0.002);
  sphereSun.rotateY(0.01);

  //sphere1.rotateY(0.01);
  //sphere2.rotateY(0.01);
  //sphere3.rotateY(0.01);
  renderer.render(scene, camera);
};
animate();
//
