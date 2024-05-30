'use client';

import {
	UserGroupIcon,
	ComputerDesktopIcon,
	HomeModernIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'Home', href: '/panel', icon: ComputerDesktopIcon },
	{
		name: 'Muebles',
		href: '/panel/muebles',
		icon: HomeModernIcon,
	},
	{ name: 'Clientes', href: '/panel/clientes', icon: UserGroupIcon },
];

export default function NavLinks() {
	const pathName = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Button
						key={link.name}
						variant={pathName === link.href ? 'default' : 'outline'}
					>
						<Link
							href={link.href}
							className="flex items-center gap-2 justify-start w-full"
						>
							<LinkIcon className="w-6" />
							<p className="hidden md:block">{link.name}</p>
						</Link>
					</Button>
				);
			})}
		</>
	);
}
