import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import config from '../../config.ts';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';
import { ButtonBase } from '@mui/material';

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
          <ButtonBase
            disableRipple
            className="Navbar__toolbar-button"
            href={config.routes.myTimeLog}>
            {t(`navbar.myTimeLog`)}
          </ButtonBase>
          <ButtonBase
            disableRipple
            className="Navbar__toolbar-button"
            href={config.routes.employees}>
            {t(`navbar.employees`)}
          </ButtonBase>
          <ButtonBase
            disableRipple
            className="Navbar__toolbar-button"
            href={config.routes.projects}>
            {t(`navbar.projects`)}
          </ButtonBase>
          <ButtonBase
            disableRipple
            className="Navbar__toolbar-button Navbar__toolbar-button--home"
            href={config.routes.home}>
            {t(`navbar.home`)}
          </ButtonBase>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
