import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action)=>{
            // mutating the state over here
            // This is a impure function as whatever the component we are getting we're directly mutating its state
            // Vanialla (older) Redux says=> DON'T MUTATE STATE it is prohibited
            // Earlier we used to create a copy of this state variable and we used to push 
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState, returning new state was mandatory

            // Redux Toolkit 
            // We HAVE to mutate the state
            // returning is not mandatory
            // In background redux is doing the above logic and it uses immerJS to abstract it. The immerJS find the difference between the current state
            // and the newState and returns the immutable newState (a new copy of the state.).
            // BTS: Behind the scenes
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop(); // This will remove the item from the end
        },
        // originalState = ["pizza"]
        clearCart: (state)=>{
            // this will mutate the state = []
            state.items.length = 0; // This will make your state as [], if you had tried clearing cart like state=[] this wouldn't have worked
            
            // state = originalState;
            // console.log(current(state)); // current() will come from redux toolkit. with you can see what is inside state, otherwise it shows proxy object
            // state = []
            // console.log(state);
            // state = []; This will not work because this is not how immer works. With this you are only changing the reference of the state. You are not mutating the state.
            // Since, the state is a local variable here, it will set this state with empty array but it will not modify the actual state which was passed here.
            
            // Redux Toolkit (RTK)- say's either mutate the existing state or return a new State.
            // state.items.length = 0; // originalState = {items: []}
            // While clearing the cart, you can do one more thing return {items:[]}; this new {items:[]} will be replaced inside originalState = {items:[]}
        },
    }
});

/**
 * cartSlice = { 
 *               actions: {
 *                          addItem, removeItem,...
 *                        },
 *               reducer: {
 *                          
 *                         }
 *             }
 */
export const { addItem, removeItem, clearCart } = cartSlice.actions; 
export default cartSlice.reducer;