import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { MessageMutation } from '../../types';

export const createMessage = createAsyncThunk<void, MessageMutation>(
  'messages/createMessage',
  async (message) => {
    await axiosApi.post('/messages', {...message});
  }
);