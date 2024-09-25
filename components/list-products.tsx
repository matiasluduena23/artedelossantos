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
import Link from "next/link";
import AddCartButtons from "./add-cart-buttons";

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
					<Link key={item.id} href={`/producto/${item.id}`}>
						<Card className=" h-[380px] cursor-pointer">
							<CardHeader>
								<CardTitle className="text-center">
									{item.title.substring(0, 10)}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<Image
									src={item.image}
									alt={item.title}
									width={120}
									height={200}
									className="mx-auto w-[120px] h-[200px] object-contain"
								/>
							</CardContent>
							<CardFooter className="flex flex-col gap-2 justify-start">
								<p className="bg-orange-100 text-orange-700 rounded-lg px-2">
									{item.category}
								</p>
								<p>${item.price.toLocaleString("es-AR")}</p>
							</CardFooter>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
