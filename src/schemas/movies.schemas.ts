import { z } from "zod";

const movieCreateSchema = z.object({
  duration: z
    .number()
    .int()
    .min(0, { message: "Number must be greater than 0" }),
  name: z.string().max(50),
  description: z.string().optional().nullable(),
  price: z.number().int().min(0, { message: "Number must be greater than 0" }),
});

const movieSchemaReturn = movieCreateSchema.extend({
  id: z.number(),
});

const arrayMoviesSchema = movieSchemaReturn.array();

const moviUpdateSchema = movieCreateSchema.partial();

const sortSchema = z.enum(["id", "duration", "price"]).default("id");

const moviePaginationSchema = z.object({
  prevPage: z.string().nullable(),
  nextPage: z.string().nullable(),
  count: z.number().min(0),
  data: arrayMoviesSchema,
});

export {
  movieCreateSchema,
  arrayMoviesSchema,
  movieSchemaReturn,
  moviUpdateSchema,
  sortSchema,
  moviePaginationSchema,
};
