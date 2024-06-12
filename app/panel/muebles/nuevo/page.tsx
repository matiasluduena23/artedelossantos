import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createMueble } from '@/lib/actions';
import React from 'react';

export default function page() {
	return (
		<div>
			<h1>Cargar Mueble</h1>
			<form action={createMueble}>
				<div className="grid grid-cols-2 mt-8">
					<div className="space-y-4">
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="name">Nombre</Label>
							<Input
								type="text"
								id="name"
								name="name"
								placeholder="Nombre"
								required
							/>
						</div>
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="price">Precio</Label>
							<Input
								type="number"
								id="price"
								name="price"
								placeholder="Precio"
								required
							/>
						</div>

						<div className="grid w-full max-w-sm gap-1.5">
							<Label htmlFor="description">Description</Label>
							<Textarea
								placeholder="Escriba una descripcion."
								id="description"
								name="description"
								required
							/>
						</div>
					</div>
					<div className="space-y-4">
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="high">Alto</Label>
							<Input
								type="number"
								name="high"
								id="high"
								placeholder="Alto"
								required
							/>
						</div>
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="broad">Ancho</Label>
							<Input
								type="number"
								id="broad"
								name="broad"
								placeholder="Ancho"
								required
							/>
						</div>
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="deep">Profundidad</Label>
							<Input
								type="number"
								id="deep"
								name="deep"
								placeholder="Produndidad"
								required
							/>
						</div>
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Button type="submit">Cargar</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
