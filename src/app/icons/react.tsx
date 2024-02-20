import React, { forwardRef, memo } from 'react'
import { IIconProps } from './interface'

const ReactLogo = memo(forwardRef<SVGSVGElement | null, IIconProps
  >(({
    style
  }, ref) => {
  return (
    <svg
      className='icon'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      style={style} ref={ref}
    >
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}))

export default ReactLogo