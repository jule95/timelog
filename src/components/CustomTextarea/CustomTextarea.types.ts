export interface ICustomTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string, name: string) => void;
  placeholder: string;
  name: string;
}
