import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartList = useSelector(state=>state.cart.items)
  // console.log(cartList)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartList.map(item=>(
          <CartItem
          key={item.id}
            item={{ 
              id:item.id,
              title: item.title, 
              quantity: item.quantity, 
              total: item.totalPrice, 
              price: item.price
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
