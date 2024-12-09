import { ITimeLogOption } from '../TimeLogForm/TimeLogForm.types.ts';

export interface ICustomSelectProps {
  id: string;
  label: string;
  name: string;
  onChange: (value: ITimeLogOption, name: string) => void;
  options: ITimeLogOption[];
  value: ITimeLogOption | null;
}
