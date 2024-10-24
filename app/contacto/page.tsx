import Navigation from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { ReactNode } from "react";

export default function page() {
	return (
		<>
			<Navigation />
			<main className="my-20">
				<div className="container max-w-5xl">
					<h1 className="font-bold text-4xl mb-4">Contactanos</h1>
					<p className="text-gray-700 max-w-[700px]">
						Envianos cualquier consulta por nuestros medios de comunicacion o
						llegate a nuestro taller. En el dia te responderemos.
					</p>
					<div className="grid md:grid-cols-2 mt-12 gap-8 justify-center">
						{infoContact.map((item, index) => (
							<CardContat key={index} title={item.title} content={item.content}>
								{item.icon}
							</CardContat>
						))}
					</div>
				</div>
			</main>
		</>
	);
}

export function CardContat({
	children,
	title,
	content,
}: {
	children: ReactNode;
	title: string;
	content: string;
}) {
	return (
		<Card className="p-8 max-w-[400px]">
			<div className="flex items-center gap-4">
				<div className="bg-black rounded-lg p-2">{children}</div>
				<div>
					<strong>{title}</strong>
					<p className="text-gray-600">{content}</p>
				</div>
			</div>
		</Card>
	);
}

const infoContact = [
	{
		title: "Domicilio",
		content: "Alem 45 - Las Varillas Cordoba",
		icon: <MapPinIcon className="size-8 text-white" />,
	},
	{
		title: "Telefono",
		content: "351 - 153412562",
		icon: <PhoneIcon className="size-8 text-white" />,
	},
	{
		title: "Horario",
		content: " Lunes a Sabado - 9AM a 19PM",
		icon: <ClockIcon className="size-8 text-white" />,
	},
	{
		title: "Correo electronico",
		content: "miempresa@miempresa.com.ar",
		icon: <MailIcon className="size-8 text-white" />,
	},
];
