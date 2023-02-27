import {z} from 'zod'

const movieSchema = z.object({
name: z.string().max(50),
description: z.string().optional().nullable(),
duration: z.number(),
price: z.number()

})

const movieSchemaReturn = movieSchema.extend({
    id: z.number()
})

const arrayMoviesSchema = movieSchemaReturn.array()

const moviUpdateSchema = movieSchema.partial()


export{
    movieSchema,
    arrayMoviesSchema,
    movieSchemaReturn,
    moviUpdateSchema
}