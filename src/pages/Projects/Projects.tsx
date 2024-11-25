import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h4">
        {t(`projects.heading`)}
      </Typography>
    </div>
  );
};

export default Projects;
