import React from 'react'


function Slider({ onChange, min, max }) {
    const [value, setValue] = React.useState(1)

    return (
        <>
            {value}
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => {
                    const value = Number(e.target.value)
                    onChange(value)
                    setValue(value)
                }}
                />
        </>
    )
}

function reducer (state, action) {
    console.log(action.type)
    if (action.type === "increment") {
        return {
            count: state.count + state.step,
            step: state.step
        }
    } else if (action.type === "decrement") {
        return {
            count: state.count - state.step,
            step: state.step
        }
    } else if (action.type === "reset") {
        return {
            count: 0,
            step: state.step
        }
    } else if (action.type === "updateStep") {
        return {
            count: state.count,
            step: action.step
        }
    }    
    else {
        throw new Error()
    }
}
function useReducer() {

    const [state, dispatch] = React.useReducer(
        reducer,
        {count: 0, step: 1}
    )

    
    return (
        <div className="box">
            <h4>This uses the useReducer hook with a reduce function</h4>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <br />
            <button onClick={() => dispatch({type: "reset"})}>Reset Count</button>
            <br />
            <h6>Move the slider to change the amount to increment/decrement</h6>
            <Slider 
                min={1}
                max={10}
                onChange={(value) => dispatch({
                    type: 'updateStep',
                    step: value
                })}
            />
        </div>
    )
}

export default useReducer
