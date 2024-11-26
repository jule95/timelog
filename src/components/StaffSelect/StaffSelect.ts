export interface IStaffSelectProps {
  label: string;
  onChange: (value: string) => void,
  options: IStaffSelectOption[];
  value: string;
}

interface IStaffSelectOption {
  label: string;
  value: number;
}
