import { Request, Response } from "express";
import { iMovieRepo } from "../interfaces/movies.interfaces";
import createMovieService from "../services/movies/createMovie.service";
import deleteMovieService from "../services/movies/deleteMovie.service";
import { readAllMoviesService } from "../services/movies/readAllMovies.service";
import updateMovieService from "../services/movies/updateMovie.service";



const createMovieController = async (req: Request, res: Response)=>{
    const movieData: iMovieRepo = req.body

    const newMovie = await createMovieService(movieData)
    
    res.status(201).json(newMovie)
}
const readAllMoviesController = async (req: Request, res: Response)=>{
 
    const movies = await readAllMoviesService()

    return res.json(movies)
}

const deleteMovieController = async (req: Request, res: Response)=>{
 
const MovieId = parseInt(req.params.id)
 await deleteMovieService(MovieId)

 return res.status(204).send()

}

const updateMovieController = async (req: Request, res: Response)=>{

    
 
    const movieData = req.body
    const movieId = parseInt(req.params.id)
    
    const updatedMovie=  await updateMovieService(movieData, movieId)
    
     return res.json(updatedMovie)
    
    }


export{
    createMovieController,
    readAllMoviesController,
    deleteMovieController,
    updateMovieController
    
}
