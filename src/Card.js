import React from 'react'


function Card() {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [searchCount, setSearchCount] = React.useState(0)
    const [input, setInput] = React.useState('')
    React.useEffect(() => {

        fetch(`https://api.thecatapi.com/v1/images/search?limit=${searchCount}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
                setLoading(false)
                
            })
    }, [searchCount])



    
    return (
        <div>
        <button onClick={(e) => {
            e.preventDefault()
            setSearchCount((c) => c + 1) 
            }
            }>More Random Cats</button>
            <div></div>
            <button onClick={(e) => {
            e.preventDefault()
            setSearchCount((c) => c - 1) 
            }
            }>Less Random Cats</button>
            <div></div>
            <button onClick={(e) => {
            e.preventDefault()
            setSearchCount(0) 
            }
            }>No Cats :(</button>

        <ul className="grid">
            
           
            {searchCount === 0 ? <h1>Add a cat</h1> : data.map(element => (
                <div key={element.id} className="card bg-light">
                    <img src={element.url} style={{width: "300px"}}></img>
                </div>
            )
            )}


        </ul>
        </div>
            
            
        
    )
}

export default Card
