import { createSlice } from "@reduxjs/toolkit";
import { CommonApi } from "src/services/CommonApi";

const INIT_STATE = {
  isLoading: false,
}
const commonSlice = createSlice({
  name: 'common',
  initialState: INIT_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = commonSlice.actions;

export const commonState = (state) => state.common;

export default commonSlice.reducer

const commonApi = new CommonApi();

export const uploadFile = (payload) => {
  return async (dispatch) => {
    try {
      let data = new FormData();
      data.append('file', payload);
      dispatch(setLoading(true))
      const response = await commonApi.uploadFiles(data, payload.type);

    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setLoading(false))
    }
  }
}