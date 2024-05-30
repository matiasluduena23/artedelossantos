import Link from 'next/link';

import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './nav-links';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<Card className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40">
				<Link href="/panel"></Link>
			</Card>

			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<div></div>
				<Card className="hidden h-auto w-full grow rounded-md md:block "></Card>
				<form>
					<Button
						className="flex items-center justify-start gap-2 w-full hover:bg-primary hover:text-background"
						variant={'secondary'}
					>
						<PowerIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</Button>
				</form>
			</div>
		</div>
	);
}
