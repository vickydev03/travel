import React from "react";

const CustomSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 164"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        d="M0 0H108.17C113.224 0 115.751 0 118.042 0.7014C120.069 1.3223 121.953 2.33996 123.583 3.69524C125.425 5.22621 126.811 7.33989 129.581 11.5672L134.163 18.5582C136.557 22.2117 140.632 24.4128 145 24.4128H280V164H0V0Z"
        fill="white"
      />
    </svg>
  );
};

export default CustomSVG;
