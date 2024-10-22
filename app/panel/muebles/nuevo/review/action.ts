"use server";

import { CreateMuebleT } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { createMuebleSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function cargarNuevoMueble(data: CreateMuebleT) {
	console.log("first");
	const validatedFields = createMuebleSchema.safeParse(data);

	console.log(validatedFields);
	if (!validatedFields.success) {
		return {
			message: "Faltan campos de completar",
		};
	}

	try {
		await prisma.mueble.create({
			data: validatedFields.data,
		});
	} catch (error) {
		return { message: "Database Error: Error al crear un mueble.", error };
	}
	revalidatePath("/panel/muebles");
	redirect("/panel/muebles");
}
