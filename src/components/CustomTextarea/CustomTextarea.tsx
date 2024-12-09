import { FC } from 'react';
import './CustomTextarea.scss';
import { ICustomTextareaProps } from './CustomTextarea.types.ts';

const CustomTextarea: FC<ICustomTextareaProps> = props => {
  return (
    <div className="CustomTextarea">
      [CUSTOMTEXTAREA]
    </div>
  );
};

export default CustomTextarea;
