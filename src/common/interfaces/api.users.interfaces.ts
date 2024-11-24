export interface IDateCreateUser {
  name: string;
  email: string;
}

export interface IDataUpdateUser {
  name?: string;
  email?: string;
}

export interface IResponseUser {
  id: number;
  name: string;
  email: string;
}

export interface IResponseDeleteUser {
  id: number
}
