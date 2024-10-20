import { StepsNavigation } from "@/components/panel/muebles/step-navigation";
import React, { ReactNode } from "react";

export default function NuevoLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<StepsNavigation />

			<div className="mt-20">
				<div>{children}</div>
			</div>
		</div>
	);
}
