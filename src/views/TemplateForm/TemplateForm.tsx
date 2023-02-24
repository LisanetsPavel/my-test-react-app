import React from 'react';
import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@configs/store';
import { changeFormTemplate } from '@store/TemplateForm/reducers/templateFormReducer';

export default function TemplateForm() {
  const value = useSelector((state: RootState) => state.templateForm.value);
  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(changeFormTemplate(event.target.value));
  };

  return (
    <Box margin={2}>
      <TextField value={value} onChange={onChange} />
    </Box>
  );
}
