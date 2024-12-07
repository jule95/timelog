import './App.scss';
import { Outlet } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar.tsx';
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Footer from './components/Footer/Footer.tsx';
import Avatar from './components/Avatar/Avatar.tsx';

const App = () => (
  <div className="App">
    <Navbar />
    <Toolbar className="App__toolbar" />
    <Container className="App__container">
      <Outlet />
      <Avatar />
      <Footer />
    </Container>
  </div>
);

export default App;
