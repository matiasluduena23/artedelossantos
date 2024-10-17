"use server";

import { zodSchemaMueble } from "./schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";

export type State = {
	errors?: {
		id?: string[];
		name?: string[];
		description?: string[];
		price?: string[];
		alto?: string[];
		ancho?: string[];
		profundo?: string[];
		images?: string[];
		createAt?: string[];
	};
	message?: string;
};

export async function createMueble(prevState: State, formData: FormData) {
	const rawformData = Object.fromEntries(formData.entries());

	const createMuebleSchema = zodSchemaMueble.omit({
		id: true,
		createAt: true,
	});
	const validatedFields = createMuebleSchema.safeParse(rawformData);

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Faltan campos de completar",
		};
	}

	try {
		await prisma.mueble.create({
			data: validatedFields.data,
		});
		revalidatePath("/panel/muebles");
	} catch (error) {
		return { message: "Database Error: Error al crear un mueble.", error };
	}

	redirect("/panel/muebles");
}

export async function updateMueble(
	id: string,
	prevState: State,
	formData: FormData
) {
	const rawformData = Object.fromEntries(formData.entries());
	const formDatawithID = { ...rawformData, id: id };

	const updateMuebleSchema = zodSchemaMueble.omit({ createAt: true });
	const validatedFields = updateMuebleSchema.safeParse(formDatawithID);

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Faltan campos de completar",
		};
	}

	try {
		await prisma.mueble.update({
			where: {
				id: validatedFields.data.id,
			},
			data: validatedFields.data,
		});
	} catch (error) {
		return { message: "Database Error: Error al actualizar el mueble." };
	}

	revalidatePath("/panel/muebles");
	redirect("/panel/muebles");
}
