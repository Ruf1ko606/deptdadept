import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Vertex Shader
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Fragment Shader - Simulates smoky red atmosphere
const fragmentShader = `
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;

// Simple noise function
float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// 2D Noise
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = vUv;
  
  // Slow movement
  float n = noise(uv * 3.0 + uTime * 0.1);
  float n2 = noise(uv * 6.0 - uTime * 0.15);
  
  float finalNoise = mix(n, n2, 0.5);
  
  // Vignette
  float dist = distance(uv, vec2(0.5));
  float vignette = smoothstep(0.8, 0.2, dist);
  
  // Color palette: Black to Red
  vec3 color = mix(vec3(0.02, 0.02, 0.02), vec3(0.84, 0.16, 0.16), finalNoise * 0.3 * vignette);
  
  // Mouse interaction influence (subtle glow)
  float mouseDist = distance(uv, uMouse);
  float mouseGlow = smoothstep(0.4, 0.0, mouseDist);
  color += vec3(0.4, 0.0, 0.0) * mouseGlow * 0.2;

  gl_FragColor = vec4(color, 1.0);
}
`;

const FogPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  });

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.current.uTime.value = state.clock.elapsedTime;
      // Map mouse -1 to 1 to 0 to 1 UV space roughly
      const mouseX = (state.pointer.x + 1) / 2;
      const mouseY = (state.pointer.y + 1) / 2;
      
      // Smooth lerp for mouse
      uniforms.current.uMouse.value.x += (mouseX - uniforms.current.uMouse.value.x) * 0.05;
      uniforms.current.uMouse.value.y += (mouseY - uniforms.current.uMouse.value.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[20, 10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

const FogCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <FogPlane />
      </Canvas>
    </div>
  );
};

export default FogCanvas;

