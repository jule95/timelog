import { Nullable } from 'primereact/ts-helpers';

export interface IDatepickerProps {
  value: Date | null;
  onChange: (value: Nullable<Date>, name: string) => void;
  id: string;
  label: string;
  name: string;
}
