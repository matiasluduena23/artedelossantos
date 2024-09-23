"use client";

import { Cart, Product } from "@/lib/definitions";
import React, { Dispatch, useContext } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import {
	CartContext,
	DistpatchContext,
	reducerAction,
} from "./providers/CartProvider";

export default function ListProducts({ products }: { products: Product[] }) {
	const dispatch = useContext(DistpatchContext) as Dispatch<reducerAction>;
	const state = useContext(CartContext) as Cart[];

	const handleDecrement = (id: number) => {
		state.filter((i) => i.id === id)[0].cantidad > 1
			? dispatch({
					action: "decrement",
					id,
			  })
			: dispatch({
					action: "remove",
					id,
			  });
	};

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

							{!state.find((i) => i.id === item.id) ? (
								<Button
									onClick={() =>
										dispatch({
											action: "addToCart",
											product: { ...item, cantidad: 1 },
										})
									}
								>
									Agregar al carro
								</Button>
							) : (
								<div className="flex items-center gap-8">
									<Button onClick={() => handleDecrement(item.id)}>-</Button>
									<p>{state.filter((i) => i.id === item.id)[0].cantidad}</p>
									<Button
										onClick={() =>
											dispatch({
												action: "increment",
												id: item.id,
											})
										}
									>
										+
									</Button>
								</div>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
