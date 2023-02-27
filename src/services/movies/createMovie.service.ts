import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Movie } from "../../entities"
import { iMovieRepo, IMovieReturn } from "../../interfaces/movies.interfaces"
import { movieSchema, movieSchemaReturn } from "../../schemas/movies.schemas"

const createMovieService = async (movieData:iMovieRepo): Promise<IMovieReturn>=>{ 

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    const movie = movieRepository.create(movieData)

    await movieRepository.save(movie)

    const newMovie = movieSchemaReturn.parse(movie)

    return newMovie
}

export default createMovieService