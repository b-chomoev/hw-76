import Grid from '@mui/material/Grid2';
import { Typography, Button, CircularProgress, CardHeader, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import { selectFetchLoading, selectMessages } from '../messagesSlice.ts';
import { useEffect } from 'react';
import { fetchMessages } from '../messagesThunks.ts';
import dayjs from 'dayjs';

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const isFetchLoading = useAppSelector(selectFetchLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <Grid container direction='column' spacing={2}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid>
            <Typography variant="h4">Messages</Typography>
          </Grid>

          <Grid>
            <Button color="primary" component={Link} to="new-message">
              Add new message
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' spacing={1}>
          {isFetchLoading ? <CircularProgress/> :
            <>
              {messages.length === 0 && !isFetchLoading ? <Typography variant={'h6'}>No Messages yet</Typography> :
                <>
                  {messages.map((message) => (
                    <Grid direction='column' size={{xs: 12, sm: 12, md: 6, lg: 12}} key={message.id}>
                      <Card>
                        <CardHeader title={message.author}/>
                        <CardContent>
                          <strong>Message: </strong>{message.message}
                        </CardContent>
                        <CardContent>
                          <strong>Date: </strong>{dayjs(message.datetime).format('DD.MM.YYYY HH:mm')}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </>
              }
            </>
          }
        </Grid>
      </Grid>
    </>
  );
};

export default Messages;