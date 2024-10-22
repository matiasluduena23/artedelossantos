"use client";

import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from "react";
import React from "react";
import { z } from "zod";
import { formContextSchema } from "../schemas";
import { DEFAULT_DATA_VALUES, LOCAL_STORAGE_KEY } from "../constants";
export type DatosT = z.infer<typeof formContextSchema>;
export type FormContextT = {
	newDatos: DatosT;
	updateDatos: (datosField: Partial<DatosT>) => void;
};

export const FormContext = createContext<FormContextT | null>(null);

export default function FormProvider({ children }: { children: ReactNode }) {
	const [newDatos, setNewDatos] = useState<DatosT>(DEFAULT_DATA_VALUES);
	const updateDatos = useCallback((datos: Partial<DatosT>) => {
		setNewDatos((prev) => ({ ...prev, ...datos }));
	}, []);

	useEffect(() => {
		const data = localStorage.getItem(LOCAL_STORAGE_KEY);
		console.log(data);
		if (!data) {
			console.log("posta", data);
			setNewDatos(DEFAULT_DATA_VALUES);
		} else {
			// const validated = formContextSchema.safeParse(JSON.parse(data));
			// if (validated.success) {
			// 	setNewDatos(validated.data);
			// } else {
			// 	setNewDatos(DEFAULT_DATA_VALUES);
			// }
		}
	}, []);

	useEffect(() => {
		console.log("first", LOCAL_STORAGE_KEY);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newDatos));
	}, [newDatos, updateDatos]);

	return (
		<FormContext.Provider value={{ newDatos, updateDatos }}>
			{children}
		</FormContext.Provider>
	);
}
