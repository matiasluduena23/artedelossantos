"use client";

import React, { useContext, useEffect } from "react";
import { CartContext } from "./providers/CartProvider";
import { CartPopover } from "./cart-popover";
import { Cart } from "@/lib/definitions";
import Link from "next/link";

export default function Navigation() {
	const state = useContext(CartContext) as Cart[];

	return (
		<header className="bg-black text-white p-4">
			<div className="container">
				<nav className="flex justify-between items-center">
					<div>logo</div>
					<ul className="flex justify-between items-center gap-8">
						<li>
							<Link href="/">Inicio</Link>
						</li>
						<li>
							<Link href="/">Productos</Link>
						</li>
						<li>
							<a href="">Contacto</a>
						</li>
						<div className="relative">
							{" "}
							<CartPopover />
							{state.length > 0 && (
								<span className="absolute -bottom-2 -right-2 rounded-full w-6 h-6 p-2 bg-primary text-white flex items-center justify-center">
									{state.length}
								</span>
							)}
						</div>
					</ul>
				</nav>
			</div>
		</header>
	);
}
