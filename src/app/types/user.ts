

export interface User {
    userId?: string,
    username: string,
    displayName: string,
    email: string,
    following: string[],
    followers: string[],
    dateCreated: number,
    profilePhoto?: string
}