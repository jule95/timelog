import { FC } from 'react';
import './CustomTextarea.scss';
import { ICustomTextareaProps } from './CustomTextarea.types.ts';
import { InputTextarea } from 'primereact/inputtextarea';

const CustomTextarea: FC<ICustomTextareaProps> = props => (
  <div className="CustomTextarea">
    <label htmlFor={props.id}>{props.label}</label>
    <InputTextarea
      name={props.name}
      placeholder={props.placeholder}
      rows={5}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value, event.target.name)} />
  </div>
);

export default CustomTextarea;
