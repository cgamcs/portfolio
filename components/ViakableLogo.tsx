type ViakableLogoProps = { className?: string };

/**
 * Inlined from public/viakable.svg so it can be recoloured: an <img> would keep
 * the file's own black fill, while `currentColor` here picks up whatever text
 * colour the surrounding element uses.
 */
export default function ViakableLogo({ className }: ViakableLogoProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 252.000000 222.000000"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g transform="translate(0.000000,222.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
        <path d="M80 1361 c0 -824 2 -848 60 -967 142 -290 532 -382 792 -185 63 47 40 19 613 751 120 154 282 360 558 712 274 350 323 413 331 426 6 9 -119 12 -612 12 l-619 0 -11 -82 c-6 -46 -23 -159 -37 -253 -14 -93 -32 -215 -40 -270 -8 -55 -28 -192 -45 -305 -17 -113 -37 -254 -46 -315 -8 -60 -22 -120 -30 -132 -18 -28 -55 -30 -77 -5 -16 17 -17 79 -17 690 l0 672 -410 0 -410 0 0 -749z" />
        <path d="M1900 1010 c-260 -46 -429 -327 -350 -583 102 -329 516 -433 759 -189 72 72 108 140 128 244 58 312 -217 584 -537 528z" />
      </g>
    </svg>
  );
}
