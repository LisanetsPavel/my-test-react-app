import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: '',
};

export const templateFormSlice = createSlice({
  name: 'templateForm',
  initialState,
  reducers: {
    changeFormTemplate: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFormTemplate } = templateFormSlice.actions;

export default templateFormSlice.reducer;
