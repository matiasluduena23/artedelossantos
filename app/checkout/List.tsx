"use client";

import { Separator } from "@/components/ui/separator";
import { Product } from "@/lib/definitions";
import Image from "next/image";

import { useState } from "react";

export function List() {
	const [cart, setCart] = useState<Product[]>(() =>
		JSON.parse(localStorage.getItem("checkout-arte") || "[]")
	);

	return (
		<div className="bg-gray-50 p-8 w-fit mx-auto max-w-md">
			<h2 className="text-center font-semibold mb-4">RESUMEN DE LA COMPRA</h2>

			{cart.map((item) => (
				<>
					<Separator className="my-4" />
					<ProductItem product={item} key={item.id} />
				</>
			))}
			<Separator className="my-4" />
			<div className="flex justify-between items-center font-semibold">
				<p>Total: </p>
				<p>
					$
					{cart
						.reduce((acc, prev) => acc + prev.price, 0)
						.toLocaleString("es-AR")}{" "}
				</p>
			</div>
		</div>
	);
}

export function ProductItem({ product }: { product: Product }) {
	return (
		<article className="flex items-center justify-between  gap-8">
			<Image src={product.image} alt={product.title} height={50} width={50} />
			<div>
				<p>{product.title.substring(0, 30)}</p>
				<div></div>
			</div>

			<strong>${product.price.toLocaleString("es-AR")}</strong>
		</article>
	);
}
