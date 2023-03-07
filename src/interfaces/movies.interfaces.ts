import { type } from "os";
import { Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../entities";
import {
  arrayMoviesSchema,
  movieCreateSchema,
  moviePaginationSchema,
  movieSchemaReturn,
  moviUpdateSchema,
} from "../schemas/movies.schemas";

type iMovieRepo = z.infer<typeof movieCreateSchema>;
type IMovieReturn = z.infer<typeof movieSchemaReturn>;

type IMoviesArray = z.infer<typeof arrayMoviesSchema>;
type IMovieUpdate = z.infer<typeof moviUpdateSchema>;

type iMovieRepository = Repository<Movie>;

type IMoviePagination = z.infer<typeof moviePaginationSchema>;

export {
  iMovieRepo,
  IMoviesArray,
  IMovieReturn,
  IMovieUpdate,
  IMoviePagination,
  iMovieRepository,
};
