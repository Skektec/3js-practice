import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

const loader = new GLTFLoader();
let model;

loader.load('/elfisho.glb', function (gltf) {
	model = gltf.scene;
	scene.add(model);
	console.log('Model loaded:', model);
});

camera.position.set(0, 1, 5);

function animate() {
	requestAnimationFrame(animate);

	if (model) {
		model.rotation.y += 0.01;
	}

	renderer.render(scene, camera);
}
animate();
