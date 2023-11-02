import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
// import axios from 'axios'; 
// import { useState } from 'react';
import { uiActions } from './store/ui-slice';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';

let isInitial = true;


function App() {

  const dispatch = useDispatch()
  const showCart = useSelector(state=>state.ui.cartVisibility)
  const cart = useSelector(state=>state.cart)
  const notificationState = useSelector(state=>state.ui.notification)
  useEffect(()=>{

    const sendCartData = async ()=>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'Sending...',
        message:'Sending cart data!'
      }))
      const responce = await fetch(
        'https://react-ecom-f4305-default-rtdb.asia-southeast1.firebasedatabase.app/reduxCart.json',
        {
          method:'PUT',
          body:JSON.stringify(cart)
        }
      )
      if(!responce.ok){
        throw new Error("Sending Data Failed!!!")
      }

      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!',
        message:'Sent cart data successfully!'
      }))
    }

    if(isInitial===true){
      isInitial = false
      return
    }


    sendCartData().catch(err=>{
      dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!',
        message:'Sending cart data failed!'
      }))
    })
  },[cart,dispatch])
  // console.log(showCart)


  return (
    <Fragment>
      {notificationState && (
        <Notification 
        status={notificationState.status}
        title={notificationState.title}
        message={notificationState.message}
        >
        </Notification>
      )}
    <Layout>
      { showCart===true && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
