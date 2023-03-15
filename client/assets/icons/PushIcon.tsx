import * as React from "react"
import { SVGProps } from "react"

const PushIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M7.001 2.882c-2.429 0-3.58 1.412-4.73 3.955a14.66 14.66 0 0 0-.984 5.457A9.808 9.808 0 0 0 7 14.176a9.808 9.808 0 0 0 5.714-1.882 14.66 14.66 0 0 0-.984-5.457c-1.15-2.543-2.301-3.955-4.73-3.955Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.303 16.662a.75.75 0 1 0-.89-1.208l.89 1.208Zm-5.714-1.208a.75.75 0 1 0-.89 1.208l.89-1.208ZM6.049.25a.75.75 0 0 0 0 1.5V.25Zm1.904 1.5a.75.75 0 1 0 0-1.5v1.5Zm1.46 13.704a4.069 4.069 0 0 1-4.824 0l-.89 1.208a5.568 5.568 0 0 0 6.604 0l-.89-1.208ZM6.05 1.75h1.904V.25H6.049v1.5Z"
      fill="#fff"
    />
  </svg>
)

export default PushIcon
