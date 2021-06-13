export const getReleaseYear = (movie) => movie.release_date.split("-")[0];

export const get3GenreId = (movie) => movie.genre_ids.slice(0, 3);

export const getCertification = (movie) =>
  movie.release_dates.results
    .find((result) => result.iso_3166_1 === "US")
    .release_dates.find((item) => item.certification !== "").certification;

export const getCasts = (movie) => movie.credits.cast;

export const getCrews = (movie) => movie.credits.crew;
