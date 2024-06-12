import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { DeleteDialog } from '@/components/panel/mueble/DeleteDialog';

export default async function page() {
	const muebles = await prisma.mueble.findMany({});

	return (
		<div>
			<h1>Muebles</h1>
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
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
					{muebles.map((mueble) => (
						<TableRow key={mueble.id}>
							<TableCell className="font-medium">
								{mueble.name}
							</TableCell>
							<TableCell>{mueble.price}</TableCell>
							<TableCell>{mueble.high}</TableCell>
							<TableCell className="text-right">
								{mueble.broad}
							</TableCell>
							<TableCell className="text-right">
								{mueble.deep}
							</TableCell>
							<TableCell className="text-right">
								<Link
									href={`/panel/muebles/${mueble.id}/editar`}
								>
									<Button variant={'outline'}>
										Modificar
									</Button>
								</Link>
							</TableCell>
							<TableCell className="text-right">
								<DeleteDialog
									id={mueble.id}
									nombre={mueble.name}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right">$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
			<Button>
				<Link href={'/panel/muebles/nuevo'}>Cargar Nuevo</Link>
			</Button>
		</div>
	);
}
