"use client";

import { Product } from "@/lib/definitions";
import React, {
	createContext,
	Dispatch,
	ReactNode,
	useEffect,
	useReducer,
} from "react";

export const CartContext = createContext<Product[] | null>(null);

export const DistpatchContext = createContext<Dispatch<reducerAction> | null>(
	null
);

export default function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		dispatch({
			action: "getFromLocalStorage",
			products: JSON.parse(localStorage.getItem("checkout-arte") || "[]"),
		});
	}, []);

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
	| { action: "remove"; id: number }
	| { action: "getFromLocalStorage"; products: Product[] };

function reducer(stateCart: Product[], reducerAction: reducerAction) {
	switch (reducerAction.action) {
		case "addToCart": {
			const newState = [...stateCart, reducerAction.product];
			localStorage.setItem("checkout-arte", JSON.stringify(newState));
			return newState;
		}

		case "remove": {
			const newState = [
				...stateCart.filter((item) => item.id !== reducerAction.id),
			];
			localStorage.setItem("checkout-arte", JSON.stringify(newState));
			return newState;
		}
		case "getFromLocalStorage": {
			return [...reducerAction.products];
		}

		default:
			return stateCart;
	}
}
