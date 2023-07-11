type ShapesProps = {
    className?: string;
  };
  
  export const Shapes: React.FC<ShapesProps> = ({ className }) => (
    <svg
      className={className}
      width="635"
      height="650"
      viewBox="0 0 635 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ellipse 1" filter="url(#filter0_f_24_17)">
        <circle cx="326.5" cy="323.5" r="126.5" fill="#749781" />
      </g>
      <defs>
        <filter
          id="filter0_f_24_17"
          x="0"
          y="-3"
          width="653"
          height="653"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_24_17"
          />
        </filter>
      </defs>
    </svg>
  );
  