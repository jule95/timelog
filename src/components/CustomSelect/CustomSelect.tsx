import { FC } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { ICustomSelectProps } from './CustomSelect.types.ts';
import './CustomSelect.scss';

const CustomSelect: FC<ICustomSelectProps> = (props) => (
  <div className="CustomSelect">
    <label htmlFor={props.id}>{props.label}</label>
    <Dropdown
      id={props.id}
      name={props.name}
      optionLabel="name"
      options={props.options}
      value={props.value}
      onChange={event => props.onChange(event.target.value, event.target.name)} />
  </div>
);

export default CustomSelect;
