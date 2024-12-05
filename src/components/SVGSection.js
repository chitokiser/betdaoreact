import React from 'react';
import './SVGSection.css'; // 애니메이션 포함한 CSS 파일

const SVGSection = () => {
  return (
    <div className="svg-container">
      <svg viewBox="0 0 800 200">
        <defs>
          <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="400" height="400">
            <image href="https://iili.io/20FHSCN.png" x="0" y="0" width="400" height="400" />
          </pattern>
          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blurred" />
            <feOffset in="blurred" dx="0" dy="0" result="offsetBlurred" />
            <feFlood floodColor="cyan" result="glowColor" />
            <feComposite in="glowColor" in2="offsetBlurred" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text id="animatedText" x="50" y="150">Welcome BetDAO</text>
      </svg>
    </div>
  );
};

export default SVGSection;
