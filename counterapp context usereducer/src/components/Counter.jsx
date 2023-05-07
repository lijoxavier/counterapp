import React, { useContext, useReducer } from 'react'
import { CounterContext } from '../context/CounterContext'


const Counter = () => {
    const { countVal,text, onIncrement, onDecrement, onIncrementBy ,onDecrementBy,toggleText } = useContext(CounterContext)
    console.log(countVal);
    return (
        <div className='counter-container'>
            <h3>{countVal}</h3>
            <h3>{text}</h3>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
            <button onClick={() => onIncrementBy(10)}>on Increment By 10</button>
            <button onClick={() => { onDecrementBy(10) }}>on Decrement By 10</button>
            <button onClick={toggleText}>Change Text</button>
        </div>
    )
}

export default Counter