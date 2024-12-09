import Grid from '@mui/material/Grid2';
import { Button, CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import { MessageMutation } from '../../../types';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import { selectCreateLoading } from '../messagesSlice.ts';
import { useNavigate } from 'react-router-dom';
import { createMessage } from '../messagesThunks.ts';
import { toast } from 'react-toastify';

const initialState = {
  author: '',
  message: '',
}

const NewMessage = () => {
  const [form, setForm] = useState<MessageMutation>(initialState);
  const dispatch = useAppDispatch();
  const isCreateLoading = useAppSelector(selectCreateLoading);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target

    setForm(prevState => ({...prevState, [name]: value}));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(createMessage({...form}));
    toast.success('Product was successfully created');
    navigate('/');
  };

  return (
    <>
      {isCreateLoading ? <CircularProgress/> :
        <form onSubmit={onSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid>
              <TextField
                id="author"
                name="author"
                label="Author"
                value={form.author}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid>
              <TextField
                id="message"
                name="message"
                label="message"
                value={form.message}
                onChange={onChange}
                variant="standard"
              />
            </Grid>

            <Grid>
              <Button type='submit' color='primary'>Send</Button>
            </Grid>
          </Grid>
        </form>
      }
    </>
  );
};

export default NewMessage;