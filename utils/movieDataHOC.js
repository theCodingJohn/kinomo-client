export const getReleaseYear = (movie) => movie.release_date.split("-")[0];

export const get3GenreId = (movie) => movie.genre_ids.slice(0, 3);
