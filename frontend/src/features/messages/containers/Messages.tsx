import Grid from '@mui/material/Grid2';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Messages = () => {
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
      </Grid>
    </>
  );
};

export default Messages;