declare namespace MovieTypes {
  interface Movie {
    id: number;
    title: string;
    original_title: string;
    runtime: string;
    release_date: string;
    vote_average: string;
    genres: Genres[];
    poster_path: string;
    homepage: string;
    overview: string;
  }
  interface Genres {
    id : number;
    name: string;
  }
}