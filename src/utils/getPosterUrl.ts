export const getPosterUrl = (path: string | null): string =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : `https://placeholder.co/500x750?text=No+Image`;
