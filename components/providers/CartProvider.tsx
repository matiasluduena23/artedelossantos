"use client";

import { Cart, Product } from "@/lib/definitions";
import React, {
	createContext,
	Dispatch,
	ReactNode,
	useEffect,
	useReducer,
} from "react";

export const CartContext = createContext<Cart[] | null>(null);

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

export type reducerAction =
	| { action: "addToCart"; product: Cart }
	| { action: "remove"; id: number }
	| { action: "increment"; id: number }
	| { action: "decrement"; id: number }
	| { action: "getFromLocalStorage"; products: Cart[] };

function reducer(stateCart: Cart[], reducerAction: reducerAction) {
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
		case "increment": {
			const newState = [
				...stateCart.map((item) => {
					if (item.id === reducerAction.id) {
						return { ...item, cantidad: item.cantidad + 1 };
					} else {
						return item;
					}
				}),
			];
			localStorage.setItem("checkout-arte", JSON.stringify(newState));
			return newState;
		}
		case "decrement": {
			const newState = [
				...stateCart.map((item) => {
					if (item.id === reducerAction.id) {
						return { ...item, cantidad: item.cantidad - 1 };
					} else {
						return item;
					}
				}),
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
