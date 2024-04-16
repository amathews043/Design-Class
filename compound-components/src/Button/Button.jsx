import React from 'react'


const Button = ({children, className, size, variant, ...rest}) => {
    let sizeClass
    if (size === "sm"){
        sizeClass = "Button-small"
    } else { sizeClass = 'Button-large'

    console.log(rest)

    }
    return (
        <button {...rest} className={`${sizeClass} ${className} `}>
            {children}
        </button>
    )
}

export default Button 