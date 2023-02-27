import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Movie } from "../../entities"
import { IMoviesArray } from "../../interfaces/movies.interfaces"
import { arrayMoviesSchema } from "../../schemas/movies.schemas"

const readAllMoviesService = async (): Promise<IMoviesArray> => {
   
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const selectMovies = await movieRepository.find({
        take: 14, // items por page
        skip: 1 * (3-1), //items por page 
        order: {
            name: 'ASC'
        } 
    })

    const movies = arrayMoviesSchema.parse(selectMovies)

    return movies

     
}

export {
    readAllMoviesService
}