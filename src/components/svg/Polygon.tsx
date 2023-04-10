const Polygon = () => {
  return (
    <>
      <svg
        width="87"
        height="88"
        viewBox="0 0 87 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.7]"
      >
        <g filter="url(#filter0_d_4_8238)">
          <path
            d="M41.7163 25.1148C42.8201 24.5173 44.1799 24.5173 45.2837 25.1148L57.5497 31.7548C58.6534 32.3523 59.3333 33.4566 59.3333 34.6516V47.9317C59.3333 49.1267 58.6534 50.2309 57.5497 50.8284L45.2837 57.4685C44.1799 58.066 42.8201 58.066 41.7163 57.4685L29.4504 50.8284C28.3466 50.2309 27.6667 49.1267 27.6667 47.9317V34.6516C27.6667 33.4566 28.3466 32.3523 29.4504 31.7548L41.7163 25.1148Z"
            fill="url(#paint0_radial_4_8238)"
          />
          <path
            d="M45.6606 24.4186C44.3217 23.6938 42.6783 23.6938 41.3394 24.4186L29.0735 31.0586C27.7301 31.7858 26.875 33.1482 26.875 34.6516V47.9317C26.875 49.435 27.7301 50.7974 29.0735 51.5246L41.3394 58.1647C42.6783 58.8895 44.3217 58.8895 45.6606 58.1647L57.9265 51.5246C59.2699 50.7974 60.125 49.435 60.125 47.9317V34.6516C60.125 33.1482 59.2699 31.7858 57.9265 31.0586L45.6606 24.4186Z"
            stroke="#0EA5E9"
            strokeWidth="1.58333"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4_8238"
            x="0.750011"
            y="0.916586"
            width="85.5"
            height="87.0834"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3.16667" />
            <feGaussianBlur stdDeviation="12.6667" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.341176 0 0 0 0 0.27451 0 0 0 0 0.956863 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4_8238"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_8238"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial_4_8238"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(43.5 41.2916) rotate(90) scale(16.625 15.8333)"
          >
            <stop />
            <stop offset="1" stopColor="#222023" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default Polygon;
