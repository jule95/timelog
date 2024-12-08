export interface ITimeLogFormState {
  values: {
    date: string;
    employee: ITimeLogOption | null;
    hours: number;
    project: string;
    description: string;
  }
}

export interface ITimeLogOption {
  code: number;
  name: string;
}
