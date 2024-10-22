"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormContext } from "@/lib/context/FormContext";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function ViewDatos() {
	const { newDatos } = useFormContext();

	const imagesPath = newDatos.images ? newDatos.images : [];

	return (
		<Card className="max-w-lg mx-auto">
			<CardHeader>
				<CardTitle className="text-center">
					Chequear datos antes de cargar
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div>
					<div className="flex items-center justify-center gap-8">
						<div className="flex gap-1 items-center">
							<strong>Nombre: </strong> <p>{newDatos.name}</p>
						</div>
						<div className="flex gap-1 items-center">
							<strong>Precio: </strong> <p>$ {newDatos.price}</p>
						</div>
					</div>
					<Separator className="my-3" />
					<div className="flex items-center justify-center gap-8">
						<div className="flex gap-1 items-center">
							<strong>Alto: </strong> <p>{newDatos.alto}cm</p>
						</div>
						<div className="flex gap-1 items-center">
							<strong>Ancho: </strong> <p>{newDatos.ancho}cm</p>
						</div>
						<div className="flex gap-1 items-center">
							<strong>Profundo: </strong> <p>{newDatos.profundo}cm</p>
						</div>
					</div>
					<Separator className="my-3" />
				</div>
				<div className="flex gap-1 items-center">
					<strong>Descripcion: </strong> <p>{newDatos.description}</p>
				</div>
				<Separator className="my-3" />

				<div>
					<h2 className="text-center font-semibold mb-2">Imagenes</h2>
					<div className="flex justify-center items-center gap-2">
						{imagesPath.map((image, index) => (
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
				</div>
			</CardContent>
		</Card>
	);
}
