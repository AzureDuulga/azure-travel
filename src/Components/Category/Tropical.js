import React from "react";

const Tropical = ({ color }) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect opacity="0.4" x="0.504028" width="32" height="32" fill="red" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1_3896" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_1_3896"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Tropical;
