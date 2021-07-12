import axios from 'axios';
import {APIURL} from './config';

interface ServerPostArgs<DataType> {
  url: string;
  token?: string;
  data?: DataType;
  contentType?: 'multipart/form-data';
}

interface ServerGetArgs<DataType> {
  url: string;
  token?: string;
  params?: DataType;
  contentType?: 'multipart/form-data';
}

// This will intercept every AXIOS Response and then you can do anything with it
const axiosCreate = axios.create({
  baseURL: APIURL,
});

export const server = {
  post<T = any>({
    url,
    data,
    token,
    contentType = undefined,
  }: ServerPostArgs<T>) {
    return axiosCreate.post(url, data, {
      headers: token
        ? {
            'content-type': contentType,
            Authorization: 'Bearer ' + token,
          }
        : undefined,
    });
  },

  get<T = any>({
    url,
    params,
    token,
    contentType = undefined,
  }: ServerGetArgs<T>) {
    return axiosCreate.get(url, {
      headers: token
        ? {
            'content-type': contentType,
            Authorization: 'Bearer ' + token,
          }
        : undefined,
      params,
    });
  },
};
