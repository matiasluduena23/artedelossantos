import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingBagIcon, Trash2Icon } from "lucide-react";
import { useContext } from "react";
import { CartContext, DistpatchContext } from "./providers/CartProvider";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

export function CartPopover() {
	const state = useContext(CartContext)!;
	const dispatch = useContext(DistpatchContext)!;
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
							<div key={item.id} className="flex gap-4 items-center">
								<Image
									src={item.image}
									alt={item.title}
									width={30}
									height={30}
								/>
								<p className="text-gray-500 text-sm">
									{item.title.substring(0, 20)}
								</p>
								<div className="flex flex-col gap-2 items-end">
									<Button
										variant={"ghost"}
										onClick={() => dispatch({ action: "remove", id: item.id })}
									>
										<Trash2Icon />
									</Button>
									<p className="text-gray-500">${item.price}</p>
								</div>
							</div>
						))}
						<Separator className="my-4" />
						<div className="flex justify-between items-center font-semibold">
							<p>Total:</p>
							<p>
								{" "}
								${state.reduce((acc, prev) => acc + prev.price, 0).toFixed(2)}
							</p>
						</div>
						<Button className="w-full bg-black hover:bg-blac hover:opacity-70">
							<Link
								href={{
									pathname: "/checkout",
									query: {
										search: "jdlkfsljlkfjsdlk",
									},
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
