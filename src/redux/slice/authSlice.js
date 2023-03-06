import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email:null,
    userName:null,
    userID:null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_ACTIVR_USER: (state, action) => {
        console.log(action.payload)
    }
  }
});

export const {SET_ACTIVR_USER} = authSlice.actions

export const selectIsLoggedIn = (state) =>state.auth.isLoggedIn;
export const selectEmail = (state) =>state.auth.email;
export const selectUserName= (state) =>state.auth.userName;
export const selectUserID = (state) =>state.auth.userID;
export default authSlice.reducer