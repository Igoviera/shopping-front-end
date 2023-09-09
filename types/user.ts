import {Comment} from './comment'

export interface User {
    _id: string;
    name: string;
    email: string;
    cart: any;
    comments: Comment[];
}