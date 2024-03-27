import { Base } from "./base";
import { Category } from "./category.model";

export interface Blog extends Base {
    title?: string;
    content?: string;
    category?: Category;
}