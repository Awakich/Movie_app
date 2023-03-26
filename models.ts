export interface Movie {
    id: number;
    title: string;
    year: number;
    rating: number;
    genres?: [string];
    large_cover_image: string;
    description_intro?: string;
}