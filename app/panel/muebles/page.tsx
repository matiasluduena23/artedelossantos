import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<div>
			<h1>Muebles</h1>
			<Button>
				<Link href={'/panel/muebles/nuevo'}>Cargar Nuevo</Link>
			</Button>
		</div>
	);
}
