export interface Repository {
    id: string;
    name: string;
    description: string;
    stars: number;
    language: string;
    languageColor: string;
    builtBy: { username: string, followers: number; avatar: string; }[];
    isFavorite?: boolean;
}
