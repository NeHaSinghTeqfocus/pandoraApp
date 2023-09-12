import React from "react";

const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11 15h2v2h-2zm0-8h2v6h-2z" fill="blue" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default InfoIcon;
