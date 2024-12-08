import './Avatar.scss';
import avatar from '../../assets/avatar.png';
import { FC, useContext } from 'react';
import AppContext from '../../state/app-context.ts';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Avatar: FC = () => {
  const { t } = useTranslation();
  const { actions } = useContext(AppContext);
  const location = useLocation();

  const handleClick = () => {
    actions.toggleNewEntry();
  };

  return (
    <div
      className="Avatar"
      style={{ backgroundImage: `url(${avatar})` }}>
      <Button
        className="Avatar__button"
        visible={location.pathname === `/myTimeLog`}
        onClick={handleClick}>
        {t(`app.newEntry`)}
      </Button>
    </div>
  );
};

export default Avatar;
