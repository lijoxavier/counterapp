import React, { useReducer } from 'react'
import { ACTIONS, CounterReducer } from './CounterReducer'



const Counter = () => {
    const [state, dispatch] = useReducer(CounterReducer, {
        count: 0
    })

    // replaced these functions into one place ie, in CounterReducer
    // const onIncrement = () => {
    //     const countNew = state.count >= 0 ? state.count + 1 : state.count;

    // };
    // const onDecrement = () => {
    //     const countNew = state.count > 0 ? state.count - 1 : state.count;

    // };
    
    return (
        <div className="counter-container">
            <h3>{state.count}</h3>
            <button onClick={() => { dispatch({ type: ACTIONS.DECREMENT }) }}>-</button>
            <button onClick={() => { dispatch({ type: ACTIONS.INCREMENT }) }}>+</button>
            <button onClick={() => { dispatch({ type: ACTIONS.INCREMENTBY, payload: 10 }) }}>Increment By 10</button>
            <button onClick={() => { dispatch({ type: ACTIONS.DECREMENTBY, payload: 10 }) }}>Decrement BY 10 </button>
        </div>
    )
}

export default Counter