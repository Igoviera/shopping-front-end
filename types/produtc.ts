export interface Product {
    _id: string
    name: string
    description: string
    price: number
    img: string
    comments: Comment[]
}

export interface Comment {
    _id: string
    text: string
    createdAt: string
    user: {
        _id: string
        name: string
        email: string
    }
}
