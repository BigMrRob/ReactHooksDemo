import React from 'react'

function useHover() {

    const [hovering, setHovering] = React.useState(false)

    const mouseOver = () => setHovering(true)
    const mouseOut = () => setHovering(false)

    const attributes = {
        onMouseOver: mouseOver,
        onMouseOut: mouseOut
    }
    return (
        [hovering, attributes]
    )
}

export default useHover
