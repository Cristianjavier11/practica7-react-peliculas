export function getMovieImg(path, width = 500) {
  if (!path) {
    return "https://via.placeholder.com/500x750?text=Sin+Imagen";
  }

  return `https://image.tmdb.org/t/p/w${width}${path}`;
}