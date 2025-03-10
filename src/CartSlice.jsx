import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        console.log("inside addItem")
        const {name, image, cost} = action.payload
        const existingItem = state.items.find(item => item.name === name)
        if(existingItem){
            existingItem.quantity++
        }else{
            state.items.push({name,image,cost,quantity:1})
            console.log('item is added')
        }
    
    },
    removeItem: (state, action) => {
        const {name} = action.payload
        const itemToRemove = state.items.find(item => item.name === name)
        if(itemToRemove){
            state.items = state.items.filter(item=> item.name!==name)
        }
    },
    updateQuantity: (state, action) => {
        const {name,quantity} = action.payload
        const itemToUpdate = state.items.find(item => item.name === name)
        if(itemToUpdate){
            itemToUpdate.quantity = quantity
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
