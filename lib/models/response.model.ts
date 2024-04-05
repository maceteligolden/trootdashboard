export interface IResponse {
    status: "success" | "error",
    message: string,
    data?: any
}