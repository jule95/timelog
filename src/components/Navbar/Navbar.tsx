import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import './Navbar.scss';

const Navbar: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = [
    {
      command: () => { navigate(`/myTimeLog`); },
      label: t(`navbar.myTimeLog`),
    },
    {
      command: () => { navigate(`/employees`); },
      label: t(`navbar.employees`),
    },
    {
      command: () => { navigate(`/projects`); },
      label: t(`navbar.projects`),
    },
    {
      command: () => { navigate(`/`); },
      id: `navbar-menu-item-home`,
      label: t(`navbar.home`),
    },
  ];

  return (
    <Menubar
      className="Navbar"
      model={items}
      start={<h1 className="Navbar__logo">{t(`navbar.timeLog`)}</h1>} />
  );
};

export default Navbar;
