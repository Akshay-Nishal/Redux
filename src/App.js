import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';


function App() {

  const showCart = useSelector(state=>state.ui.cartVisibility)
  // console.log(showCart)
  return (
    <Layout>
      { showCart===true && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
