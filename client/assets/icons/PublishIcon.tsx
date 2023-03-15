import * as React from "react"
import { SVGProps } from "react"

const PublishIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.723 9.862a1.477 1.477 0 1 1-2.954 0 1.477 1.477 0 0 1 2.954 0ZM10.415 9.862a1.477 1.477 0 1 1-2.953 0 1.477 1.477 0 0 1 2.953 0Z"
      fill="#fff"
    />
    <path
      d="M8.385 15.77c.92 1.655 2.643 2.768 4.615 2.768 1.972 0 3.694-1.113 4.615-2.769M25 13c0 6.627-5.373 12-12 12S1 19.627 1 13 6.373 1 13 1s12 5.373 12 12Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)

export default PublishIcon
