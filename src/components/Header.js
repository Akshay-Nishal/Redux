import { authActions } from '../store';
import classes from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux'




const Header = () => {
  const auth = useSelector(state=>state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const logouthandler =()=>{
    dispatch(authActions.logout())
  }

  console.log(auth)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logouthandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
