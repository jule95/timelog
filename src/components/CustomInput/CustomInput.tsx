import { FC, useState } from 'react';
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
  placeholder = ``,
  invalid=false,
  required=false,
}) => {
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const handleChange = (value: string, name: string) => {
    onChange(type === `number` ? parseInt(value) : value, name);
  };

  return (
    <div className={ComponentHelper.className([
      `CustomInput`,
      (fullWidth || false) && `CustomInput--full-width`,
    ])}>
      <label htmlFor={id}>{`${label}${required ? `*` : ``}`}</label>
      <InputText
        id={id}
        invalid={isDirty && invalid}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value.toString()}
        variant="outlined"
        onBlur={() => {setIsDirty(true);}}
        onChange={event => handleChange(event.target.value, event.target.name)} />
    </div>
  );
};

export default CustomInput;
