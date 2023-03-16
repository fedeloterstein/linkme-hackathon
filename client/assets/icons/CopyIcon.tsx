import * as React from "react"
import { SVGProps } from "react"

const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M14.176 11.248a2.928 2.928 0 0 1-2.928 2.928h-7.32A2.928 2.928 0 0 1 1 11.248v-7.32A2.928 2.928 0 0 1 3.928 1h7.32a2.928 2.928 0 0 1 2.928 2.928v7.32Z"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.752 17h7.32A2.928 2.928 0 0 0 17 14.072v-7.32"
      stroke="url(#b)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={1.684}
        y1={3.8}
        x2={14.145}
        y2={4.533}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF692D" />
        <stop offset={0.505} stopColor="#E856E0" />
        <stop offset={0.995} stopColor="#4D67FA" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={7.284}
        y1={8.93}
        x2={16.976}
        y2={9.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF692D" />
        <stop offset={0.505} stopColor="#E856E0" />
        <stop offset={0.995} stopColor="#4D67FA" />
      </linearGradient>
    </defs>
  </svg>
)

export default CopyIcon
