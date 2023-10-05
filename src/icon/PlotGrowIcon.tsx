import React, { useState } from "react";
// import styled from "styled-components";
import styled, { keyframes } from "styled-components";

// Define your SVG path data here
const svgPathData = `
M21 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2V3m3 12l4-4 4 4 6-6m0 0v4m0-4h-4
`;

// Styled components for the SVG
const SvgWrapper = styled.div`
  perspective: 1000px;
`;

const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotateX(220deg);
  }
  to {
    opacity: 1;
    transform: rotateX(360deg);
  }
`;

const SvgContainer = styled.svg<{ rotation: number; opacity: number }>`
  width: 400px;
  height: 300px;
  fill: white;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.5s ease, opacity 0.5s ease-out;
  opacity: 1;
  transform: rotateX(${(props) => props.rotation}deg);
  opacity: ${(props) => props.opacity};
  /* animation: ${({ isFlipped }) =>
    isFlipped ? `${rotate} 0.5s ease` : "none"}; */

  /* transform: ${({ isFlipped }) =>
    isFlipped ? "rotateX(180deg)" : "rotateX(0deg)"}; */
`;

// Component
const FlipSVG: React.FC = ({ rotation, opacity }) => {
  // const handleFlip = () => {
  //   setIsFlipped(!isFlipped);
  // };

  return (
    <SvgWrapper>
      <SvgContainer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        rotation={rotation}
        opacity={opacity}
      >
        <path
          opacity={0.2}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={svgPathData}
        />
      </SvgContainer>
    </SvgWrapper>
  );
};

export default FlipSVG;
