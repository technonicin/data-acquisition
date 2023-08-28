import { createSlice } from "@reduxjs/toolkit";
import { UsersApi } from "src/services/UsersApi";
import { setToken } from "src/utils/constants";

const usersApi = new UsersApi();

const INIT_STATE = {
  isLoading: false,
  data: [],
  count: 0,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: INIT_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setUsersData: (state, action) => {
      console.log("actions setData", action.payload)
      state.data = action.payload.rows
      state.count = action.payload.count
    }
  }
})

export const { setLoading, setUsersData } = usersSlice.actions

export const usersState = (state) => state.users

export default usersSlice.reducer

export const fetchUsers = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await usersApi.getUsers(payload);
      const { token, staff_data } = response.data;
      dispatch(setUsersData(staff_data))
      setToken(token)
      console.log("fetchUsers", token, staff_data)
      dispatch(setLoading(false))
    }
    catch (e) {
      console.log(e)
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const deleteUser = (payload, handleDeleteConfirmClose, setIsOpenDeleteSuccess) => {
  return async (dispatch) => {
    try {
      const { id, ...rest } = payload
      dispatch(setLoading(true))
      await usersApi.deleteUsers(id);
      handleDeleteConfirmClose();
      setIsOpenDeleteSuccess(true);
      dispatch(fetchUsers(rest))
      dispatch(setLoading(false))
    }
    catch (e) {
      console.log(e)
    } finally {
      dispatch(setLoading(false))
    }
  }

}