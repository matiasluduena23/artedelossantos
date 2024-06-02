import { Button } from '@/components/ui/button';
import { PlusIcon, StarIcon, MinusIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Image from 'next/image';

export default function page() {
	return (
		<section className="bg-gradient-to-r from-white from-0% to-50%  via-white via-50% bg-gray-200 min-h-screen">
			<div className="container m-auto ">
				<div className="flex justify-evenly items-center pt-12">
					<section className="w-[50%] flex flex-col items-center justify-center">
						<Image
							src="/silla1.jpg"
							alt=""
							width={300}
							height={400}
						/>
						<div className="flex items-center gap-2">
							<Button
								variant={'outline'}
								className="h-[85px] p-2 hover:border-orange-400 hover:bg-white"
							>
								<Image
									src="/silla1.jpg"
									alt="silla"
									width={50}
									height={40}
								/>
							</Button>
							<Button
								variant={'outline'}
								className="h-[85px] p-2 hover:border-orange-400 hover:bg-white"
							>
								<Image
									src="/silla2.jpg"
									alt="silla"
									width={50}
									height={40}
								/>
							</Button>
							<Button
								variant={'outline'}
								className="h-[85px] p-2 hover:border-orange-400 hover:bg-white"
							>
								<Image
									src="/silla3.jpg"
									alt="silla"
									width={50}
									height={40}
								/>
							</Button>
							<Button
								variant={'outline'}
								className="h-[85px] p-2 hover:border-orange-400 hover:bg-white"
							>
								<Image
									src="/silla4.jpg"
									alt="silla"
									width={50}
									height={40}
								/>
							</Button>
						</div>
					</section>
					<section className="flex flex-col justify-start gap-2 w-[50%] px-28 max-w-[600px]">
						<span className="uppercase text-[12px] opacity-50">
							silla premium
						</span>
						<h1 className="font-bold text-2xl">
							Silla vintage stumplet
						</h1>
						<div className="flex my-2 gap-2 items-center text-sm">
							<StarIcon className="w-4  " />
							<p className="font-semibold">
								8/10{' '}
								<span className="font-normal opacity-50">
									- Puntos
								</span>
							</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quis nesciunt et deserunt exercitationem eos
							rem delectus veniam consequuntur dolore molestiae.
						</p>
						<div className="flex border border-gray-700  p-2 max-w-[300px] my-4">
							<div className="w-[33%] flex flex-col items-start justify-center  border-r border-gray-600 mx-auto">
								<p className="opacity-60 uppercase text-[12px]">
									Alto
								</p>
								<p className="font-semibold">
									130{' '}
									<span className="font-normal text-[10px]">
										cm
									</span>
								</p>
							</div>
							<div className="w-[33%] flex flex-col items-start px-2 border-r border-gray-600  ">
								<p className="opacity-60 uppercase text-[12px]">
									Ancho
								</p>
								<p className="font-semibold ">
									80{' '}
									<span className="font-normal text-[10px]">
										cm
									</span>
								</p>
							</div>
							<div className="w-[33%] flex flex-col items-start justify-center   px-2">
								<p className="opacity-60 uppercase text-[12px]">
									Profundo
								</p>
								<p className="font-semibold">
									60{' '}
									<span className="font-normal text-[10px]">
										cm
									</span>
								</p>
							</div>
						</div>
						<p className="text-xl font-bold">$40.000</p>
						<div className="flex items-center gap-3 my-6">
							<Button className="bg-gray-200 text-black border border-black hover:bg-gray-200 hover:opacity-50 p-0 h-8 w-8">
								<MinusIcon className="w-5" />
							</Button>
							<p className="text-xl font-bold">1</p>
							<Button className="bg-black text-white border border-black hover:bg-black hover:opacity-50 p-0 h-8 w-8">
								<PlusIcon className="w-5 text-white" />
							</Button>
						</div>
						<div className="flex items-center gap-3 mt-2">
							<Button className="uppercase bg-white text-black hover:bg-gray-50">
								Al Carrito
							</Button>
							<Button className="uppercase bg-black text-white hover:bg-balck hover:opacity-50">
								Comprar
							</Button>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}
