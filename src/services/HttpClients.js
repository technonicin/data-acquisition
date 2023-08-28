import axios from 'axios'

export const Http = axios.create({});

const setHeaders = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config;
}

Http.interceptors.request.use(
  async function (request) {
    return setHeaders(request)
  },
  function (error) { return Promise.reject(error) }
)

Http.interceptors.response.use(
  async function (response) {
    return response.data;
  },
  function (error) { return Promise.reject(error) }
)

export const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
}

export class HttpClient {
  constructor() { }
  request = (
    method,
    url,
    data = {},
    headers = {},
    cancelToken = {},
    responseType = ''
  ) => {

    return Http({
      url: url,
      method: method,
      headers: { Accept: 'application/json', ...headers },
      responseType: responseType,
      ...cancelToken,
      data: data
    });
  };
}