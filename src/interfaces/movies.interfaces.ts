
import {z} from 'zod'
import { arrayMoviesSchema, movieSchema, movieSchemaReturn, moviUpdateSchema } from '../schemas/movies.schemas'

type iMovieRepo = z.infer<typeof movieSchema>
type IMovieReturn = z.infer<typeof movieSchemaReturn>

type IMoviesArray = z.infer<typeof arrayMoviesSchema>
type IMovieUpdate = z.infer<typeof moviUpdateSchema>

export { 
iMovieRepo,
IMoviesArray,
IMovieReturn,
IMovieUpdate
}