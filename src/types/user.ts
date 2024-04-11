export type User = {
    id: string
    email: string
    display_name: string
    phone_number: string
    user_type: string
    bio: string
    styles: string[]
    custom_token?: string
}