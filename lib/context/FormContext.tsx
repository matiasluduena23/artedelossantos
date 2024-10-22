"use client";

import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
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
	const [dataLoaded, setDataLoaded] = useState(false);
	const updateDatos = (datos: Partial<DatosT>) => {
		setNewDatos((prev) => ({ ...prev, ...datos }));
	};

	useEffect(() => {
		const data = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (data) {
			setNewDatos(JSON.parse(data));
		}
		setDataLoaded(true);
	}, []);

	useEffect(() => {
		if (dataLoaded) {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newDatos));
		}
	}, [dataLoaded, newDatos]);

	return (
		<FormContext.Provider value={{ newDatos, updateDatos }}>
			{children}
		</FormContext.Provider>
	);
}

export function useFormContext() {
	const formContext = useContext(FormContext);
	if (!formContext) {
		throw new Error("Error getting the context");
	}
	return formContext;
}
