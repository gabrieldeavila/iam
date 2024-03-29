import React, { memo } from "react";

const Background1 = memo(
  ({
    className,
    mainColor,
    bigBubbles,
    smallBubbles,
  }: {
    className?: string;
    mainColor?: string;
    bigBubbles?: string;
    smallBubbles?: string;
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="bg-2"
        viewBox="0 0 515.48 360.86"
        width="286.188"
        height="200.344"
        className={className}
      >
        <g
          id="Layer_1"
          data-name="Layer 1"
          style={{
            fill: mainColor ?? "#4e3b51",
          }}
        >
          <path
            d="M884,552c-7.73-51.51-25-56-38.28-82-12.09-23.65-21.84-62.34,12.28-90,53-43,118,1,118,1s103,59,121,62,62,33,117-3,102-33,117-6-19,105-27,121,4,66,17,86,54,82-34,80-352,1-352,1-94.77-1.77-78-94C871,551,887,572,884,552Z"
            transform="translate(-834.52 -361.14)"
            style={{
              fill: mainColor ?? "#4e3b51",
            }}
          ></path>
          <circle
            cx="83.48"
            cy="163.86"
            r="20"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
          <circle
            cx="49.98"
            cy="188.36"
            r="13.5"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
          <circle
            cx="51.98"
            cy="157.36"
            r="7.5"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
          <circle
            cx="495.48"
            cy="298.86"
            r="20"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
          <circle
            cx="14.98"
            cy="62.36"
            r="7.5"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
          <circle
            cx="139.98"
            cy="297.36"
            r="35.5"
            style={{
              fill: bigBubbles ?? "#554a7d",
            }}
          ></circle>
          <circle
            cx="374.48"
            cy="325.86"
            r="24"
            style={{
              fill: bigBubbles ?? "#554a7d",
            }}
          ></circle>
          <circle
            cx="466.48"
            cy="201.86"
            r="13"
            style={{
              fill: bigBubbles ?? "#554a7d",
            }}
          ></circle>
          <circle
            cx="369.48"
            cy="84.86"
            r="26"
            style={{
              fill: bigBubbles ?? "#554a7d",
            }}
          ></circle>
          <circle
            cx="130.98"
            cy="15.36"
            r="12.5"
            style={{
              fill: bigBubbles ?? "#554a7d",
            }}
          ></circle>
          <circle
            cx="90.98"
            cy="264.36"
            r="12.5"
            style={{
              fill: bigBubbles ?? "#554a7d",
            }}
          ></circle>
          <circle
            cx="493.98"
            cy="119.36"
            r="12.5"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
          <circle
            cx="473.98"
            cy="331.36"
            r="13.5"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
          <circle
            cx="503.98"
            cy="338.36"
            r="7.5"
            style={{
              fill: smallBubbles ?? "#616a8f",
            }}
          ></circle>
        </g>
      </svg>
    );
  }
);

export default Background1;
