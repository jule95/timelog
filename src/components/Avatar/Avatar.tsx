import './Avatar.scss';
import avatar from '../../assets/avatar.png';
import { FC, useContext } from 'react';
import AppContext from '../../state/app-context.ts';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';

const Avatar: FC = () => {
  const { t } = useTranslation();
  const { actions } = useContext(AppContext);

  const handleClick = () => {
    actions.toggleNewEntry();
  };

  return (
    <div
      className="Avatar"
      style={{ backgroundImage: `url(${avatar})` }}>
      {location.pathname && (
        <Button
          className="Avatar__button"
          onClick={handleClick}>
          {t(`app.newEntry`)}
        </Button>
      )}
    </div>
  );
};

export default Avatar;
