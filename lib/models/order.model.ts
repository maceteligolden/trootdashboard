import { Article } from "./article.model";
import { Base } from "./base";

export interface Order extends Base {
    reference_no?: string;
    status?: string;
    customer_email?: string;
    customer_firstname?: string;
    customer_lastname?: string;
    customer_phone?: string;
    articles?: Article[];
    amount?: string;
    payment_provider?: string;
    transaction_type?: string;
}