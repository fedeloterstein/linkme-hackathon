import * as React from "react"
import { SVGProps } from "react"

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.157 12.409c.253-.412.399-.894.399-1.409s-.146-.998-.4-1.409m0 2.818a2.787 2.787 0 0 1-2.378 1.318C2.244 13.727 1 12.507 1 11c0-1.506 1.244-2.727 2.778-2.727 1.009 0 1.892.528 2.379 1.318m0 2.818 6.353 4.455M6.157 9.591l6.353-4.455m0 0a2.787 2.787 0 0 0 2.379 1.319c1.534 0 2.778-1.221 2.778-2.728C17.667 2.221 16.423 1 14.889 1S12.11 2.221 12.11 3.727c0 .516.146.998.399 1.409Zm0 11.728a2.677 2.677 0 0 0-.399 1.409c0 1.506 1.244 2.727 2.778 2.727s2.778-1.221 2.778-2.727c0-1.506-1.244-2.727-2.778-2.727-1.01 0-1.893.528-2.38 1.318Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ShareIcon
