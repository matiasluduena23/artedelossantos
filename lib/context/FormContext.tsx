import { createContext, ReactNode } from "react";
import React from "react";
import { z } from "zod";
import { formContextSchema } from "../schemas";

type FormContextT = z.infer<typeof formContextSchema>;
export const FormContext = createContext<FormContextT | null>(null);

const defaultValues = {
	alto: 0,
	ancho: 0,
	description: "",
	name: "",
	price: 0,
	profundo: 0,
};

export default function FormProvider({ children }: { children: ReactNode }) {
	return (
		<FormContext.Provider value={defaultValues}>
			{children}
		</FormContext.Provider>
	);
}
