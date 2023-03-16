import * as React from "react"
import { SVGProps } from "react"

const XsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={55}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <g filter="url(#b)">
        <path
          d="M6 12V3.272h2.03v6.845h3.703V12H6ZM13.161 12V5.38h1.91V12h-1.91Zm.961-7.93c-.364 0-.649-.087-.854-.262-.198-.183-.297-.44-.297-.773 0-.308.103-.557.309-.748.205-.191.486-.287.842-.287.348 0 .621.091.82.274.205.175.308.428.308.76a.974.974 0 0 1-.309.749c-.198.191-.47.287-.819.287ZM16.867 12V5.38h1.816l.072 1.346-.392.15c.087-.3.241-.57.463-.811.23-.25.502-.449.819-.599.316-.15.649-.224.997-.224.474 0 .874.104 1.198.312.325.2.566.503.724.91.167.399.25.893.25 1.484V12h-1.911V8.097c0-.266-.036-.486-.107-.66a.762.762 0 0 0-.32-.387.968.968 0 0 0-.535-.112c-.166 0-.32.029-.462.087-.143.05-.27.129-.38.237-.103.1-.182.216-.238.349a1.157 1.157 0 0 0-.083.449V12h-1.911ZM26.24 10.055l-.676-1.521 2.932-3.155H31l-4.76 4.676ZM24.414 12V2.773h1.91V12h-1.91Zm4.26 0-2.195-2.993 1.353-1.097 3.11 4.09h-2.267Z"
          fill="#fff"
        />
        <path
          d="M33 11.873V3h1.817l3.017 5.235-1.282-.012L39.604 3h1.758v8.873h-1.971V9.186c0-.778.015-1.475.047-2.092.04-.625.103-1.238.19-1.838l.226.66-2.293 3.79h-.807L34.509 5.94l.225-.685c.095.567.159 1.154.19 1.762.04.6.06 1.323.06 2.168v2.687H33Z"
          fill="url(#c)"
        />
        <path
          d="M46.244 12c-.697 0-1.307-.148-1.83-.444a3.122 3.122 0 0 1-1.2-1.217c-.277-.524-.415-1.12-.415-1.787 0-.524.079-1.001.237-1.432.159-.44.38-.816.666-1.128a3.13 3.13 0 0 1 2.316-.989c.443 0 .847.084 1.212.253.364.17.68.406.95.71.269.304.475.664.617 1.078.143.414.21.866.202 1.356l-.012.558h-5.012l-.285-1.154h3.741l-.201.228V7.78a1.036 1.036 0 0 0-.19-.545 1.098 1.098 0 0 0-.416-.38 1.149 1.149 0 0 0-.57-.14c-.317 0-.587.068-.808.203a1.205 1.205 0 0 0-.487.558c-.111.245-.166.549-.166.912 0 .364.07.685.213.964.15.279.365.494.642.646.285.152.621.228 1.01.228.26 0 .498-.042.712-.126.214-.085.444-.229.689-.431l.89 1.343c-.245.22-.506.406-.783.558-.277.144-.562.25-.855.317a3.348 3.348 0 0 1-.867.114Z"
          fill="url(#d)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={33.831}
        y1={4.912}
        x2={48.85}
        y2={6.484}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF692D" />
        <stop offset={0.505} stopColor="#E856E0" />
        <stop offset={0.995} stopColor="#4D67FA" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={33.831}
        y1={4.912}
        x2={48.85}
        y2={6.484}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF692D" />
        <stop offset={0.505} stopColor="#E856E0" />
        <stop offset={0.995} stopColor="#4D67FA" />
      </linearGradient>
      <filter
        id="a"
        x={0}
        y={0}
        width={55}
        height={22}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.929412 0 0 0 0 0.356863 0 0 0 0 0.729412 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_401_1940"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_401_1940"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        x={2}
        y={2}
        width={51}
        height={18}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_401_1940"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_401_1940"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default XsLogo
