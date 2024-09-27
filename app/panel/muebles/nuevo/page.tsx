"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createMueble } from "@/lib/actions";
import { FormEvent, useState } from "react";
import { useFormState } from "react-dom";
import ImageUpload from "./image-upload";
import { useUploadThing } from "@/lib/hooks/upload";
import { ImagesT } from "@/lib/definitions";

export default function Page() {
	const initialState = { message: "", errors: {} };
	const [state, dispatch] = useFormState(createMueble, initialState);
	const [images, setImages] = useState<ImagesT[]>([]);

	const { startUpload } = useUploadThing("imageUploader", {
		onClientUploadComplete: (res) => {
			console.log("uploaded successfully!", res);
		},
		onUploadError: (err) => {
			console.error("error occurred while uploading", err);
		},
		onUploadBegin: () => {
			console.log("upload has begun");
		},
	});

	const handleUpload = () => {
		if (images.length < 1) return;
		const files = images.map((item) => item.file);

		startUpload(files);
	};
	const onsubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		handleUpload();

		// dispatch(formData)
	};

	return (
		<div>
			<h1>Cargar Mueble</h1>
			<form onSubmit={onsubmit}>
				<div className="grid grid-cols-2 mt-8 relative">
					{state.message && (
						<p className="absolute -top-8 left-1/3 bg-red-500 w-fit text-white px-2 rounded-sm">
							{state.message}
						</p>
					)}
					<div className="space-y-4">
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="name">Nombre</Label>
							<Input
								type="text"
								id="name"
								name="name"
								placeholder="Nombre"
								aria-describedby="customer-error"
								required
							/>
							<div id="customer-error" aria-live="polite" aria-atomic="true">
								{state.errors?.name &&
									state.errors.name.map((error: string) => (
										<p className="text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="price">Precio</Label>
							<Input
								type="number"
								id="price"
								name="price"
								placeholder="Precio"
								aria-describedby="customer-error"
								required
							/>
							<div id="customer-error" aria-live="polite" aria-atomic="true">
								{state.errors?.price &&
									state.errors.price.map((error: string) => (
										<p className="text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>

						<div className="grid w-full max-w-sm gap-1.5">
							<Label htmlFor="description">Description</Label>
							<Textarea
								placeholder="Escriba una descripcion."
								id="description"
								name="description"
								aria-describedby="customer-error"
								required
							/>
							<div id="customer-error" aria-live="polite" aria-atomic="true">
								{state.errors?.description &&
									state.errors.description.map((error: string) => (
										<p className="text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>
					</div>
					<div className="space-y-4">
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="high">Alto</Label>
							<Input
								type="number"
								name="high"
								id="high"
								placeholder="Alto"
								aria-describedby="customer-error"
								required
							/>
							<div id="customer-error" aria-live="polite" aria-atomic="true">
								{state.errors?.high &&
									state.errors.high.map((error: string) => (
										<p className="text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="broad">Ancho</Label>
							<Input
								type="number"
								id="broad"
								name="broad"
								placeholder="Ancho"
								aria-describedby="customer-error"
								required
							/>
							<div id="customer-error" aria-live="polite" aria-atomic="true">
								{state.errors?.broad &&
									state.errors.broad.map((error: string) => (
										<p className="text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="deep">Profundidad</Label>
							<Input
								type="number"
								id="deep"
								name="deep"
								placeholder="Produndidad"
								aria-describedby="customer-error"
								required
							/>
							<div id="customer-error" aria-live="polite" aria-atomic="true">
								{state.errors?.deep &&
									state.errors.deep.map((error: string) => (
										<p className="text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>

						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Button type="submit">Cargar</Button>
						</div>
					</div>
					<ImageUpload images={images} setImages={setImages} />
				</div>
			</form>
		</div>
	);
}
