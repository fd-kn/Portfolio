import React from 'react';
import { motion } from 'framer-motion';


const particles = Array(100).fill(0); 

const randomValue = (min, max) => Math.random() * (max - min) + min;

const AnimatedBackground = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black', 
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: randomValue(0.1, 1), 
            x: randomValue(0, window.innerWidth),
            y: randomValue(0, window.innerHeight),
          }}
          animate={{
            opacity: [0.5, 1, 0],
            x: [randomValue(0, window.innerWidth), randomValue(0, window.innerWidth)],
            y: [randomValue(0, window.innerHeight), randomValue(0, window.innerHeight)],
          }}
          transition={{
            duration: randomValue(18, 20), 
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          style={{
            position: 'absolute',
            width: '4px', 
            height: '4px', 
            borderRadius: '50%',
            backgroundColor: '#1ca9c9',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
