import { z } from "zod";
import { createMuebleSchema } from "./schemas";

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	image: string;
	rating: Rating;
}

export enum Category {
	Electronics = "electronics",
	Jewelery = "jewelery",
	MenSClothing = "men's clothing",
	WomenSClothing = "women's clothing",
}

export interface Rating {
	rate: number;
	count: number;
}

export interface Cart extends Product {
	cantidad: number;
}

export type ImagesT = { id: string; url: string; file: File };

export type CreateMuebleT = z.infer<typeof createMuebleSchema>;
