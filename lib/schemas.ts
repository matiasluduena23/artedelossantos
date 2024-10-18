import { z } from "zod";

export const zodSchemaMueble = z.object({
	id: z.string(),
	name: z.string().min(2, "El nombre es requerido"),
	price: z.coerce.number().gt(1000, "Ingresar un numero valido"),
	description: z.string().min(5, "La description es obligatoria"),
	alto: z.coerce.number().gt(10, "Ingresar un numero valido"),
	ancho: z.coerce.number().gt(10, "Ingresar un numero valido"),
	profundo: z.coerce.number().gt(10, "Ingresar un numero valido"),
	images: z.array(z.string(), { message: "Ingrese 4 Imagenes" }),
	createAt: z.date(),
});

export const formContextSchema = z.object({
	name: z.string().optional(),
	price: z.coerce.number().optional(),
	description: z.string().optional(),
	alto: z.coerce.number().optional(),
	ancho: z.coerce.number().optional(),
	profundo: z.coerce.number().optional(),
	images: z.array(z.string(), { message: "Ingrese 4 Imagenes" }).optional(),
});
