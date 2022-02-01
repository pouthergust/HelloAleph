import React from 'react'

export default function ImgProfile({ size = 200 }: { size?: number }) {
  return (
    <img 
      src="https://github.com/pouthergust.png" 
      title="Gabriel Henrique" 
      className="imgProfile"
      height={size} 
    />
  )
}
