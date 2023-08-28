import { LOGIN_URL } from "src/utils/apis";
import { HttpClient, Method } from "./HttpClients";

export class AuthApi extends HttpClient {
    login(payload) {
        return this.request(Method.POST, LOGIN_URL, payload)
    }
}