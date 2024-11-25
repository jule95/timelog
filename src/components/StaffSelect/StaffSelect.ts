export interface IStaffSelectProps {
  label: string;
  onChange: (value: number) => void,
  options: IStaffSelectOption[];
  value: number;
}

interface IStaffSelectOption {
  label: string;
  value: number;
}
