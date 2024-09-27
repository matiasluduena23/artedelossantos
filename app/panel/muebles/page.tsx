import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { DeleteDialog } from "@/components/panel/muebles/DeleteDialog";
import { Mueble } from "@prisma/client";

export default async function page() {
	const muebles: Mueble[] | undefined = [];
	try {
		const data = await prisma.mueble.findMany({});
		muebles.push(...data);
	} catch (error) {
		console.log(error);
	}

	return (
		<div>
			<h1>Muebles</h1>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Nombre</TableHead>
						<TableHead>Precio</TableHead>
						<TableHead>Alto</TableHead>
						<TableHead>Ancho</TableHead>
						<TableHead>Profundidad</TableHead>

						<TableHead>Modificar</TableHead>
						<TableHead>Eliminar</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{muebles.length > 0 &&
						muebles.map((mueble) => (
							<TableRow key={mueble.id}>
								<TableCell className="font-medium">{mueble.name}</TableCell>
								<TableCell>{mueble.price}</TableCell>
								<TableCell>{mueble.alto}</TableCell>
								<TableCell className="text-right">{mueble.ancho}</TableCell>
								<TableCell className="text-right">{mueble.profundo}</TableCell>
								<TableCell className="text-right">
									<Link href={`/panel/muebles/${mueble.id}/editar`}>
										<Button variant={"outline"}>Modificar</Button>
									</Link>
								</TableCell>
								<TableCell className="text-right">
									<DeleteDialog id={mueble.id} nombre={mueble.name} />
								</TableCell>
							</TableRow>
						))}
				</TableBody>
				<TableFooter>
					<TableRow>
						{muebles.length < 1 ? (
							<TableCell colSpan={7} className="text-center">
								No hay muebles para mostrar
							</TableCell>
						) : (
							<>
								<TableCell colSpan={3}>Total</TableCell>
								<TableCell className="text-right">$2,500.00</TableCell>
							</>
						)}
					</TableRow>
				</TableFooter>
			</Table>
			<Button className="mt-12">
				<Link href={"/panel/muebles/nuevo"}>Cargar Nuevo</Link>
			</Button>
		</div>
	);
}
