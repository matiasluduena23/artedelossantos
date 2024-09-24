import Navigation from "@/components/navigation";
import ProductDetails from "@/components/product-details";
import { Product } from "@/lib/definitions";

export default async function page({ params }: { params: { id: string } }) {
	const id = params.id;
	let product: Product | undefined;
	try {
		const res = await fetch(`https://fakestoreapi.com/products/${id}`);
		if (!res.ok) throw new Error("No find the product");
		product = await res.json();
	} catch (error) {
		console.error("Something went wrong,", error);
	}

	return (
		<>
			<Navigation />
			<section className="bg-gradient-to-r from-white from-0% to-50%  via-white via-50% bg-gray-200 min-h-screen">
				<div className="container">
					{product && <ProductDetails product={product} />}
				</div>
			</section>
		</>
	);
}
