import {createSlice} from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action) =>{
            state.items.push(action.payload)
            console.log("state is",state)
            console.log("action is",action)
        },
        clearCart:(state,actions) =>{
            state.items=[];
        }
    }
})

export const {addItem, clearCart} =cartSlice.actions;
export default cartSlice.reducer
