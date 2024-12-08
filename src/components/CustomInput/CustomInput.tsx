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
  name,
  fullWidth = false,
  type = `text`,
}) => {
  const handleChange = (value: string, name: string) => {
    onChange(type === `number` ? parseInt(value) : value, name);
  };

  return (
    <div className={ComponentHelper.className([
      `CustomInput`,
      (fullWidth || false) && `CustomInput--full-width`,
    ])}>
      <label htmlFor={id}>{label}</label>
      <InputText
        id={id}
        name={name}
        type={type}
        value={value.toString()}
        variant="outlined"
        onChange={event => handleChange(event.target.value, event.target.name)} />
    </div>
  );
};

export default CustomInput;
