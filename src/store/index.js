import {createStore} from 'redux'

const counterReducer = (state={counter:0},action)=>{
    if(action.type==='INCREMENT'){
        return{
            counter:state.counter+5
        }
    }
    if(action.type==='DECREMENT'){
        return{
            counter:state.counter-5
        }
    }
    return{
        counter:state.counter

    }
}

const store = createStore(counterReducer)

export default store
