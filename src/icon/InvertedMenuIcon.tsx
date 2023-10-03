import React from "react";

interface InvertedMenuType {
  style: object;
  onClick: () => void;
}

const InvertedMenu = ({ style, onClick }: InvertedMenuType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26px"
    height="26px"
    fill="none"
    viewBox="0 0 24 24"
    onClick={onClick}
    style={style}
  >
    <g clipPath="url(#clip0_105_1866)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 3.001v18m-6-18v18m-6-18v18"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_105_1866">
        <path
          fill="#fff"
          d="M0 0H24V24H0z"
          transform="translate(0 .001)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

export default InvertedMenu;
