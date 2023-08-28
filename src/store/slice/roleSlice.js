import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  isLoading: true,
  data: [],
}

export const roleSlice = createSlice({
  name: 'role',
  initialState: INIT_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = roleSlice.actions;

export const roleState = (state) => state.role;

export default roleSlice.reducer;

