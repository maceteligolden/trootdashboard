import { Base } from "./base.model";

export interface User extends Base {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
}