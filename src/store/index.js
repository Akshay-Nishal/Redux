import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState={
    counter:0,
    showCounter:true
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        increase(state,action){
            console.log(action)
            state.counter=state.counter+action.payload.amount
        },
        decrement(state){
            state.counter--;
        },
        toggle(state){
            state.showCounter=!state.showCounter
        },
    }
})

// const counterReducer = (state=initialState,action)=>{
//     if(action.type==='INCREMENT'){
//         return{
//             counter:state.counter+1,
//             showCounter:true
//         }
//     }
//     if(action.type==='DECREMENT'){
//         return{
//             counter:state.counter-1,
//             showCounter:true
//         }
//     }
//     if(action.type==='TOGGLE'){
//         console.log("Here")
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//     }
//     return{
//         counter:state.counter,
//         showCounter:true

//     }
// }


const store = configureStore({      //it  helps to merge multople slice reducer 
    reducer:counterSlice.reducer
    // reducer:{counter:counterSlice.reducer,}    by this we can merge multiple reducer
})

export const counterActions = counterSlice.actions    //it autogenerates actions for us

export default store
