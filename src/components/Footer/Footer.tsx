import { FC } from 'react';
import './Footer.scss';
import { IFooterProps } from './Footer.types.ts';
import ComponentHelper from '../../helpers/ComponentHelper.ts';
import { useTranslation } from 'react-i18next';
import { logos } from './Footer.config.ts';

const Footer: FC<IFooterProps> = ({ className = `` }) => {
  const { t } = useTranslation();

  return (
    <div className={ComponentHelper.className([
      `Footer`,
      className,
    ])}>
      <h1 className="Footer__company">{t(`footer.company`)}</h1>
      <div className="Footer__logos">
        {logos.map(logo => (
          <a
            href={logo.link}
            target="_blank">
            <img
              alt="facebook"
              className="Footer__logos-logo"
              src={logo.src} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
