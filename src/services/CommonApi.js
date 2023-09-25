import { UPLOAD_FILES } from "src/utils/apis";
import { HttpClient, Method } from "./HttpClients";

export class CommonApi extends HttpClient {
  uploadFiles(payload, type) {
    return this.request(Method.POST, UPLOAD_FILES, payload, { 'Content-Type': type })
  }
}