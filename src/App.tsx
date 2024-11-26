import './App.scss';
import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar.tsx';
import { ButtonBase, Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import avatar from './assets/avatar.png';
import { useContext } from 'react';
import AppContext from './state/app-context.ts';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer/Footer.tsx';

const App = () => {
  const location = useLocation();
  const { state, actions } = useContext(AppContext);
  const { t } = useTranslation();

  const handleClick = () => {
    actions.setNewEntry(!state.newEntry);
  };

  return (
    <div className="App">
      <Navbar />
      <Toolbar className="App__toolbar" />
      <Container className="App__container">
        <Outlet />
        <div
          className="App__avatar"
          style={{ backgroundImage: `url(${avatar})` }}>
          {location.pathname === `/myTimeLog` && (
            <ButtonBase
              disableRipple
              className="App__avatar-button"
              onClick={handleClick}>
              {t(`app.newEntry`)}
            </ButtonBase>
          )}
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
