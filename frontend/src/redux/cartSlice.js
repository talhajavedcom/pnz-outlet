// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // If the item is already in the cart, increase its quantity
        state.carts[itemIndex].qnty += 1;
      } else {
        // If the item is not in the cart, add it with quantity 1
        let newEntry = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, newEntry];
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0 && state.carts[itemIndex].qnty > 1) {
        // If the item is in the cart and its quantity is more than 1, decrease the quantity
        state.carts[itemIndex].qnty -= 1;
      } else {
        // If the item is in the cart and its quantity is 1 or less, remove it from the cart
        state.carts = state.carts.filter(item => item.id !== action.payload.id);
      }
    },

    incQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        // If the item is in the cart, increase its quantity
        state.carts[itemIndex].qnty += 1;
      }
    },

    decQuantity: (state, action) => {
      const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0 && state.carts[itemIndex].qnty > 1) {
        // If the item is in the cart and its quantity is more than 1, decrease the quantity
        state.carts[itemIndex].qnty -= 1;
      } else {
        // If the item is in the cart and its quantity is 1 or less, remove it from the cart
        state.carts = state.carts.filter(item => item.id !== action.payload.id);
      }
    },

    emptyCart: (state) => {
      // Clear the entire cart
      state.carts = [];
    },
  },
});

export const { addtoCart, removeFromCart, incQuantity, decQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;


















// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     carts : []
// }

// const cartSlice = createSlice({

//     name: 'shoppingCart',
//     initialState,
//     reducers:{
    
//         // adding / increasing quantity
//         addtoCart:(state,action)=>{
          
//             const itemIndex = state.carts.findIndex(item=>item.id === action.payload.id)

//             if(itemIndex>0){
//                 state.carts[itemIndex].qnty +=1                
//             }else{
//                 let newEntry = {...action.payload, qnty: 1}
//                 state.carts = [...state.carts, newEntry]
//             }
            
//         },

//         // removing one by one item from cart
//         removeFromCart:(state,action)=>{
//             // state.carts = [...state.carts, ...action.payload]

//             let itemDecQty = state.carts.findIndex(item=>item.id === action.payload)

//             if(state.carts[itemDecQty].qnty>1){
//                 state.carts[itemDecQty].qnty -=1 
//             }

//         },

//         emptyCart:(state,action)=>{
//             state.carts = []
//         }
//     }
//     }
// )

// export const {addtoCart, removeFromCart, emptyCart} = cartSlice.actions
// export default cartSlice.reducer



