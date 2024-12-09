import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { IMessage, MessageMutation } from '../../types';

export const fetchMessages = createAsyncThunk<IMessage[], void>(
  'messages/fetchMessages',
  async () => {
    const response = await axiosApi.get<IMessage[]>('/messages');
    return response.data || [];
  }
);

export const createMessage = createAsyncThunk<void, MessageMutation>(
  'messages/createMessage',
  async (message) => {
    await axiosApi.post('/messages', {...message});
  }
);