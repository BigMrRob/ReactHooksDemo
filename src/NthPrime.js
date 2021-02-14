import { calculatePrimes, suffixOf} from './Math'
import React from 'react'

function NthPrime({ count, increment }) {

    const prime = React.useMemo(() => calculatePrimes(count), [count])
    return (
        <div className="box">
            <h1>Prime Numbers</h1>
            <p>
                The <b>{suffixOf(count)}</b> prime number is <b>{prime}</b>
            </p>
            <button onClick={increment}>Next Number</button>
        </div>
    )
}

export default NthPrime