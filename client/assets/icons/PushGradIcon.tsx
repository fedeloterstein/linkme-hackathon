import * as React from "react"
import { SVGProps } from "react"

const PushGradIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M6.715 2.882c-2.428 0-3.58 1.411-4.729 3.954a14.66 14.66 0 0 0-.985 5.457 9.81 9.81 0 0 0 5.714 1.883 9.81 9.81 0 0 0 5.715-1.883 14.66 14.66 0 0 0-.984-5.457c-1.151-2.543-2.302-3.954-4.73-3.954Z"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.017 16.662a.75.75 0 1 0-.89-1.208l.89 1.208Zm-5.714-1.208a.75.75 0 1 0-.89 1.208l.89-1.208ZM5.763.25a.75.75 0 1 0 0 1.5V.25Zm1.904 1.5a.75.75 0 0 0 0-1.5v1.5Zm1.46 13.704a4.069 4.069 0 0 1-4.824 0l-.89 1.208a5.568 5.568 0 0 0 6.604 0l-.89-1.208ZM5.764 1.75h1.904V.25H5.763v1.5Z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={1.594}
        y1={5.282}
        x2={12.402}
        y2={5.926}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF692D" />
        <stop offset={0.505} stopColor="#E856E0" />
        <stop offset={0.995} stopColor="#4D67FA" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={4.155}
        y1={4.399}
        x2={9.575}
        y2={4.513}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF692D" />
        <stop offset={0.505} stopColor="#E856E0" />
        <stop offset={0.995} stopColor="#4D67FA" />
      </linearGradient>
    </defs>
  </svg>
)

export default PushGradIcon
