import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, {payload}) => payload,
  },
});

export const {actions, reducer: userReducer} = userSlice;
