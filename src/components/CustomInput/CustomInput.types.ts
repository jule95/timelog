export interface ICustomInputProps {
  id: string;
  fullWidth?: boolean;
  label: string;
  value: string;
  onChange: (value: string, name: string) => void;
  type?: `text` | `number`;
  name: string;
}
