import { Base } from "./base";

export interface Account extends Base {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    role?: string;
}