"use server";

import { zodSchemaMueble } from "@/lib/schemas";
import { redirect } from "next/navigation";

export type ErrorState = {
	errors?: {
		name?: string[];
		description?: string[];
		price?: string[];
		alto?: string[];
		ancho?: string[];
		profundo?: string[];
	};
	message?: string;
};

const DatoSchema = zodSchemaMueble.omit({
	id: true,
	createAt: true,
	images: true,
});

export async function actionDatos(State: ErrorState, formData: FormData) {
	const data = Object.fromEntries(formData.entries());

	const validateData = DatoSchema.safeParse(data);
	if (!validateData.success) {
		return {
			message: "Complete todos los campos",
			errors: validateData.error.flatten().fieldErrors,
		};
	}

	redirect("/panel/muebles/nuevo/imagenes");
}
