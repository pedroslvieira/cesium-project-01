import * as Cesium from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YjAxZjc4YS03MmNkLTQ1NDAtOWEwOS04ZTE2Y2UxYjM0MmIiLCJpZCI6MTEzNzgwLCJpYXQiOjE2Njc2Njg5NDJ9.WjnjJ-lbonZU4Lp04LK3Y40jRtYv31wDGPVdll6ikxQ';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    // terrainProvider: Cesium.createWorldTerrain(),
    fullscreenElement: 'cesiumContainer'
});

viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
    url: 'https://api.maptiler.com/tiles/terrain-quantized-mesh/?key=Evnp0EGPeIhWl5Dv5t4u'
});





// viewer.scene.screenSpaceCameraController.enableZoom = false;
viewer.animation.container.style.visibility = "hidden";
viewer.timeline.container.style.visibility = "hidden";
viewer.forceResize();

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-43.10378, -22.95638, 3000),
    orientation : {
        heading : Cesium.Math.toRadians(-100.0),
        pitch : Cesium.Math.toRadians(-18.0),
    }
});


const container = document.getElementsByClassName('container')[0];

container.addEventListener('scroll', (e) => {
    
    // Defaut
    if (container.scrollTop < window.innerHeight) {
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(-43.10378, -22.95638, 3000),
            orientation : {
                heading : Cesium.Math.toRadians(-100.0),
                pitch : Cesium.Math.toRadians(-18.0),
            }
        });
    }
    
    // Gavea
    else if (container.scrollTop >= window.innerHeight && container.scrollTop < 2*window.innerHeight ) {
        viewer.camera.flyTo({
            // destination : Cesium.Cartesian3.fromDegrees(-43.26451, -23.00048, 2000),
            destination : Cesium.Cartesian3.fromDegrees(-43.25341280800982, -23.002827993028493, 1500),
            orientation : {
                heading : Cesium.Math.toRadians(-100.0),
                pitch : Cesium.Math.toRadians(-17.0),
            }
        });
    }

    // Camorim
    else if (container.scrollTop >= 2*window.innerHeight && container.scrollTop < 3*window.innerHeight ) {
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees(-43.42608, -22.98957, 1500),
            orientation : {
                heading : Cesium.Math.toRadians(-40.0),
                pitch : Cesium.Math.toRadians(-17.0),
            }
        });
    }

    // Prainha
    else if (container.scrollTop >= 3*window.innerHeight && container.scrollTop < 4*window.innerHeight ) {
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees( -43.49053139947192, -23.049420904942558, 800),
            orientation : {
                heading : Cesium.Math.toRadians(-50.0),
                pitch : Cesium.Math.toRadians(-18.0),
            }
        });
    }

    // Telégrafo
    else if (container.scrollTop >= 4*window.innerHeight && container.scrollTop < 5*window.innerHeight ) {
        viewer.camera.flyTo({
            destination : Cesium.Cartesian3.fromDegrees( -43.528791, -23.098995, 1500),
            orientation : {
                heading : Cesium.Math.toRadians(-50.0),
                pitch : Cesium.Math.toRadians(-18.0),
            }
        });
    }
})



    // Lock camera to a point
    // var center = Cesium.Cartesian3.fromRadians(-22.951916, -43.2104872, 500);
    // var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);
    // viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI/8, 2900));
    // Orbit this point
    // viewer.clock.onTick.addEventListener(function(clock) {
    //     viewer.scene.camera.rotateRight(0.001);
    // });