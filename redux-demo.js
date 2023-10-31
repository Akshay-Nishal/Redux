const redux = require('redux');


const counterReducer =(state = {counter:0},action)=>{
    if(action.type==='increment'){
        console.log('Action : ',action.type)
        return{
            counter:state.counter+1
        }
    }
    if(action.type==='decrement'){
        console.log('Action : ',action.type)
        return{
            counter:state.counter-1
        }
    }
    return{
        counter:state.counter
    }
    
}

// console.log(store.getState());
const store = redux.createStore(counterReducer);   // creating a store here    in("counterReducer")  we are not executing but just pointing at reducer 

const counterSubs =()=>{                 // this is a function/component which is subscriber to the redux store // this function will executed when state change is there in store
    const latestState = store.getState()
    console.log("Here => ",latestState)
}

store.subscribe(counterSubs)    //code to subscrive a function or component to a store   here too we are not executing counterSubs function. we are just pointing at it

store.dispatch({type:'increment'})   // 
store.dispatch({type:'increment'})   // 
store.dispatch({type:'increment'})   // 
store.dispatch({type:'increment'})   // 
store.dispatch({type:'increment'})   // 
store.dispatch({type:'decrement'})   // 