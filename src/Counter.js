import React from 'react'



function Counter() {
    const [count, setCount] = React.useState(0)
    const id = React.useRef(null)

    const clear = () => {
        window.clearInterval(id.current)
    }
    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setCount((c) => c + 1)
        }, 1000)

        return clear
    }, [])


    return (
        <div className="box">
            <h3>Count that implements useRef to persist the timer id</h3>
            <br></br>
            <h1>Count: {count}</h1>
            <br />
            <button onClick={clear}>Stop the counter</button>
            
        </div>
    )
}

export default Counter
