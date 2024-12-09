import { useTranslation } from 'react-i18next';
import './Home.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="page-heading">
        {t(`home.heading`)}
      </h1>
    </div>
  );
};

export default Home;
