import { FC } from 'react';
import './Footer.scss';
import Typography from '@mui/material/Typography';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import youtube from '../../assets/youtube.svg';

const Footer: FC = () => (
  <div className="Footer">
    <Typography className="Footer__label">
      Time Log Inc
    </Typography>
    <div className="Footer__logos">
      <img
        alt="facebook"
        className="Footer__logos-logo"
        src={facebook} />
      <img
        alt="linkedin"
        className="Footer__logos-logo"
        src={linkedin} />
      <img
        alt="youtube"
        className="Footer__logos-logo"
        src={youtube} />
      <img
        alt="instagram"
        className="Footer__logos-logo"
        src={instagram} />
    </div>
  </div>
);

export default Footer;
