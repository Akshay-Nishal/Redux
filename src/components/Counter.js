import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
  const counter = useSelector(state=>state.counter)   //it automatically subscribe to redux store and always provide latest value/ If we unmount this component, it unsubscribe automatically
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {};
  const incrementHandler =()=>{
    dispatch({type:'INCREMENT'})
  }
  const decrementHandler =()=>{
    dispatch({type:'DECREMENT'})

  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={incrementHandler} >Increment by 5</button>
        <button disabled={counter<1} onClick={decrementHandler} >Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
