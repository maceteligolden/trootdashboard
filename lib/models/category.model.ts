import { Base } from "./base";

export enum CategoryTypes {
    ARTICLE = "ARTICLE",
    BLOG = "BLOG"
}

export interface Category extends Base {
    name?: string;
    description?: string;
    type?: CategoryTypes;
}