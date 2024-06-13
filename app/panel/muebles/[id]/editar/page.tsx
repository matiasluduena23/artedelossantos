import prisma from '@/lib/prisma';
import React from 'react';
import FormEdit from './FormEdit';

export default async function page({ params }: { params: { id: string } }) {
	const id = params.id;
	const mueble = await prisma.mueble.findFirst({
		where: {
			id: id,
		},
	});

	return (
		<div>
			<h1>Editar Mueble</h1>
			<FormEdit mueble={mueble!} />
		</div>
	);
}
