import { Comment } from './comment';

export interface Image {
    imageId: string,
    userId: string,
    imageSrc: string,
    caption: string,
    likes: string[],
    comments: Comment[],
    userLatitude: string,
    userLongitude: string,
    dateCreated: number
}