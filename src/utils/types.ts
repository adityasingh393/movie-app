export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Plot?: string;
  Director: string;
  Actors: string;
  Released: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
}

export interface Commenttype{
  movieId: string;
  text: string;
}