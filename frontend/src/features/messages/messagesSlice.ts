import { createSlice } from '@reduxjs/toolkit';
import { IMessage } from '../../types';
import { createMessage, fetchMessages } from './messagesThunks.ts';
import { RootState } from '../../app/store.ts';

interface Props {
  messages: IMessage[];
  createLoading: boolean;
  fetchLoading: boolean;
}

const initialState: Props = {
  messages: [],
  createLoading: false,
  fetchLoading: false,
}

export const selectMessages = (state: RootState) => state.messages.messages;
export const selectCreateLoading = (state: RootState) => state.messages.createLoading;
export const selectFetchLoading = (state: RootState) => state.messages.fetchLoading;

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMessage.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(createMessage.fulfilled, (state) => {
        state.createLoading = false;
      })
      .addCase(createMessage.rejected, (state) => {
        state.createLoading = false;
      })
      .addCase(fetchMessages.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
        state.fetchLoading = false;
        state.messages = messages;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.fetchLoading = false;
      })
  }
});

export const messagesReducer = messagesSlice.reducer;