export interface IMovieDTO {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Plot: string;
  Language: string;
  Poster: string;
  Type: string;
  imdbID: string;
  Time: string;
  GenreList: string[];
}

export interface IMoviesDTO {
  totalResults: string;
  Response: string;
  Search: IMovieDTO[];
}

export enum Plot {
  full = "full",
  short = "short",
}
