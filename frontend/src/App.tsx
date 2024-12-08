import NavBar from './components/UI/NavBar/NavBar.tsx';
import {Container, CssBaseline } from '@mui/material';

const App = () => {

  return (
    <>
      <CssBaseline />
      <header>
        <NavBar />
      </header>
      <main>
        <Container maxWidth='xl'>
          <h1>Hello World</h1>
        </Container>
      </main>
    </>
  )
};

export default App
