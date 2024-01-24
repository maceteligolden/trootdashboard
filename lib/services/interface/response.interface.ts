export default interface IResponse<T> extends IResponseBase {
  data?: T;
}

export interface IResponseBase {
  status: "error" | "success";
  message: string;
}
