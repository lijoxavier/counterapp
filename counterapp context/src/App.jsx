import { useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CounterContext} from './context/CounterContext';

function App() {
 const {count,setCount}=useContext(CounterContext)
  const onIncrement = () => {
    const countNew = count >= 0 ? count + 1 : count;
    setCount(countNew);
  };
  const onDecrement = () => {
    const countNew = count > 0 ? count - 1 : count;
    setCount(countNew);
  };

  return (
    <>
      <div className="counter-container">
        <h3>{count}</h3>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </>
  );
}

export default App;
