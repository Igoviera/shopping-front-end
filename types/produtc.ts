import {Comment} from './comment'

export interface Product {
    _id: string
    name: string
    description: string
    price: number
    img: string
    comments: Comment[]
}

