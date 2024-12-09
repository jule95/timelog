export interface ICustomInputProps {
  fullWidth?: boolean;
  id: string;
  label: string;
  name: string;
  onChange: (value: string | number, name: string) => void;
  type?: `text` | `number`;
  value: string | number;
  placeholder?: string;
  invalid?: boolean;
  required?: boolean;
}
