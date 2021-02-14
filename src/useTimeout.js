import React, { useState, useEffect} from 'react'

const useTimeout = (ms = 0) => {
    const [ready, setReady] = useState(false)

    useEffect(
        () => {
            let timer = setTimeout(() => {
                setReady(true)
            }, ms)

            return () => {
                clearTimeout(timer)
            }
        }, [ms]
    )
    return ready
}



export default function Demo() {
    const ready = useTimeout(2000)

    return (
        <div className="box">
            <h3>This is useTimeout custom Hook</h3>
            Ready: {ready ? "yes" : "no"}
        </div>
    )
}