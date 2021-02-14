import React from 'react'
import NthFib from './NthFib'
import NthPrime from './NthPrime'
function Algorithms() {

    const [fibCount, setFibCount] = React.useState(1)
    const [primeCount, setPrimeCount] = React.useState(1)

    const handleReset = () => {
        setFibCount(1)
        setPrimeCount(1)
    }

    const add10 = () => {

        setFibCount((c) => c + 10)
        setPrimeCount((c) => c + 10)
    }

    


    return (
        <div className="box">
            <h3>This uses a useMemo hook to prevent unncessary componenent re-renders</h3>
            <button onClick={add10}>Add 10 to Values</button>
            <br></br>
            <NthFib 
                count={fibCount}
                increment={() => setFibCount((c) => c + 1)} 
            />
            <NthPrime
                count={primeCount}
                increment={() => setPrimeCount((c) => c + 1)} 
            />
            <button onClick={handleReset}>Reset Values</button>
        </div>
    )
}

export default Algorithms
