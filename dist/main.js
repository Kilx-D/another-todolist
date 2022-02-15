//alert("working");

import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

// import { FontLoader } from "https://unpkg.com/three@0.127.0/examples/jsm/loaders/FontLoader.js";
// import { TextGeometry } from "https://unpkg.com/three@0.127.0/examples/jsm/geometries/TextGeometry.js";


//'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

//how to view
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 10;

renderer.render(scene, camera);



// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0x0bfc03 });
// const torus = new THREE.Mesh(geometry, material);
// scene.add(torus);


const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableDamping = true;
// const gridHelper = new THREE.GridHelper( 500, 50 , 0xff03d5, 0xff03d5);
// scene.add(gridHelper);


const loader = new THREE.FontLoader();
let textMesh;
loader.load('https://unpkg.com/three@0.127.0/examples/fonts/helvetiker_regular.typeface.json', function(font){
  const geometry = new THREE.TextGeometry('I love you angie', {
    font: font, 
    size: 2,
    height: 0.2
  })

  textMesh = new THREE.Mesh(geometry, 
    new THREE.MeshStandardMaterial({ color: 0xff0044}));
    textMesh.position.x = -9;
    scene.add(textMesh);
    
    
    
})

const loader2 = new THREE.FontLoader();
let textMesh2;
let pivot;
loader.load('https://unpkg.com/three@0.127.0/examples/fonts/helvetiker_regular.typeface.json', function(font){
  const geometry = new THREE.TextGeometry('<3', {
    font: font, 
    size: 2,
    height: 0.2
  })

  textMesh2 = new THREE.Mesh(geometry, 
    new THREE.MeshStandardMaterial({ color: 0xff0044}));
    textMesh2.position.y = -3;
    textMesh2.position.x = -2;
    //textMesh.center();
    scene.add(textMesh2);
    pivot = new THREE.Group();
    scene.add( pivot );
    pivot.add( textMesh2 );
    
    
})


const loader3 = new THREE.FontLoader();
let textMesh3;
loader.load('https://unpkg.com/three@0.127.0/examples/fonts/helvetiker_regular.typeface.json', function(font){
  const geometry = new THREE.TextGeometry('made by yours truly <3', {
    font: font, 
    size: 0.5,
    height: 0.2
  })

  textMesh3 = new THREE.Mesh(geometry, 
    new THREE.MeshStandardMaterial({ color: 0xff0044}));
    textMesh3.position.y = -7;
    textMesh3.position.x = -3;
    textMesh3.rotateX(-0.4);
    textMesh3.position.z = -1;
    scene.add(textMesh3);
    
    
    
})



function animate() {
  requestAnimationFrame(animate);
//   torus.rotation.x += 0.001;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.001;
    pivot.rotateY(0.04);
  renderer.render(scene, camera);
}
animate();