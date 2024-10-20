"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
	{
		id: 1,
		name: "datos",
		route: "/panel/muebles/nuevo/datos",
	},
	{
		id: 2,
		name: "imagenes",
		route: "/panel/muebles/nuevo/imagenes",
	},
	{
		id: 3,
		name: "review",
		route: "/panel/muebles/nuevo/review",
	},
];

export function StepsNavigation() {
	const pathname = usePathname();
	const route = pathname.substring(pathname.lastIndexOf("/") + 1);
	return (
		<div className="grid grid-cols-3 justify-center items-center gap-4 max-w-md mx-auto ">
			{links.map((item) => (
				<Link
					key={item.id}
					href={item.route}
					className="flex flex-col items-center gap-2 capitalize"
				>
					{" "}
					{item.name}
					<Badge
						variant={"outline"}
						className={cn(
							"rounded-full w-8 h-8  flex items-center justify-center",
							route === item.name && "bg-primary text-white"
						)}
					>
						{item.id}
					</Badge>
				</Link>
			))}
		</div>
	);
}
