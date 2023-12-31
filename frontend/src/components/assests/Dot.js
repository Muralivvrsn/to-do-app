import React from 'react'

const Dot = ({color}) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <g clip-path="url(#clip0_1543_4)">
    <path d="M3.99999 7.19999C2.23263 7.19999 0.799988 5.76735 0.799988 3.99999C0.799988 2.23263 2.23263 0.799988 3.99999 0.799988C5.76735 0.799988 7.19999 2.23263 7.19999 3.99999C7.19999 5.76735 5.76735 7.19999 3.99999 7.19999Z" fill={color}/>
  </g>
  <defs>
    <clipPath id="clip0_1543_4">
      <rect width="8" height="8" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
  )
}

export default Dot
