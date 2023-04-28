import * as THREE from "three";

/*
    Creating the scene, camera, and renderer:
    @camera: This is what the user will see.
    @renderer: How the window will be rendered into the canvas element
*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/*
    Creating a cube
    @geometry: An object that has vertices and faces
    @material: The material that you will apply to the cube
    @cube: combining the geometry object and mesh object into a cube object
*/
const geometry = new THREE.BoxGeometry(2, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Moving the camera back a little
camera.position.z = 5;

// animate loop
function animate() {
  requestAnimationFrame(animate);

  // rotating the cube
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;

  renderer.render(scene, camera);
}
animate();
