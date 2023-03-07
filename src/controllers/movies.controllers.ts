import { Request, Response } from "express";
import { iMovieRepo } from "../interfaces/movies.interfaces";
import { sortSchema } from "../schemas/movies.schemas";
import createMovieService from "../services/movies/createMovie.service";
import deleteMovieService from "../services/movies/deleteMovie.service";
import { readAllMoviesService } from "../services/movies/readAllMovies.service";
import updateMovieService from "../services/movies/updateMovie.service";

const createMovieController = async (req: Request, res: Response) => {
  const movieData: iMovieRepo = req.body;

  const newMovie = await createMovieService(movieData);

  res.status(201).json(newMovie);
};

const readAllMoviesController = async (req: Request, res: Response) => {
  const { perPage, page, order, sort } = req.query;
  const newSort = sortSchema.parse(sort);

  const movies = await readAllMoviesService(perPage, page, order, newSort);

  return res.json(movies);
};

const deleteMovieController = async (req: Request, res: Response) => {
  const MovieId = parseInt(req.params.id);
  await deleteMovieService(MovieId);

  return res.status(204).send();
};

const updateMovieController = async (req: Request, res: Response) => {
  const movieData = req.body;
  const movieId = parseInt(req.params.id);

  console.log(movieData);

  const updatedMovie = await updateMovieService(movieData, movieId);

  return res.json(updatedMovie);
};

export {
  createMovieController,
  readAllMoviesController,
  deleteMovieController,
  updateMovieController,
};

// export const getMoviesController = async (req: Request, res: Response) => {
//   const queryPage: any = req.query.page;
//   const queryPerPage: any = req.query.perPage;
//   let queryOrder: any = '';

//   if (!req.query.sort) {
//     queryOrder = 'ASC';
//   } else {
//     queryOrder =
//       req.query.order?.toString().toUpperCase() === 'ASC' ||
//       req.query.order?.toString().toUpperCase() === 'DESC'
//         ? req.query.order
//         : 'ASC';
//   }

//   const querySort: any =
//     req.query.sort == 'price' || req.query.sort == 'duration'
//       ? req.query.sort
//       : 'id';
//   const movies = await getMovieService(
//     queryPage,
//     queryPerPage,
//     queryOrder,
//     querySort
//   );

//   return res.json(movies);
// };
