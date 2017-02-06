/* Defines the user entity */
export interface IUser {
    id: string;
    userName: string;
    fullName: string;
    followers: number;
    avgLikes: number;
    engRates: number;
    postsLast30Days: number;
    email: string;
    imageUrl: string;
}

