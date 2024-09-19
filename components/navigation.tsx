"use client";

import React, { useContext } from "react";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { CartContext } from "./providers/CartProvider";

export default function Navigation() {
	const state = useContext(CartContext)!;

	return (
		<header className="bg-black text-white p-4">
			<div className="container">
				<nav className="flex justify-between items-center">
					<div>logo</div>
					<ul className="flex justify-between items-center gap-8">
						<li>
							<a href="">Inicio</a>
						</li>
						<li>
							<a href="">Productos</a>
						</li>
						<li>
							<a href="">Contacto</a>
						</li>
						<Button variant={"outline"} className="relative">
							{" "}
							<ShoppingBagIcon className="text-black" />
							{state.length > 0 && (
								<span className="absolute -bottom-2 -right-2 rounded-full w-6 h-6 p-2 bg-primary text-white flex items-center justify-center">
									{state.length}
								</span>
							)}
						</Button>
					</ul>
				</nav>
			</div>
		</header>
	);
}
