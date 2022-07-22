import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from './counterSlice.js';
import { useState } from 'react';
function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) ;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <>
      <section>
        <p>{counter}</p>
        <div>
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <button onClick={() => dispatch(reset())}>reset</button>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button>
          <button onClick={resetAll}>Reset All</button>
        </div>
      </section>
    </>
  );
}

export default Counter;
