import { Base } from "./base";

export enum PaymentModel {
    FREE = "FREE",
    PREMIUM = "PREMIUM"
}

export interface Article extends Base {
    title?: string;
    description?: string;
    category?: string;
    payment_model?: PaymentModel;
    thumbnail?: string;
    key?: string;
    uploader?: string;
    amount?: string;
    
}