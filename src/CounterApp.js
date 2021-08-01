import React, {useState} from 'react';
import PropTypes from "prop-types";

const CounterApp = ({value = 10}) => {
  const [counter, setCounter] = useState(value)


  const handleApp = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleApp} >+1</button>
      <button onClick={()=>setCounter(value)} >Reset</button>
      <button onClick={()=>setCounter(counter-1)} >-1</button>
    </>

  )
}

CounterApp.propTypes =  {
  value: PropTypes.number
}

export default CounterApp; 