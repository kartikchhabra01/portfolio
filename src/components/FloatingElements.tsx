import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.3;
`;

const FloatingBubble = styled(motion.div)<{ size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(138, 43, 226, 0.3);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  background: rgba(138, 43, 226, 0.1);
`;

const FloatingShape = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  opacity: 0.2;
`;

const FloatingElements: React.FC = () => {
  const floatingElements = [
    { id: 1, type: 'bubble', size: 120, x: 10, y: 20, duration: 20 },
    { id: 2, type: 'element', size: 60, x: 80, y: 60, duration: 25, color: 'rgba(255, 105, 180, 0.4)' },
    { id: 3, type: 'shape', size: 80, x: 20, y: 80, duration: 30, color: 'rgba(138, 43, 226, 0.4)' },
    { id: 4, type: 'bubble', size: 100, x: 70, y: 10, duration: 22 },
    { id: 5, type: 'element', size: 40, x: 90, y: 40, duration: 28, color: 'rgba(255, 69, 0, 0.3)' },
    { id: 6, type: 'shape', size: 60, x: 5, y: 50, duration: 35, color: 'rgba(0, 255, 255, 0.3)' },
    { id: 7, type: 'bubble', size: 80, x: 85, y: 80, duration: 18 },
    { id: 8, type: 'element', size: 50, x: 15, y: 90, duration: 32, color: 'rgba(255, 215, 0, 0.3)' },
  ];

  const renderElement = (element: any) => {
    const baseAnimation = {
      y: [0, -30, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
    };

    switch (element.type) {
      case 'bubble':
        return (
          <FloatingBubble
            key={element.id}
            size={element.size}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={baseAnimation}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      case 'element':
        return (
          <FloatingElement
            key={element.id}
            size={element.size}
            color={element.color}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              ...baseAnimation,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      case 'shape':
        return (
          <FloatingShape
            key={element.id}
            size={element.size}
            color={element.color}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              ...baseAnimation,
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FloatingContainer>
      {floatingElements.map(renderElement)}
    </FloatingContainer>
  );
};

export default FloatingElements;
