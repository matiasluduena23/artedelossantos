"use client";

import { Cart, Product } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import AddCartButtons from "./add-cart-buttons";
import { useState } from "react";

export default function ProductDetails({ product }: { product: Product }) {
	const imagesArray = [
		product.image,
		"/silla2.jpg",
		"/silla3.jpg",
		"/silla4.jpg",
	];
	const [image, setImage] = useState(product.image);

	return (
		<div>
			<section className="">
				<div className="mx-auto bg-gray-300 p-4 w-[300px] h-[400px]">
					<Image
						src={image}
						alt=""
						width={150}
						height={300}
						className=" w-full h-full object-cover"
					/>
				</div>

				<div className="flex items-center gap-2 p-2 justify-center">
					{imagesArray.map((item, index) => (
						<Button
							key={index}
							variant={"outline"}
							className="h-[85px]   hover:border-orange-400 hover:bg-white border border-gray-300"
							onClick={() => setImage(item)}
						>
							<Image
								src={item}
								alt="silla"
								width={40}
								height={30}
								className="overflow-hidden"
							/>
						</Button>
					))}
				</div>
			</section>
			<section className="">
				<span className="uppercase text-[12px] opacity-50">
					{product.category}
				</span>
				<h1 className="font-bold text-2xl">{product.title}</h1>
				<div className="flex my-2 gap-2 items-center text-sm">
					<StarIcon className="w-4  " />
					<p className="font-semibold">
						8/10 <span className="font-normal opacity-50">- Puntos</span>
					</p>
				</div>
				<p>{product.description}</p>
				<div className="flex border border-gray-700  p-2 max-w-[300px] my-4">
					<div className="w-[33%] flex flex-col items-start justify-center  border-r border-gray-600 mx-auto">
						<p className="opacity-60 uppercase text-[12px]">Alto</p>
						<p className="font-semibold">
							130 <span className="font-normal text-[10px]">cm</span>
						</p>
					</div>
					<div className="w-[33%] flex flex-col items-start px-2 border-r border-gray-600  ">
						<p className="opacity-60 uppercase text-[12px]">Ancho</p>
						<p className="font-semibold ">
							80 <span className="font-normal text-[10px]">cm</span>
						</p>
					</div>
					<div className="w-[33%] flex flex-col items-start justify-center   px-2">
						<p className="opacity-60 uppercase text-[12px]">Profundo</p>
						<p className="font-semibold">
							60 <span className="font-normal text-[10px]">cm</span>
						</p>
					</div>
				</div>
				<p className="text-xl font-bold">$40.000</p>
				<AddCartButtons product={product} />
			</section>
		</div>
	);
}
