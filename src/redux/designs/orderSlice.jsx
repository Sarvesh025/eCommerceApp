import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: {
      image :'',
      desc : '',
      price:'',
      id: ''
    }
  }

  const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {
        setOrder : (state, action)=>{
          state.value = action.payload;
        },
        cancelOrder : (state, action)=>{
          state.value = action.payload;
        }
    }
  })

  export const { setOrder, cancelOrder } = orderSlice.actions;
  export default orderSlice.reducer