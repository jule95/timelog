export interface ICustomSelectProps {
  id: string;
  label: string;
  name: string;
  onChange: (value: string, name: string) => void;
  options: { name: string; code: string }[];
  placeholder: string;
  value: string;
}
