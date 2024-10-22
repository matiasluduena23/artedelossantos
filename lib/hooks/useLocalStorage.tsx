import React, { useEffect, useState } from "react";
import { DEFAULT_DATA_VALUES, LOCAL_STORAGE_KEY } from "../constants";
import { DatosT } from "../context/FormContext";
import { formContextSchema } from "../schemas";

export default function useLocalStorage() {
	const [datos, setDatos] = useState<DatosT>();
	useEffect(() => {
		const data = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (!data) {
			return setDatos(DEFAULT_DATA_VALUES);
		}
		const validated = formContextSchema.safeParse(JSON.parse(data));
		if (validated.success) {
			setDatos(validated.data);
		} else {
			setDatos(DEFAULT_DATA_VALUES);
		}
	}, []);
	return datos;
}
