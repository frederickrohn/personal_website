//this just wraps the Cubes component with some added styling so it fits nicely on the pages I use them on.

"use client";
import React from 'react';
import Cubes from './Cubes';

interface CubesHeaderProps {
  gridSize?: number;
  maxAngle?: number;
  radius?: number;
  rippleColor?: string;
  rippleSpeed?: number;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
}

const CubesHeader: React.FC<CubesHeaderProps> = ({
  gridSize = 6,
  maxAngle = 45,
  radius = 3,
  rippleColor = "#ff6b6b",
  rippleSpeed = 1.5,
  autoAnimate = true,
  rippleOnClick = true
}) => {
  return (
    <div style={{ 
      height: '200px', 
      position: 'relative', 
      width: '100%', 
      marginBottom: '10rem', 
      marginTop: '10rem', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <Cubes 
        gridSize={gridSize}
        maxAngle={maxAngle}
        radius={radius}
        rippleColor={rippleColor}
        rippleSpeed={rippleSpeed}
        autoAnimate={autoAnimate}
        rippleOnClick={rippleOnClick}
      />
    </div>
  );
};

export default CubesHeader;
