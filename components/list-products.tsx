"use client";

import { Product } from "@/lib/definitions";
import React, { useContext } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { CartContext, DistpatchContext } from "./providers/CartProvider";

export default function ListProducts({ products }: { products: Product[] }) {
	const dispatch = useContext(DistpatchContext)!;
	const state = useContext(CartContext)!;

	console.log(state);
	return (
		<div className="container">
			<div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
				{products.map((item) => (
					<Card key={item.id} className="max-w[300px] max-h-[400px]">
						<CardHeader>
							<CardTitle>{item.title.substring(0, 12)}</CardTitle>
						</CardHeader>
						<CardContent>
							<Image
								src={item.image}
								alt={item.title}
								width={120}
								height={100}
								className="mx-auto"
							/>
						</CardContent>
						<CardFooter className="flex flex-col gap-2 justify-start">
							<p className="bg-orange-100 text-orange-700 rounded-lg px-2">
								{item.category}
							</p>
							<p>${item.price.toLocaleString("es-AR")}</p>
							<Button
								onClick={() => {
									state.find((i) => i.id === item.id)
										? dispatch({ action: "remove", id: item.id })
										: dispatch({ action: "addToCart", product: item });
								}}
							>
								{state.find((i) => i.id === item.id)
									? "Quitar del carro"
									: "Agregar al carro"}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
