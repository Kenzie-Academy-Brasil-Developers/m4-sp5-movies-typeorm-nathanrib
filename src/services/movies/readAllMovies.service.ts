import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import {
  IMoviePagination,
  iMovieRepository,
  IMoviesArray,
} from "../../interfaces/movies.interfaces";
import {
  arrayMoviesSchema,
  moviePaginationSchema,
} from "../../schemas/movies.schemas";

const readAllMoviesService = async (
  perPage: any,
  page: any,
  order: any,
  sort: any
): Promise<IMoviePagination> => {
  const movieRepository: iMovieRepository = AppDataSource.getRepository(Movie);

  const baseUrl: string = `http://localhost:3000/movies`;
  const entireMovieListRows: number = await movieRepository.count();

  let take: number = Number(perPage) || 5;
  let skip: number = Number(page) || 1;

  if (skip <= 0) {
    skip = 1;
  }
  if (take <= 0 || take > 5) {
    take = 5;
  }

  sort = sort?.toString().toLowerCase();
  order = order?.toString().toLowerCase();

  sort = sort === "price" || sort === "duration" ? sort : "id";
  order = order === "asc" || order === "desc" ? order : "asc";

  if (order === "desc" && sort === "id") {
    order = "asc";
  }

  const findMovies: IMoviesArray = await movieRepository.find({
    take: take,
    skip: take * (skip - 1),
    order: {
      [sort]: order,
    },
  });

  function getPrevPageUrl() {
    const isPrevPageDisabled =
      skip <= 1 || entireMovieListRows - (take * skip - take) < -perPage + 1;
    return isPrevPageDisabled
      ? null
      : `${baseUrl}?page=${skip - 1}&perPage=${take}`;
  }

  function getNextPageUrl() {
    const isNextPageDisabled = entireMovieListRows - take * skip <= 0;
    return isNextPageDisabled
      ? null
      : `${baseUrl}?page=${skip + 1}&perPage=${take}`;
  }

  const prevPage: string | null = getPrevPageUrl();
  const nextPage: string | null = getNextPageUrl();

  return moviePaginationSchema.parse({
    prevPage,
    nextPage,
    count: entireMovieListRows,
    data: findMovies,
  });
};

export { readAllMoviesService };
