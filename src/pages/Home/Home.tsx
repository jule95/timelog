import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h4">
        {t(`home.heading`)}
      </Typography>
    </div>
  )
}

export default Home;
