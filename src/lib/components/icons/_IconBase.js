import React from 'react'

export default props => {
    const computedSize = props.size || '1rem'

    const styleProp = props.style || {
        verticalAlign: 'middle'
    }

    const computedColor = props.color || props.style.color
    if (computedColor) {
        styleProp.color = computedColor
    }

    return (
        <svg
            children={props.children}
            fill='currentColor'
            preserveAspectRatio='xMidYMid meet'
            height={props.height || computedSize}
            width={props.width || computedSize}
            {...props}
            style={styleProp}
        />
    )
}

