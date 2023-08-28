import { CREATE_UPDATE_USERS, DELETE_USERS, GET_USERS } from "src/utils/apis";
import { HttpClient, Method } from "./HttpClients";

export class UsersApi extends HttpClient {
  getUsers(payload) {
    return this.request(Method.POST, GET_USERS, payload)
  }

  createUpdateUsers(payload) {
    return this.request(Method.PUT, CREATE_UPDATE_USERS, payload)
  }

  deleteUsers(id) {
    return this.request(Method.DELETE, `${DELETE_USERS}${id}`)
  }
}