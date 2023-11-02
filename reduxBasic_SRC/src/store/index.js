// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState={
    counter:0,
    showCounter:true
}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        increase(state,action){
            // console.log(action)
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

const initalAuthState={
    isAuthenticated: false
}

const authSlice = createSlice({
    name:'authentication',
    initialState:initalAuthState,
    reducers:{
        login(state){
            state.isAuthenticated=true
        },
        logout(state){
            state.isAuthenticated=false
        }
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
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
    // reducer:{counter:counterSlice.reducer,}    by this we can merge multiple reducer
})

export const counterActions = counterSlice.actions    //it autogenerates actions for usuth
export const authActions = authSlice.actions

export default store
