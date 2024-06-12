'use server';

import { zodSchemaMueble } from './schemas';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createMueble(formData: FormData) {
	const rawformData = Object.fromEntries(formData.entries());

	const validateField = zodSchemaMueble.safeParse(rawformData);
	console.log(validateField);
	revalidatePath('/panel/muebles');
	redirect('/panel/muebles');
}
