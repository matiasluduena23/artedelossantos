'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

export function DeleteDialog({ id, nombre }: { id: string; nombre: string }) {
	const [open, setOpen] = useState(false);

	const idMueble = {
		id: id,
	};

	const handleClick = () => {
		fetch('http://localhost:3000/panel/muebles/eliminar', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(idMueble),
		})
			.then((res) => res.json())
			.then(() => {
				setOpen(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="destructive">Eliminar</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[350px] flex flex-col gap-12 ">
				<DialogHeader>
					<DialogTitle>Desea eliminar {nombre}</DialogTitle>
				</DialogHeader>

				<DialogFooter className="flex gap-4 ">
					<Button
						variant={'secondary'}
						onClick={() => setOpen(false)}
					>
						Volver
					</Button>
					<Button variant="destructive" onClick={handleClick}>
						Eliminar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
