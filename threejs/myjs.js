<script src="GLTFLoader.js"></script>
var THREE = window.THREE = require('three');
require('resources/threejs/r113/examples/js/loaders/GLTFLoader');


var loader = new THREE.GLTFLoader();

loader.load( 'D:\knight_artorias\scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );