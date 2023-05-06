import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { loggedIn: false, userId: null, userType: "" },
  reducers: {
    loginUser: (state, action) => {
      state.loggedIn = true;
      state.userId = action.payload.userId;
      state.userType=action.payload.userType;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.userId = null;
      state.userType = '';
    },
  },
});



export const { loginUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
