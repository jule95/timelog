export interface ITimeLogFormState {
  values: {
    date: Date;
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
