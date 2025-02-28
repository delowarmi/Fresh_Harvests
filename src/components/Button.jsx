import React from 'react'

const Button = ({className,btnText}) => {
        return (
              <button className={` text-[18px] ${className}`}>{btnText}</button>
        )
      }

export default Button
