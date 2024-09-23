"use client";

import { Product } from "@/lib/definitions";
import { useState } from "react";

export default function List() {
	const [cart, setCart] = useState<Product[]>(() =>
		JSON.parse(localStorage.getItem("checkout-arte") || "[]")
	);

	return (
		<div>
			{cart.map((item) => (
				<p key={item.id}>{item.title}</p>
			))}
		</div>
	);
}
