import React from "react";
import { Cart, Product } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Dispatch, useContext } from "react";
import {
	CartContext,
	DistpatchContext,
	reducerAction,
} from "./providers/CartProvider";

export default function AddCartButtons({ product }: { product: Product }) {
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
		<div>
			{!state.find((i) => i.id === product.id) ? (
				<Button
					className="uppercase bg-black text-white hover:bg-balck hover:opacity-50"
					onClick={() =>
						dispatch({
							action: "addToCart",
							product: { ...product, cantidad: 1 },
						})
					}
				>
					Agregar al carro
				</Button>
			) : (
				<div className="flex items-center gap-8">
					<Button
						onClick={() => handleDecrement(product.id)}
						className="uppercase bg-black text-white hover:bg-balck hover:opacity-50"
					>
						<MinusIcon className="w-5" />
					</Button>
					<p>{state.filter((i) => i.id === product.id)[0].cantidad}</p>
					<Button
						className="uppercase bg-black text-white hover:bg-balck hover:opacity-50"
						onClick={() =>
							dispatch({
								action: "increment",
								id: product.id,
							})
						}
					>
						<PlusIcon className="w-5 text-white" />
					</Button>
				</div>
			)}
		</div>
	);
}
