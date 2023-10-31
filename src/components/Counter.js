import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../store';
const Counter = () => {
  const counter = useSelector(state=>state.counter.counter)   //it automatically subscribe to redux store and always provide latest value/ If we unmount this component, it unsubscribe automatically
  const showCounter = useSelector(state=>state.counter.showCounter)   //it automatically subscribe to redux store and always provide latest value/ If we unmount this component, it unsubscribe automatically
  const dispatch = useDispatch()

  const incrementHandler =()=>{
    dispatch(counterActions.increment())
  }

  const decrementHandler =()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler =()=>{
    dispatch(counterActions.toggle())
  }

  const increaseHandler =()=>{
    dispatch(counterActions.increase({amount:10}))     // if we dont use identifeer, its stored in action.payload. but when we add, its in action.payload.value
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={increaseHandler} >Increment by 10</button>
        <button disabled={counter<1} onClick={decrementHandler} >Decrement</button>
      </div>
      </>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
