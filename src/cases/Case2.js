import React from "react";
import AFRAME from "aframe";
import AFRAMEExtras from "aframe-extras";
import animatedModel from "./models/Samba_Dancing.gltf";
import sky from "./images/sky.jpg"

function Case2Assets() {
    return (
        <a-assets>
            <a-asset-item id="model3D" src={animatedModel}></a-asset-item>
            <img id="modelsky" src={sky} alt="background sky"></img>
        </a-assets>
    );
}

function Case2Model() {
    return (
        <a-gltf-model src="#model3D" position="0 0 -4" shadow="receive: true" animation-mixer="clip: Armature|mixamo.com|Layer0" animatedman></a-gltf-model>
    );
}

function Case2Plane() {
    return (
        <a-plane id="main-plane" position="0 0 -8" rotation="-90 0 0" shadow="receive: true" width="5" height="10" opacity="0.2"></a-plane>
    );
}

function Case2Sky() {
    return (
        <a-sky phi-start="180" src="#modelsky"></a-sky>
    );
}

function Case2Lights() {
    return (
        <a-entity light="type: spot; intensity: 1; castShadow: true; shadowMapHeight: 2048; shadowMapWidth: 2048"  position="-1 2 0"></a-entity>
    );
}

function Case2Camera() {
    return (
        <a-entity id="rig" position="0 1 0">
            <a-camera id="camera"></a-camera>
        </a-entity>
    );
}

function Case2Project() {
    return (
      <div className="project-container">
          <a-scene renderer="antialias: true; colorManagement: true; sortObjects: true;">
              <Case2Assets />
              <Case2Model />
              <Case2Plane />
              <Case2Sky />
              <Case2Lights />
              <Case2Camera />
          </a-scene>
      </div>
    );
}

function Case2Details() {
    return (
        <div>
            <h3>Case 2</h3>
            <ul>
                <li>&lt;a-scene&gt;</li>
                <li>&lt;a-camera&gt;</li>
                <li>3D model</li>
                <li>&lt;a-light&gt;</li>
                <li>&lt;a-plane&gt; a ground</li>
                <li>&lt;a-sky&gt; as a sky</li>
            </ul>
        </div>
    );
}

class Case2 extends React.Component {
    componentDidMount() {
        console.log("Component Mounted Successfully");
    }

    render() {
        return (
            <div>
                <Case2Project/>
            </div>
        );
    }
}

export {Case2, Case2Details};