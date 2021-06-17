import { useEffect } from 'react';
import * as THREE from 'three';

function createScene( ...args ) {
    return new THREE.Scene();
}

function setCamera( ...args ) {
    return new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
}

function setRenderer( width, height ) {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height);
    return renderer;
}

function Cube() {
    function makeCube() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        return new THREE.Mesh( geometry, material );
    }

    useEffect(() => {
        const scene = createScene();
        
        const camera = setCamera();
        camera.position.z = 5;
        
        const renderer = setRenderer( window.innerWidth, window.innerHeight );

        const myThree = document.getElementById("ss")
        myThree.appendChild( renderer.domElement )
        
        const cube = makeCube();
        scene.add( cube );

        const animate = function animate() {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        }

        animate();
    });

    return (
        <div id="ss"></div>
    );
};

export default Cube;