import React from 'react'
import { SVGIconProps } from './svg.types'

/**
 * Original Icon from Freepik, set: Cinco de Mayo.
 * And edited por yo merengues.
 * www.flaticon.com
 */
const PosMeColoreo = ({ size = '24px', ...otherProps }: SVGIconProps) => (
  <svg width={size} height={size} viewBox="0 0 15 15" fill="none" {...otherProps}>
  {/* Define the linear gradient */}
  <defs>
    <linearGradient id="avocadoGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="red" />
      <stop offset="100%" stopColor="blue" />
    </linearGradient>
  </defs>
  {/* Use the linear gradient for the stroke */}
  <path d="M10 5.5L9.93198 5.43198C9.33524 4.83524 8.52589 4.5 7.68198 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5H7.68198C8.52589 10.5 9.33524 10.1648 9.93198 9.56802L10 9.5M1.5 10.5V4.5L7.5 1L13.5 4.5V10.5L7.5 14L1.5 10.5Z" stroke="url(#avocadoGradient)" />
</svg>
)

export default PosMeColoreo
