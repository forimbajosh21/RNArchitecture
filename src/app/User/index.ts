import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  name: string;
}

const initialState: InitialState = {
  name: '',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default slice.reducer;
