import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { IMovieReturn, IMovieUpdate } from "../../interfaces/movies.interfaces";
import { movieSchemaReturn } from "../../schemas/movies.schemas";

const updateMovieService = async (
  movieData: any,
  movieId: number
): Promise<IMovieReturn> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movieToUpdate = await movieRepository.findOneBy({
    id: movieId,
  });

  const movie = movieRepository.create({
    ...movieToUpdate,
    ...movieData,
  });

  await movieRepository.save(movie);

  const updatedMovie = movieSchemaReturn.parse(movie);

  return updatedMovie;
};

export default updateMovieService;
