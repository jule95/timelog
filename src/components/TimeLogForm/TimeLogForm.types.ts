export interface ITimeLogFormState {
  values: {
    date: string;
    employee: string;
    hours: string;
    project: string;
    description: string;
  }
}

export interface ITimeLogOption {
  code: string;
  name: string;
}
