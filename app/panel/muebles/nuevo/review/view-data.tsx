"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useFormContext } from "@/lib/context/FormContext";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cargarNuevoMueble, StateForm } from "./action";
import { CreateMuebleT } from "@/lib/definitions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

export default function ViewDatos() {
	const router = useRouter();
	const initialState: StateForm = { state: "PENDING" };
	const { newDatos, reset } = useFormContext();
	const actionWithObj = cargarNuevoMueble.bind(null, newDatos as CreateMuebleT);
	const [formState, formAction] = useFormState(actionWithObj, initialState);

	const pathImages = newDatos.images || [];
	const [error, setError] = useState(() => {
		const setError = Array.from(Object.entries(newDatos));
		return setError.flat().includes("") || pathImages.length < 1;
	});

	useEffect(() => {
		if (formState.state === "ERROR") {
			setError(true);
		}
		if (formState.state === "SUCCESS") {
			reset();
			router.push("/panel/muebles");
		}
	}, [formState.state, reset, router]);

	return (
		<Card className="max-w-lg mx-auto">
			<CardHeader>
				<CardTitle className="text-center">
					Chequear datos antes de cargar
				</CardTitle>
				<CardDescription>
					{error && (
						<span className="text-center text-rose-500 block">
							Faltan completar los campos resaltados
						</span>
					)}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div>
					<div className="flex items-center justify-center gap-8">
						<div className="flex gap-1 items-center">
							<strong className={`${!newDatos.name && "text-rose-500"}`}>
								Nombre:{" "}
							</strong>{" "}
							<p>{newDatos.name}</p>
						</div>
						<div className="flex gap-1 items-center">
							<strong className={`${!newDatos.price && "text-rose-500"}`}>
								Precio:{" "}
							</strong>{" "}
							<p>$ {newDatos.price}</p>
						</div>
					</div>
					<Separator className="my-3" />
					<div className="flex items-center justify-center gap-8">
						<div className="flex gap-1 items-center">
							<strong className={`${!newDatos.alto && "text-rose-500"}`}>
								Alto:{" "}
							</strong>{" "}
							<p>{newDatos.alto}cm</p>
						</div>
						<div className="flex gap-1 items-center">
							<strong className={`${!newDatos.ancho && "text-rose-500"}`}>
								Ancho:{" "}
							</strong>{" "}
							<p>{newDatos.ancho}cm</p>
						</div>
						<div className="flex gap-1 items-center">
							<strong className={`${!newDatos.profundo && "text-rose-500"}`}>
								Profundo:{" "}
							</strong>{" "}
							<p>{newDatos.profundo}cm</p>
						</div>
					</div>
					<Separator className="my-3" />
				</div>
				<div className="flex gap-1 items-center">
					<strong className={`${!newDatos.description && "text-rose-500"}`}>
						Descripcion:{" "}
					</strong>{" "}
					<p>{newDatos.description}</p>
				</div>
				<Separator className="my-3" />

				<div>
					<h2 className="text-center font-semibold mb-2">Imagenes</h2>
					{pathImages.length < 1 ? (
						<p className="text-rose-500 text-center">
							Debe cargar los imagenes del producto en la pestana Imagenes.
						</p>
					) : (
						<div className="flex justify-center items-center gap-2">
							{pathImages.map((image, index) => (
								<Image
									key={index}
									src={image}
									alt="mueble"
									width={100}
									height={100}
									className="object-cover w-[100px] h-[100px]"
								/>
							))}
						</div>
					)}
				</div>
			</CardContent>
			<div>
				<form action={formAction}>
					<Button className="mx-auto block mb-4" disabled={error}>
						Cargar
					</Button>
				</form>
			</div>
		</Card>
	);
}
