import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingBagIcon, Trash2Icon } from "lucide-react";
import { Dispatch, useContext } from "react";
import {
	CartContext,
	DistpatchContext,
	reducerAction,
} from "./providers/CartProvider";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Cart } from "@/lib/definitions";

export function CartPopover() {
	const state = useContext(CartContext) as Cart[];

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">
					<ShoppingBagIcon className="text-black" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-60 mr-4">
				<h2 className="text-center text-xl mb-2">Mi Compra</h2>
				{state.length > 0 ? (
					<div className="space-y-2">
						{state.map((item) => (
							<CartItem key={item.id} cart={item} />
						))}
						<Separator className="my-4" />
						<div className="flex justify-between items-center font-semibold">
							<p>Total:</p>
							<p>
								{" "}
								$
								{state
									.reduce((acc, prev) => acc + prev.price * prev.cantidad, 0)
									.toFixed(2)}
							</p>
						</div>
						<Button className="w-full bg-black hover:bg-blac hover:opacity-70">
							<Link
								href={{
									pathname: "/checkout",
								}}
							>
								Finalizar Compra
							</Link>
						</Button>
					</div>
				) : (
					<p className="text-gray-400 text-center py-8">Tu carro esta vacio.</p>
				)}
			</PopoverContent>
		</Popover>
	);
}

function CartItem({ cart }: { cart: Cart }) {
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
		<div className="flex gap-4 items-center">
			<Image src={cart.image} alt={cart.title} width={30} height={30} />
			<div className="flex flex-col items-center gap-1">
				<p className="text-gray-500 text-[12px] text-center">
					{cart.title.substring(0, 20)}
				</p>
				<div className="flex items-center gap-1 border rounded-3xl w-fit">
					<Button
						variant={"ghost"}
						className="overflow-hidden block rounded-l-3xl px-3 hover:bg-slate-100"
						onClick={() => handleDecrement(cart.id)}
					>
						-
					</Button>
					<span>{cart.cantidad}</span>
					<Button
						variant={"ghost"}
						className="overflow-hidden block rounded-r-3xl px-3 hover:bg-slate-100"
						onClick={() =>
							dispatch({
								action: "increment",
								id: cart.id,
							})
						}
					>
						+
					</Button>
				</div>
			</div>
			<div className="flex flex-col gap-2 carts-end">
				<Button
					variant={"ghost"}
					onClick={() => dispatch({ action: "remove", id: cart.id })}
				>
					<Trash2Icon />
				</Button>
				<p className="text-gray-500">${cart.price}</p>
			</div>
		</div>
	);
}
