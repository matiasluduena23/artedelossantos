import ListProducts from "@/components/list-products";
import Navigation from "@/components/navigation";
import CartProvider from "@/components/providers/CartProvider";
import { Product } from "@/lib/definitions";

export default async function Home() {
	let data: Product[] = [];
	try {
		const res = await fetch("https://fakestoreapi.com/products");
		if (!res.ok) throw new Error("Server Error");
		const result = await res.json();
		data = [...result];
	} catch (error) {
		console.log(error);
	}

	return (
		<main>
			<Navigation />
			<h1 className="text-center text-3xl my-8">Arte de los santos</h1>
			<ListProducts products={data} />
		</main>
	);
}
