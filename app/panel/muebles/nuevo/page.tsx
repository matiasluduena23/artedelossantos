import { redirect } from "next/navigation";

export default function Page() {
	redirect("/panel/muebles/nuevo/datos");
	return <div></div>;
}
