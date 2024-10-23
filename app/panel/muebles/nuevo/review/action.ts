"use server";

import { CreateMuebleT } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { createMuebleSchema } from "@/lib/schemas";

import { revalidatePath } from "next/cache";

export type StateForm = {
	state: "SUCCESS" | "ERROR" | "PENDING";
	error?: string;
};

export async function cargarNuevoMueble(
	data: CreateMuebleT,
	state: StateForm,
	formData: FormData
): Promise<StateForm> {
	const validatedFields = createMuebleSchema.safeParse(data);

	if (!validatedFields.success) {
		return {
			state: "ERROR",
		};
	}

	try {
		await prisma.mueble.create({
			data: validatedFields.data,
		});
	} catch (error) {
		console.log("Error creando el item", error);
		return { state: "ERROR" };
	}

	revalidatePath("/panel/muebles");

	return { state: "SUCCESS" };
}
