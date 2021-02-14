import logo from './logo.svg';
import './App.css';
import Hover from './Hover'
import Box from './Box'
import User from './User'
import Demo from './useTimeout'
import Wait from './useWait'
import useWindowDimensions from './useWindowDimensions'
import Fetch from './useFetch'
import UseReducer from './useReducer'
import OtherFetch from './anotherUseFetch'
import Counter from './Counter'
import Register from './Register'
import CounterGame from './CounterGame'
import Context from './Context'
import Algorithms from './Algorithms'
import MemeGenerator from './MemeGenerator';


function App() {


  const [ width, height ] = useWindowDimensions()
  return (
    <div className="App">
      <h1>This is a complete demonstration of the available React hooks</h1>
      <div className="box">
        
        <h3>These both use the same implementation of a useHover custom hook</h3>
        <Box />
        <br /><br />
        <User />

      </div>
      <Demo />
      <Wait 
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={
          <div className="box">
            <h3>This is similar to above but implements a loading component</h3>
            <p>This text should appear after 3 seconds.</p>
          </div>}
      />
      
      <div className="box">
        <h3>This is a custom useWindowDimensions hook</h3>
        <h2>width: {width}</h2>
        <h2>height: {height}</h2>
        <p>Resize the window.</p>
      </div>
      
      <Fetch />
      <UseReducer />
      <OtherFetch />
      <Counter />
      <Register />
      <CounterGame />
      <Context />
      <Algorithms />
      <h1>A cat generator is implemented below using a live API</h1>
      <MemeGenerator />
    </div>
  );
}

export default App;
