import { useTranslation } from 'react-i18next';
import './Projects.scss';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="Projects">
      <h1 className="page-heading">{t(`projects.heading`)}</h1>
    </div>
  );
};

export default Projects;
