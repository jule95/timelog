import { FC, useState } from 'react';
import './CustomTextarea.scss';
import { ICustomTextareaProps } from './CustomTextarea.types.ts';
import { InputTextarea } from 'primereact/inputtextarea';

const CustomTextarea: FC<ICustomTextareaProps> = props => {
  const [isDirty, setIsDirty] = useState<boolean>(false);

  return (
    <div className="CustomTextarea">
      <label htmlFor={props.id}>{`${props.label}*`}</label>
      <InputTextarea
        invalid={isDirty && props.invalid}
        name={props.name}
        placeholder={props.placeholder}
        rows={5}
        value={props.value}
        onBlur={() => setIsDirty(true)}
        onChange={(event) => props.onChange(event.target.value, event.target.name)} />
    </div>
  );
};

export default CustomTextarea;
