import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@configs/store';
import { decrement, increment } from '@store/Counter/reducers/counterReducer';
import { Box } from '@mui/material';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box margin={2}>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </Box>
  );
}
