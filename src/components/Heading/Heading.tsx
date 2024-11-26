import { FC } from 'react';
import { IHeadingProps } from './Heading.types.ts';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import './Heading.scss';

const Heading: FC<IHeadingProps> = props => {
  const { t } = useTranslation();

  return (
    <Typography className="Heading">
      {t(props.title)}
    </Typography>
  );
};

export default Heading;
