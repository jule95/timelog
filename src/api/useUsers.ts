/* Change as needed. */
// This is just a demo of how I thought an API service in React makes sense.

import { useState } from 'react';
import {
  IDataUpdateUser,
  IDateCreateUser,
  IResponseDeleteUser,
  IResponseUser
} from '../common/interfaces/api.users.interfaces';
import ApiService from './ApiService';
import config from '../config';
import { produce } from 'immer';
import ApiHelper from './ApiHelper';
import { IApiError } from '../common/interfaces/api.interfaces';

type TUserResponse = IResponseUser[] | IResponseUser | IResponseDeleteUser;

type TUserHook = [{
  getUsers(): Promise<void>,
  createUser(data: IDateCreateUser): Promise<void>,
  updateUser(data: IDataUpdateUser, id: number): Promise<void>,
  deleteUser(id: number): Promise<void>,
}, IUsersHookState];

interface IUsersHookState {
  loading: boolean;
  response: TUserResponse | null;
  error: IApiError | null;
  referer: EUserHookReferer | null;
}

export enum EUserHookReferer {
  POST_USER,
  GET_USERS,
  DELETE_USER,
  PATCH_USER,
}

function useUsers(): TUserHook {
  const apiService = new ApiService();
  const [state, setState] = useState<IUsersHookState>({
    error: null,
    loading: false,
    referer: null,
    response: null,
  });

  const resetState = () => {
    setState(produce(draft => {
      draft.loading = true;
      draft.error = null;
      draft.response = null;
      draft.referer = null;
    }));
  };

  const setErrorState = (error: unknown, referer: EUserHookReferer) => {
    setState(produce(draft => {
      draft.error = ApiHelper.handleError(error);
      draft.referer = referer;
    }));
  };

  const setResponseState = (response: TUserResponse, referer: EUserHookReferer) => {
    setState(produce(draft => {
      draft.loading = false;
      draft.error = null;
      draft.response = response;
      draft.referer = referer;
    }));
  };

  const getUsers = async (): Promise<void> => {
    resetState();
    const referer = EUserHookReferer.GET_USERS;

    try {
      const response = await apiService.get<IResponseUser[]>(config.api.users);
      setResponseState(response, referer);
    } catch(error: unknown) {
      setErrorState(error, referer);
    }
  };

  const createUser = async (data: IDateCreateUser): Promise<void> => {
    resetState();
    const referer = EUserHookReferer.POST_USER;

    try {
      const response = await apiService.post<IResponseUser, IDateCreateUser>(config.api.users, data);
      setResponseState(response, referer);
    } catch(error: unknown) {
      setErrorState(error, referer);
    }
  };

  const updateUser = async (data: IDateCreateUser, id: number): Promise<void> => {
    resetState();
    const referer = EUserHookReferer.PATCH_USER;

    try {
      const response = await apiService.patch<IResponseUser, IDataUpdateUser>(`${config.api.users}/${id}`, data);
      setResponseState(response, referer);
    } catch(error: unknown) {
      setErrorState(error, referer);
    }
  };

  const deleteUser = async (id: number): Promise<void> => {
    resetState();
    const referer = EUserHookReferer.DELETE_USER;

    try {
      await apiService.delete(`${config.api.users}/${id}`);
      setResponseState({ id }, referer);
    } catch(error: unknown) {
      setErrorState(error, referer);
    }
  };

  return [{
    createUser,
    deleteUser,
    getUsers,
    updateUser,
  }, state];
}

export default useUsers;
