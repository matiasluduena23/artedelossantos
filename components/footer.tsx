import {
	FacebookIcon,
	Instagram,
	InstagramIcon,
	MailIcon,
	PhoneIcon,
	YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

export default function Footer() {
	const MapOnClient = dynamic(() => import("./MapLocation"), {
		loading: () => <p>Loading...</p>,
		ssr: false,
	});
	return (
		<footer className="bg-black text-white py-20">
			<div className="container max-w-5xl">
				<div className="flex flex-col gap-12 sm:flex-row">
					<div className="flex flex-col space-y-8 sm:w-[50%]">
						<div className="space-y-2">
							<div className="font-serif text-3xl ">EC</div>
							<p className="max-w-[400px]">
								Puedes contactarnos por cualquiera de nuestros medios de
								comunicacion o escribiendonos en nuestras redes.
							</p>
						</div>
						<div className="space-y-2">
							<div className="flex items-center gap-4">
								<PhoneIcon />
								<p>0351 - 153437888</p>
							</div>
							<div className="flex items-center gap-4">
								<MailIcon />
								<p>ecommerce@commerce.com.ar</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<Link href={""} target="_blank">
								{" "}
								<Instagram />
							</Link>
							<Link href={""} target="_blank">
								{" "}
								<FacebookIcon />
							</Link>
							<Link href={""} target="_blank">
								{" "}
								<YoutubeIcon />
							</Link>
						</div>
					</div>
					<div className="sm:w-[50%]">
						<MapOnClient />
					</div>
				</div>
			</div>
		</footer>
	);
}
