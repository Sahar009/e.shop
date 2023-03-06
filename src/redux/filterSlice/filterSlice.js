import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    filteredProducts:[]
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
        console.log(action.payload)
        const { products, search}= action.payload
        const tempProducts = products.filter((product)=>product.name.toLowerCase().indcludes(search.toLowerCase()))
        state.filteredProducts = tempProducts;
    }
  }
});

export const {FILTER_BY_SEARCH} = filterSlice.actions
export const selectFilteredProducts =(state) => state.filter.filteredProducts
export default filterSlice.reducer