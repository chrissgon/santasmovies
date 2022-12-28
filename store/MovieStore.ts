import { IMovieDTO, IMoviesDTO, Plot } from "~/types/IMovies";

interface Options {
  type?: string;
  year?: string;
  title?: string;
  imdbID?: string;
  plot?: Plot;
  page?: number;
}

export const useMovieStore = defineStore("movieStore", () => {
  const apiKey = useRuntimeConfig().apiKey;
  const releases = reactive<IMovieDTO[]>([]);
  const movies = reactive<IMovieDTO[]>([]);
  const title = ref<string>("");
  const year = ref<string>("");
  const type = ref<string>("movie");

  async function getAll({
    type,
    year,
    page,
  }: Options): Promise<IMoviesDTO | null> {
    const { data } = await useFetch<IMoviesDTO>("http://www.omdbapi.com/", {
      params: {
        apikey: apiKey,
        s: "christmas",
        y: year,
        type,
        page,
      },
    });

    return data.value;
  }

  async function getMovie({
    type,
    title,
    year,
    plot = Plot.short,
    imdbID,
  }: Options): Promise<IMovieDTO | null> {
    const { data } = await useFetch<IMovieDTO>("http://www.omdbapi.com/", {
      params: {
        apikey: apiKey,
        y: year,
        t: title,
        i: imdbID,
        type,
        plot: plot,
      },
    });

    return data.value;
  }

  async function search(page?: number) {
    if (title.value) {
      const movie = await getMovie({
        type: type.value,
        title: title.value,
        year: year.value,
      });

      if (!movie) return;
      movies.push(processOptionsMovie(movie));

      return;
    }

    const all = await getAll({ type: type.value, year: year.value, page });

    if (!all) return;

    movies.push(...(await getFullMovies(all.Search)));
  }

  async function getReleases(): Promise<void> {
    const all = await getAll({
      year: new Date().getFullYear().toString(),
      type: "movie",
    });

    if (!all) return;

    releases.push(...(await getFullMovies(all.Search)));
  }

  async function getFullMovies(shortMovies: IMovieDTO[]): Promise<any> {
    const fullMovies: IMovieDTO[] = [];

    for (const { imdbID } of shortMovies) {
      const movie = await getMovie({ imdbID, plot: Plot.full });

      if (!movie) return;

      fullMovies.push(processOptionsMovie(movie));
    }

    return fullMovies;
  }

  function minuteToHour(minutes: number): string {
    const parts = new Date(minutes * 60 * 1000)
      .toISOString()
      .substring(12, 16)
      .split(":");
    return `${parts[0]}h ${parts[1]}min`;
  }

  function processOptionsMovie(movie: IMovieDTO): IMovieDTO {
    const languages = movie.Language.split(",");

    if (languages.length > 1) {
      movie.Language = languages[0];
    }
    if (movie.Runtime !== "N/A") {
      movie.Time = minuteToHour(Number(movie.Runtime.trim().split("min")[0]));
    } else {
      movie.Time = "N/A";
    }
    movie.GenreList = movie.Genre.trim().split(",");
    return movie;
  }

  return {
    getAll,
    getMovie,
    getReleases,
    search,
    releases,
    movies,
    title,
    year,
    type,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMovieStore, import.meta.hot));
}
