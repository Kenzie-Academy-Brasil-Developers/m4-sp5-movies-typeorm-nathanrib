import { Router } from "express";
import { createMovieController, deleteMovieController, readAllMoviesController, updateMovieController } from "../controllers/movies.controllers";
import ensureMoviesExistsMiddleWare from "../middlewares/ensureMovieExists.middleware";
import ensureMoviesDataIsValidMiddleWare from "../middlewares/ensureMoviesDataIsValid.middleware";
import { movieSchema, moviUpdateSchema } from "../schemas/movies.schemas";

const movieRoutes: Router = Router()

movieRoutes.post('', ensureMoviesDataIsValidMiddleWare(movieSchema), createMovieController)
movieRoutes.get('',  readAllMoviesController)
movieRoutes.delete('/:id', ensureMoviesExistsMiddleWare, deleteMovieController)
movieRoutes.patch('/:id', ensureMoviesDataIsValidMiddleWare(moviUpdateSchema),ensureMoviesExistsMiddleWare, updateMovieController)

export default movieRoutes