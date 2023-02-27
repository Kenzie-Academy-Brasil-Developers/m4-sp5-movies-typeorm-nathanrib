import {Request, Response, NextFunction} from 'express'
import { ZodTypeAny } from 'zod'

const ensureMoviesDataIsValidMiddleWare = (schema: ZodTypeAny) => (req: Request, res:Response, next: NextFunction) =>{

    const dataValidated = schema.parse(req.body)

    req.body = dataValidated

    return next()

}

export default ensureMoviesDataIsValidMiddleWare