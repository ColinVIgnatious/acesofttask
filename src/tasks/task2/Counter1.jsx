import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { increment,decrement } from './action';

function Counter1() {
    const dispatch=useDispatch();
    const count =useSelector(state=>state.count);
  return (
    <>
    <div>
    <h3>Counter1</h3>
    <button onClick={()=>dispatch(increment())}>+</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
    </>
  )
}

export default Counter1