import './Avatar.scss';
import avatar from '../../assets/avatar.png';
import { FC, useContext } from 'react';
import AppContext from '../../state/app-context.ts';
import { ButtonBase } from '@mui/material';
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
      {location.pathname === `/myTimeLog` && (
        <ButtonBase
          disableRipple
          className="Avatar__button"
          onClick={handleClick}>
          {t(`app.newEntry`)}
        </ButtonBase>
      )}
    </div>
  );
};

export default Avatar;