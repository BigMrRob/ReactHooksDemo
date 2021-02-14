import { calculateFib, suffixOf} from './Math'
import React from 'react'

function NthFib({ count, increment }) {


    const fib = React.useMemo(() => calculateFib(count), [count])
    return (
        <div className="box">
            <h1>Fibonacci Numbers</h1>
            <p>
                The <b>{suffixOf(count)}</b> number in the Fibonacci sequence is <b>{fib}</b>
            </p>
            <button onClick={increment}>Next Number</button>
        </div>
    )
}

export default NthFib
