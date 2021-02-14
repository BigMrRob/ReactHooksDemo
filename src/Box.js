import React from 'react'
import useHover from './useHover'

function Box() {

const [hovering, attributes] = useHover()

    return (
        <>
           {hovering === true
            ? <div>Hello World!</div>
            : <div>Goodbye Cruel World!</div>}


            <button {...attributes}>Hover over button to see the change</button>
        </>
    )
}

export default Box
