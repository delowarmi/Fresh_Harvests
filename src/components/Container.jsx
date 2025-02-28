import React from 'react'

const Container = ({className,children}) => {
        return (
            <div className={ `sm:w-[375px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] mx-auto max-w${className}`}>{children}</div>
        )
      }

export default Container
