import { FC } from 'react';
import { InputText } from 'primereact/inputtext';
import { ICustomInputProps } from './CustomInput.types.ts';
import ComponentHelper from '../../helpers/ComponentHelper.ts';
import './CustomInput.scss';

const CustomInput: FC<ICustomInputProps> = ({
  id,
  label,
  onChange,
  value,
  fullWidth = false,
  type = `text`,
}) => (
  <div className={ComponentHelper.className([
    `CustomInput`,
    (fullWidth || false) && `CustomInput--full-width`,
  ])}>
    <label htmlFor={id}>{label}</label>
    <InputText
      id={id}
      name="hours"
      type={type}
      value={value}
      variant="outlined"
      onChange={event => onChange(event.target.value, event.target.name)} />
  </div>
);

export default CustomInput;
