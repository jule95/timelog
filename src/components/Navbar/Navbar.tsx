import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import config from '../../config.ts';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <AppBar
      className="Navbar"
      elevation={0}>
      <Toolbar className="Navbar__toolbar">
        <Box>
          <Typography className="Navbar__toolbar-title">
            {t(`navbar.timeLog`)}
          </Typography>
        </Box>

        <Box>
          <Button
            className="Navbar__toolbar-button"
            href={config.routes.myTimeLog}>
            {t(`navbar.myTimeLog`)}
          </Button>
          <Button
            className="Navbar__toolbar-button"
            href={config.routes.employees}>
            {t(`navbar.employees`)}
          </Button>
          <Button
            className="Navbar__toolbar-button"
            href={config.routes.projects}>
            {t(`navbar.projects`)}
          </Button>
          <Button
            className="Navbar__toolbar-button Navbar__toolbar-button--home"
            href={config.routes.home}>
            {t(`navbar.home`)}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
