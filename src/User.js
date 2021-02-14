import React from 'react'
import useHover from './useHover'


export default function User(props) {

    const [hovering, attributes] = useHover()
    return (
        <div>
            {hovering === true
            ? <div>Hello Other Test</div>
            : <div>Goodbye other test </div>}

            <button {...attributes} >Other test</button> 
        </div>
    )
}