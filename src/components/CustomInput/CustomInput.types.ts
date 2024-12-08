export interface ICustomInputProps {
  id: string;
  fullWidth?: boolean;
  label: string;
  value: string | number;
  onChange: (value: string | number, name: string) => void;
  type?: `text` | `number`;
  name: string;
}
