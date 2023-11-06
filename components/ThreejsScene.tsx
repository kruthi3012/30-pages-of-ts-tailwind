import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'


function ThreeJsScene() {
  const canvasRef = useRef();

  useEffect(() => {
    // Canvas
    const canvas = canvasRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    // Your other Three.js setup code can go here
    // For example:
    const scene = new THREE.Scene();

    const gui = new dat.GUI({
      width: 300,
      title: 'Nice debug UI',
      closeFolders: true
    })
    const debugObject = {}
    const cubeTweaks = gui.addFolder('Awesome cube')

    // Object 
    //BoxGeometry parameters: width, height, depth, widthSegments, heightSegments, depthSegments (segments are 1 by default which means each face is made of 2 triangles)
    const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)

    //sphere geometry
    // const geometry = new THREE.SphereGeometry(1,32,32)

    // Create an empty BufferGeometry(to create own shape: random triangle)
    // const geometry = new THREE.BufferGeometry()

    // Create a Float32Array containing the vertices position (3 by 3)
    // const positionsArray = new Float32Array([
    //     0, 0, 0, // First vertex
    //     0, 1, 0, // Second vertex
    //     1, 0, 0  // Third vertex
    // ])

    // Create the attribute and name it 'position'
    // const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
    // geometry.setAttribute('position', positionsAttribute)

    //to create bunch of random triangles
    // const geometry = new THREE.BufferGeometry()

    //create 50 triangles
    // const count = 50
    // const positionsArray = new Float32Array(count*3*3)
    // for(let i=0; i<count*3*3; i++){
    //   positionsArray[i] = (Math.random()-0.5)*4
    // }

    // Create the attribute and name it 'position'
    // const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
    // geometry.setAttribute('position', positionsAttribute)

    //wireframe shows outline of geometry only
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true})

    debugObject.color = 0x7300ff
    const material = new THREE.MeshBasicMaterial({ color: debugObject.color, wireframe:false})
    const mesh = new THREE.Mesh(geometry, material)

    // mesh.scale.x = 2
    // mesh.scale.y = 0.25
    // mesh.scale.z = 0.5

    // mesh.rotation.x = Math.PI * 0.25
    // mesh.rotation.y = Math.PI * 0.25
    scene.add(mesh);
    // gui.add(mesh.position, 'y') 
    cubeTweaks.add(mesh.position, 'y', - 3, 3, 0.01)
    //unchecking the box makes shape not visible
    cubeTweaks.add(mesh, 'visible')
    cubeTweaks.add(material, 'wireframe')
    cubeTweaks.addColor(material, 'color')

    debugObject.spin = () =>
    {
      gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
    }

    gui.add(debugObject,'spin')

    // const axesHelper = new THREE.AxesHelper(2)
    // scene.add(axesHelper)

    // Sizes
    const sizes = {
      // width: 800,
      // height: 600
      width: window.innerWidth,
      height: window.innerHeight
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1,)
    camera.position.z = 3
    scene.add(camera)

    const cursor = {
      x: 0,
      y: 0
    }
    
    window.addEventListener('mousemove', (event) =>
    {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = - (event.clientY / sizes.height - 0.5)
    })


    //orthographic camera: Elements will have the same size on the screen regardless of their distance from the camera.
    // const camera = new THREE.OrthographicCamera(- 1, 1, 1, - 1, 0.1, 100)
    // camera.position.z = 3
    // scene.add(camera)

    // //to create group of objects
    // const group = new THREE.Group()
    // group.scale.y = 2
    // group.rotation.y = 0.2
    // scene.add(group)

    // const cube1 = new THREE.Mesh(
    //     new THREE.BoxGeometry(1, 1, 1),
    //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
    // )
    // cube1.position.x = - 1.5
    // group.add(cube1)

    // const cube2 = new THREE.Mesh(
    //     new THREE.BoxGeometry(1, 1, 1),
    //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
    // )
    // cube2.position.x = 0
    // group.add(cube2)

    // const cube3 = new THREE.Mesh(
    //     new THREE.BoxGeometry(1, 1, 1),
    //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
    // )
    // cube3.position.x = 1.5
    // group.add(cube3)

    renderer.setSize(sizes.width, sizes.height)

    // let time = Date.now()
    let clock = new THREE.Clock();

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    const animate = () => {

      controls.update()

      //to ensure frame rate is constant for all types of screens
      // const currentTime = Date.now()
      // const deltaTime = currentTime - time
      // time = currentTime

      // const elapsedTime = clock.getElapsedTime()


      // Update objects
      // mesh.rotation.y += 0.001 * deltaTime
      // mesh.rotation.y = elapsedTime

      //to move in curves
      // mesh.position.x = Math.cos(elapsedTime)
      // mesh.position.y = Math.sin(elapsedTime)

      //animation using gsap
      // gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

      // camera.position.x = cursor.x*5
      // camera.position.y = cursor.y*5
      // camera.lookAt(mesh.position)

      camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
      camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
      camera.position.y = cursor.y * 3
      camera.lookAt(mesh.position)
  

      // Render
      renderer.render(scene, camera);

      //recursively rendering frames to animate
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);

      //for screens with pixel ratio greater than 1
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    };

    const handleDoubleClick = () => {
      const canvas = renderer.domElement;
      const fullscreenElement =
        document.fullscreenElement || (document as any).webkitFullscreenElement;
  
      if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
          canvas.requestFullscreen();
        } else if ((canvas as any).webkitRequestFullscreen) {
          (canvas as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('dblclick', handleDoubleClick);  
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl" />;

}

export default ThreeJsScene;
