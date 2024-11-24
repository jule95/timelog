import './App.scss';
import { Outlet } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar.tsx';
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Toolbar />
    <Container>
      <Outlet />
    </Container>
  </div>
);

export default App;
