import NavBar from './components/UI/NavBar/NavBar.tsx';
import {Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NewMessage from './features/messages/containers/NewMessage.tsx';
import Message from './features/messages/containers/Messages.tsx';

const App = () => {

  return (
    <>
      <CssBaseline />
      <header>
        <NavBar />
      </header>
      <main>
        <Container maxWidth='xl'>
          <Routes>
            <Route path='/' element={<Message />}/>
            <Route path='/new-message' element={<NewMessage />}/>
            <Route path='*' element={<h1>Not Found</h1>}/>
          </Routes>
        </Container>
      </main>
    </>
  )
};

export default App
