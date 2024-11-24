import { AxiosError } from 'axios';
import { IApiError } from '../common/interfaces/api.interfaces';

class ApiHelper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static handleError(error: any): IApiError {
    if (error.toJSON) {
      const axiosError = (error as AxiosError);
      return {
        code: axiosError.response?.status ?? -1,
        message: axiosError.message,
        name: axiosError.name,
      };
    }

    if (error instanceof Error) {
      return {
        code: -1,
        message: error.message,
        name: error.name,
      };
    }

    return {
      code: -1,
      message: `An unknown error occurred!`,
      name: `Unknown Error`,
    };
  }
}

export default ApiHelper;
