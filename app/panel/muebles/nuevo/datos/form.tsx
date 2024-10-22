"use client";
import React, { ChangeEvent } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { actionDatos, ErrorState } from "./action";
import { useFormContext } from "@/lib/context/FormContext";

export default function FormDatos() {
	const initialState: ErrorState = { message: "", errors: {} };
	const [state, dispatch] = useFormState(actionDatos, initialState);
	const { newDatos, updateDatos } = useFormContext();

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		updateDatos({ [e.target.name]: e.target.value });
	};
	console.log(newDatos);
	return (
		<form action={dispatch}>
			<div className="grid grid-cols-2 mt-8 relative">
				{state.message && (
					<p className="absolute -top-8 left-1/3 bg-red-500 w-fit text-white px-2 rounded-sm">
						{state.message}
					</p>
				)}
				<div className="space-y-4">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="name">Nombre</Label>
						<Input
							type="text"
							id="name"
							name="name"
							placeholder="Nombre"
							className={`${state.errors?.name && "border-rose-500"}`}
							aria-describedby="customer-error"
							defaultValue={newDatos.name}
							onChange={handleChange}
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.name &&
								state.errors.name.map((error: string) => (
									<p className="text-sm text-rose-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="price">Precio</Label>
						<Input
							type="number"
							id="price"
							name="price"
							placeholder="Precio"
							className={`${state.errors?.price && "border-rose-500"}`}
							aria-describedby="customer-error"
							onChange={handleChange}
							defaultValue={newDatos.price}
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.price &&
								state.errors.price.map((error: string) => (
									<p className="text-sm text-rose-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>

					<div className="grid w-full max-w-sm gap-1.5">
						<Label htmlFor="description">Description</Label>
						<Textarea
							placeholder="Escriba una descripcion."
							id="description"
							name="description"
							className={`${state.errors?.description && "border-rose-500"}`}
							aria-describedby="customer-error"
							onChange={handleChange}
							defaultValue={newDatos.description}
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.description &&
								state.errors.description.map((error: string) => (
									<p className="text-sm text-rose-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
				</div>
				<div className="space-y-4">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="alto">Alto</Label>
						<Input
							type="number"
							name="alto"
							id="alto"
							placeholder="Alto"
							className={`${state.errors?.alto && "border-rose-500"}`}
							aria-describedby="customer-error"
							onChange={handleChange}
							defaultValue={newDatos.alto}
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.alto &&
								state.errors.alto.map((error: string) => (
									<p className="text-sm text-rose-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="ancho">Ancho</Label>
						<Input
							type="number"
							id="ancho"
							name="ancho"
							placeholder="Ancho"
							className={`${state.errors?.ancho && "border-rose-500"}`}
							aria-describedby="customer-error"
							onChange={handleChange}
							defaultValue={newDatos.ancho}
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.ancho &&
								state.errors.ancho.map((error: string) => (
									<p className="text-sm text-rose-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="profundo">Profundidad</Label>
						<Input
							type="number"
							id="profundo"
							name="profundo"
							placeholder="Produndidad"
							className={`${state.errors?.profundo && "border-rose-500"}`}
							aria-describedby="customer-error"
							onChange={handleChange}
							defaultValue={newDatos.profundo}
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.profundo &&
								state.errors.profundo.map((error: string) => (
									<p className="text-sm text-rose-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>

					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Button type="submit">Cargar</Button>
					</div>
				</div>
			</div>
		</form>
	);
}
