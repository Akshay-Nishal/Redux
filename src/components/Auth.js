import { useRef } from 'react';
import classes from './Auth.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { authActions } from '../store';


const Auth = () => {
  const dispatch = useDispatch()
  const emailRef = useRef()
  const passRef = useRef()
  const loginsubmit =(e)=>{
    e.preventDefault()
    const enteredEmail = emailRef.current.value
    const enteredPass = passRef.current.value
    if(enteredEmail && enteredPass){
      console.log("Login Success!!!")
      dispatch(authActions.login())
    }

  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={emailRef} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passRef} type='password' id='password' />
          </div>
          <button onClick={loginsubmit}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
