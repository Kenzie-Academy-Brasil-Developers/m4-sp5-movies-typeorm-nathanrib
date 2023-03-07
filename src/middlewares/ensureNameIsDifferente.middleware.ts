import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const ensureNameIsDifferent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  if (!req.body.name) {
    return next();
  }

  const findMovie = await movieRepository.findOne({
    where: {
      name: req.body.name,
    },
  });
  if (findMovie && req.body.name) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};

export default ensureNameIsDifferent;
