import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds. 
*/

function useWait (delay) {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setReady(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay]
    )
    return ready

    
}

export default function Wait({ delay = 1000, placeholder, ui }) {
  const show = useWait(delay)

  return show === true
    ? ui
    : placeholder
}

