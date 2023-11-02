import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0,
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload
            const existingItem = state.items.find(item=>item.id===newItem.id)
            // console.log(existingItem)
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    title:newItem.title,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            state.totalAmount = state.totalAmount+newItem.price
            state.totalQuantity = state.totalQuantity + 1
        },
        removeFromCart(state,action){
            const id = action.payload
            const existingItem = state.items.find(item=>item.id===id)
            state.totalQuantity = state.totalQuantity - 1
            state.totalAmount = state.totalAmount - existingItem.price
            if(existingItem.quantity===1){
                state.items = state.items.filter(item=>item.id!==id)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
            
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice