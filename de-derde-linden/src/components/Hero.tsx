import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';

function WavyText() {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock, mouse }) => {
    if (textRef.current) {
      textRef.current.position.x = THREE.MathUtils.lerp(textRef.current.position.x, mouse.x * 2, 0.1);
      textRef.current.position.y = THREE.MathUtils.lerp(textRef.current.position.y, mouse.y * 2, 0.1);
      textRef.current.rotation.x = THREE.MathUtils.lerp(textRef.current.rotation.x, mouse.y * 0.2, 0.1);
      textRef.current.rotation.y = THREE.MathUtils.lerp(textRef.current.rotation.y, mouse.x * 0.2, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        ref={textRef}
        fontSize={1.5}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={-0.05}
        textAlign="center"
        font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtM.woff"
        anchorX="center"
        anchorY="middle"
      >
        DE DERDE LINDEN
        <meshStandardMaterial
          color="#5D4037"
          emissive="#D4AF37"
          emissiveIntensity={0.2}
          metalness={0.5}
          roughness={0.5}
        />
      </Text>
    </Float>
  );
}

function AnimatedBackground() {
  const mesh = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#F5F0E6') },
      uColor2: { value: new THREE.Color('#D4AF37') },
      uColor3: { value: new THREE.Color('#5D4037') },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      float noise = snoise(vUv * 3.0 + uTime * 0.1);
      float noise2 = snoise(vUv * 6.0 - uTime * 0.2);
      
      vec3 color = mix(uColor1, uColor2, noise * 0.5 + 0.5);
      color = mix(color, uColor3, noise2 * 0.3);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return (
    <mesh ref={mesh} scale={[20, 10, 1]} position={[0, 0, -5]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#F5F0E6]">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedBackground />
          <WavyText />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 px-6 max-w-7xl mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-[#5D4037] text-xl md:text-2xl font-sans font-medium mb-4 tracking-widest uppercase">
            Generaties van Groei
          </h2>
          <p className="text-[#5D4037] text-lg md:text-xl font-sans leading-relaxed text-balance">
            Vanuit drie generaties ondernemerschap bouwen wij aan een netwerk van ondernemingen die economische en maatschappelijke waarde toevoegen.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#5D4037] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#5D4037] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
