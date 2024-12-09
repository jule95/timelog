import { FC } from 'react';
import './Datepicker.scss';
import { IDatepickerProps } from './Datepicker.types.ts';
import { Calendar } from 'primereact/calendar';
import { format } from 'date-fns';

const Datepicker: FC<IDatepickerProps> = props => (
  <div className="Datepicker">
    <label htmlFor={props.id}>{props.label}</label>
    <Calendar
      formatDateTime={date => format(date, `dd.MM.yyyy`)}
      id={props.id}
      name={props.name}
      selectionMode="single"
      value={props.value}
      onChange={event => props.onChange(event.target.value, event.target.name)} />
  </div>
);

export default Datepicker;
