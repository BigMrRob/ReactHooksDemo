import React from 'react'

function CounterGame() {

    const [count, setCount] = React.useState(0)
    const [time, setTime] = React.useState(10)

    const id = React.useRef(null)
    
    const clear = () => window.clearInterval(id.current)
    React.useEffect(() => {
        
        id.current = window.setInterval(() => {
            setTime((time) => time - 1)
        }, 1000)

        return clear
        
    }, [time])

    React.useEffect(() => {
        if (time === 0) {
            clear()
        }
    }, [time])

    const resetGame = () => {
        setCount(0)
        setTime(10)
    }

    const incrementCount = () => setCount(count + 1)

    
    return (
        <div className="box">
            <h3>A counter game using useRef to persist count to avoid re-render. Click as many times as possible before time is up</h3>
            <h2>Time left: {time} seconds</h2>
            <h2>Count: {count}</h2>
            <button onClick={incrementCount} disabled={time <= 0 ? true : false}>Click me!</button>
            {time === 0 ? <h3>Final Score: {count}</h3> : <h3>Keep Clicking!</h3>}
            <button onClick={resetGame} disabled={time > 0 ? true: false}>Play Again?</button>
        </div>
    )
}

export default CounterGame
