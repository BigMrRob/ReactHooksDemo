import React from "react";
import ReactDOM from "react-dom";


/*
  Instructions:
    Implement the `useFetch` function. 
*/

function useFetch (url) {

    const [loading, setLoading] = React.useState(true)
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch((err) => {
                console.warn(err)
                setError(err)
            })
    }, [url]
    )
  return [
    loading, 
    data,
    error
  ]
}

const postIds = [1,2,3,4,5,6,7,8]

export default function Fetch() {
  const [index, setIndex] = React.useState(0)

  const [loading, data, error ]= useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  )

  

  const incrementIndex = () => {
    setIndex((i) => 
      i === postIds.length - 1
        ? i
        : i + 1
    )
  }

  if (loading === true) {
    return <p>Loading</p>
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </React.Fragment>
    )
  }

  return (
    <div className="box">
        <h3>This uses a useFetch custom hook</h3>
      <h5>{data.title}</h5>
      <p>{data.body}</p>
      {index === postIds.length - 1 
        ? <p>No more posts</p>
        : <button onClick={incrementIndex}>
            Next Post
          </button>}
    </div>
  );
}
