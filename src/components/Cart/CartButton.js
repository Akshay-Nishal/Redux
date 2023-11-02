import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const cartNumber = useSelector(state=>state.cart.totalQuantity)

  const togleCart =()=>{
    dispatch(uiActions.toggleCart())
  }
  return (
    <button onClick={togleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default CartButton;
