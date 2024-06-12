'use server';

import { zodSchemaMueble } from './schemas';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from './prisma';

export async function createMueble(formData: FormData) {
	const rawformData = Object.fromEntries(formData.entries());

	const validateField = zodSchemaMueble.safeParse(rawformData);
	console.log(validateField);
	revalidatePath('/panel/muebles');
	redirect('/panel/muebles');
}

export async function updateMueble(id: string, formData: FormData) {
	const rawformData = Object.fromEntries(formData.entries());
	const formDatawithID = { ...rawformData, id: id };

	const updateMuebleSchema = zodSchemaMueble.omit({ createAt: true });
	const validateField = updateMuebleSchema.safeParse(formDatawithID);

	if (!validateField.success) {
		return;
	}

	await prisma.mueble.update({
		where: {
			id: id,
		},
		data: {
			name: validateField.data.name,
			price: validateField.data.price,
			description: validateField.data.description,
			high: validateField.data.high,
			broad: validateField.data.broad,
			deep: validateField.data.deep,
		},
	});
	revalidatePath('/panel/muebles');
	redirect('/panel/muebles');
}
