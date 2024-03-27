import { Base } from "./base";
import { Category } from "./category.model";

export enum PaymentModel {
    FREE = "FREE",
    PREMIUM = "PREMIUM"
}

export interface Article extends Base {
    title?: string;
    description?: string;
    category?: Category;
    payment_model?: PaymentModel;
    thumbnail?: string;
    key?: string;
    uploader?: string;
    amount?: string;
    
}