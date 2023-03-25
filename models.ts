export interface Movie {
    id?: number;
    title: string;
    slug: string;
    year: number;
    rating: number;
    genres: [string];
    synopsis: string;
    language: string;
    large_cover_image: string;
}