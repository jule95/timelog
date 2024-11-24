import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import config from '../config.ts';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="absolute">
      <Toolbar sx={{ justifyContent: `space-between` }}>
        <Box sx={{ alignItems: `center`, display: `flex` }}>
          <Typography variant="h6">
            LOGO
          </Typography>
        </Box>

        <Box sx={{ display: `flex`, gap: 2 }}>
          <Button
            disableRipple
            color="inherit"
            href={config.routes.home}>
            {t(`home`)}
          </Button>
          <Button
            color="inherit"
            href={config.routes.page1}>
            {t(`page1`)}
          </Button>
        </Box>

        <Typography variant="h6">
          Company Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
