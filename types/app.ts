export interface MovieResponse {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Movie {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  status: string;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  totalSeriesLength: number;
  seriesLength: number;
  ratingMpaa: string;
  ageRating: number;
  poster: Image;
  backdrop: Image;
  genres: Genre[];
  countries: Country[];
  top10: number;
  top250: number;
  isSeries: boolean;
  ticketsOnSale: boolean;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Image {
  url: string;
  previewUrl: string;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}
