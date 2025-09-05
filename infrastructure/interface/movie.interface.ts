export interface Movie{
    id: number;
    title: string;
    description: string;
    releseDate: Date;
    rating: number;
    poster: string;
    backdrop: string;
}

export interface CompleteMovie extends Movie{
    genres: string[]
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: string[]

}