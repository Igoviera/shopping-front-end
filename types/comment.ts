
export interface Comment {
    _id: string
    text: string
    star: number
    createdAt: string
    user: {
        _id: string
        name: string
        email: string
    }
}