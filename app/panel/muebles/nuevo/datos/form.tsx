"use client";
import React from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { actionDatos, ErrorState } from "./action";

export default function FormDatos() {
	const initialState: ErrorState = { message: "", errors: {} };
	const [state, dispatch] = useFormState(actionDatos, initialState);
	console.log(state);
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
							aria-describedby="customer-error"
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.name &&
								state.errors.name.map((error: string) => (
									<p className="text-sm text-red-500" key={error}>
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
							aria-describedby="customer-error"
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.price &&
								state.errors.price.map((error: string) => (
									<p className="text-sm text-red-500" key={error}>
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
							aria-describedby="customer-error"
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.description &&
								state.errors.description.map((error: string) => (
									<p className="text-sm text-red-500" key={error}>
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
							aria-describedby="customer-error"
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.alto &&
								state.errors.alto.map((error: string) => (
									<p className="text-sm text-red-500" key={error}>
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
							aria-describedby="customer-error"
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.ancho &&
								state.errors.ancho.map((error: string) => (
									<p className="text-sm text-red-500" key={error}>
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
							aria-describedby="customer-error"
						/>
						<div id="customer-error" aria-live="polite" aria-atomic="true">
							{state.errors?.profundo &&
								state.errors.profundo.map((error: string) => (
									<p className="text-sm text-red-500" key={error}>
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
