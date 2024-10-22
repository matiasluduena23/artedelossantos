import { StepsNavigation } from "@/components/panel/muebles/step-navigation";
import FormProvider, { FormContext } from "@/lib/context/FormContext";
import React, { ReactNode } from "react";

export default function NuevoLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<StepsNavigation />

			<FormProvider>
				<div className="mt-20">
					<div>{children}</div>
				</div>
			</FormProvider>
		</div>
	);
}
