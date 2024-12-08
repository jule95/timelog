import './App.scss';
import { Outlet } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer.tsx';
import Avatar from './components/Avatar/Avatar.tsx';
import { PrimeReactProvider } from 'primereact/api';
import Navbar from './components/Navbar/Navbar.tsx';

const App = () => (
  <div className="App">
    <PrimeReactProvider>
      <Navbar />
      <div className="App__content">
        <Outlet />
        <Avatar />
      </div>
      <Footer />
    </PrimeReactProvider>
  </div>
);
export default App;
