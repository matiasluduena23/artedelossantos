import prisma from '@/lib/prisma';
import { error } from 'console';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	const body: { id: string } = await request.json();

	if (body.id) {
		await prisma.mueble.delete({
			where: {
				id: body.id,
			},
		});
		revalidatePath('/panel/muebles');
		return Response.json({ message: 'Mueble eliminado' }, { status: 200 });
	} else {
		return Response.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
