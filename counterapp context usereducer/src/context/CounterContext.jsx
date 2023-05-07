import React, { createContext, useReducer, useState } from 'react'
import { ACTIONS, CounterReducer, initialState } from '../components/CounterReducer'


export const CounterContext=createContext()
export const CounterProvider = ({children}) => {
    const [state, dispatch] = useReducer(CounterReducer,initialState)

    const value={
        countVal:state.count,
        text:state.text,
        onIncrement:()=>{
            dispatch({type:ACTIONS.INCREMENT})
        },
        onDecrement:()=>{
            dispatch({type:ACTIONS.DECREMENT})
        },
        onIncrementBy:(val)=>{
            dispatch({type:ACTIONS.INCREMENTBY,payload:{incrVal:val}})
        },
        onDecrementBy:(val)=>{
            dispatch({type:ACTIONS.DECREMENTBY,payload:{decrVal:val}})
        },
        toggleText:()=>{
            dispatch({type:ACTIONS.TOGGLETEXT})
        }
    }
    // console.log(value);
    
  return (
    <CounterContext.Provider value={value}>
        {children}
    </CounterContext.Provider>
  )
}

