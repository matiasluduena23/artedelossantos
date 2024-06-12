import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const result = await prisma.mueble.createMany({
		data: [
			{
				name: 'silla nordica',
				price: 20000,
				description:
					'Buenas charlas y buena compañía traen buenas sobremesas, y para conseguir todo eso buscamos sentirnos acogidos y relajados. Comodidad, durabilidad y estética son algunos de los pilares con los que basamos las compras de nuestras sillas para el comedor. Contar con una silla Baires4 Milán hará en esos lugares, espacios únicos de tu hogar.',
				high: 200,
				broad: 70,
				deep: 50,
			},
			{
				name: 'bajo mesada',
				price: 70000,
				description:
					'Buenas charlas y buena compañía traen buenas sobremesas, y para conseguir todo eso buscamos sentirnos acogidos y relajados. Comodidad, durabilidad y estética son algunos de los pilares con los que basamos las compras de nuestras sillas para el comedor. Contar con una silla Baires4 Milán hará en esos lugares, espacios únicos de tu hogar.',
				high: 500,
				broad: 230,
				deep: 120,
			},
			{
				name: 'ropero',
				price: 50000,
				description:
					'Buenas charlas y buena compañía traen buenas sobremesas, y para conseguir todo eso buscamos sentirnos acogidos y relajados. Comodidad, durabilidad y estética son algunos de los pilares con los que basamos las compras de nuestras sillas para el comedor. Contar con una silla Baires4 Milán hará en esos lugares, espacios únicos de tu hogar.',
				high: 180,
				broad: 230,
				deep: 70,
			},
			{
				name: 'mesa',
				price: 9000,
				description:
					'Buenas charlas y buena compañía traen buenas sobremesas, y para conseguir todo eso buscamos sentirnos acogidos y relajados. Comodidad, durabilidad y estética son algunos de los pilares con los que basamos las compras de nuestras sillas para el comedor. Contar con una silla Baires4 Milán hará en esos lugares, espacios únicos de tu hogar.',
				high: 60,
				broad: 80,
				deep: 80,
			},
		],
	});
	console.log(result);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
