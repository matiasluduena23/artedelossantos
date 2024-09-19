"use client";

import { Product } from "@/lib/definitions";
import React, { createContext, Dispatch, ReactNode, useReducer } from "react";

export const CartContext = createContext<Product[] | null>(null);

export const DistpatchContext = createContext<Dispatch<reducerAction> | null>(
	null
);

export default function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, []);
	return (
		<CartContext.Provider value={state}>
			<DistpatchContext.Provider value={dispatch}>
				<div>{children}</div>
			</DistpatchContext.Provider>
		</CartContext.Provider>
	);
}

type reducerAction =
	| { action: "addToCart"; product: Product }
	| { action: "remove"; id: number };

function reducer(stateCart: Product[], reducerAction: reducerAction) {
	switch (reducerAction.action) {
		case "addToCart":
			return [...stateCart, reducerAction.product];

		default:
			return [...stateCart.filter((item) => item.id !== reducerAction.id)];
	}
}
