import Footer from "@/components/footer";
import ListProducts from "@/components/list-products";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { Product } from "@/lib/definitions";
import { MessageCircleIcon } from "lucide-react";
import WhatsappIcon from "@/components/ui/WhatsappIcon";

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
		<main className="relative">
			<Navigation />
			<h1 className="text-center text-3xl py-8">E-commerce</h1>
			<ListProducts products={data} />

			<div className="fixed bottom-10 right-8 z-20">
				<Link href={"https://wa.me/15551234567"} target="_blank">
					<WhatsappIcon width={40} height={40} />
				</Link>
			</div>
		</main>
	);
}
