export interface IStaffResponse {
  staff: {
    id: number;
    name: string;
  }[]
}

export interface ITimeLogResponse {
  timeLogs: {
    id: number;
    day: string;
    hours: number;
    time_from: string | null;
    time_to: string | null;
    project_name: string;
    subject: string | null;
    staff_id: number;
    __typename: string;
  }[];
}

export interface ICreateTimeLogResponse {
  createTimeLog: {
    id: number;
    day: string;
    hours: number;
    time_from: string | null;
    time_to: string | null;
    project_name: string;
    subject: string | null;
    staff_id: number;
    __typename: string;
  }
}

export interface ICreateTimeLogData {
  day: string;
  hours: number;
  timeFrom?: string;
  timeTo?: string;
  projectName: string;
  subject?: string;
  staffId: number;
}
