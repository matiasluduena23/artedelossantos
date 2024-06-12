import { z } from 'zod';

export const zodSchemaMueble = z.object({
	id: z.string(),
	name: z.string().min(2, 'El nombre es requerido'),
	price: z.coerce.number().gt(1000),
	description: z.string().min(5, 'La description es obligatoria'),
	high: z.coerce.number().gt(10, 'Ingresar un numero valido'),
	broad: z.coerce.number().gt(10, 'Ingresar un numero valido'),
	deep: z.coerce.number().gt(10, 'Ingresar un numero valido'),
	createAt: z.date(),
});
