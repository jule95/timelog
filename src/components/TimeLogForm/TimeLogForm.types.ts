export interface ITimeLogFormState {
  values: {
    date: string;
    employee: number;
    hours: number;
    project: string;
    description: string;
  }
}

export interface ITimeLogOption {
  value: number;
  label: string;
}