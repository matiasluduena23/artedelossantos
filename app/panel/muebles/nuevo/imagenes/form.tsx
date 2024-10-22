"use client";

import React, { FormEvent, useState } from "react";
import ImageUpload from "../image-upload";
import { useUploadThing } from "@/lib/hooks/upload";
import { ImagesT } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import { useFormContext } from "@/lib/context/FormContext";
import Image from "next/image";

export default function FormImages() {
	const [images, setImages] = useState<ImagesT[]>([]);
	const [loading, setLoading] = useState(false);
	const { updateDatos, newDatos } = useFormContext();

	const { startUpload } = useUploadThing("imageUploader", {
		onClientUploadComplete: (res) => {
			console.log("uploaded successfully!", res);
			const imagePath = res.map((item) => item.url);
			updateDatos({ images: imagePath });
			setLoading(false);
		},
		onUploadError: (err) => {
			console.error("error occurred while uploading", err);
		},
		onUploadBegin: () => {
			console.log("upload has begun");
		},
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (images.length < 1) return;
		setLoading(true);
		const files = images.map((item) => item.file);

		startUpload(files);
	};
	const imagesPath = newDatos.images ? newDatos.images : [];

	return (
		<div>
			{imagesPath.length > 0 ? (
				<div className="flex justify-center flex-col items-center gap-8">
					<div className="flex justify-center items-center gap-2">
						{imagesPath.map((image, index) => (
							<Image
								key={index}
								src={image}
								alt="mueble"
								width={100}
								height={100}
								className="object-cover w-[100px] h-[100px]"
							/>
						))}
					</div>
					<Button onClick={() => updateDatos({ images: [] })}>
						Change images
					</Button>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="flex justify-center flex-col ">
					<ImageUpload images={images} setImages={setImages} />
					<Button className="mt-8 w-fit mx-auto " disabled={loading}>
						{loading ? (
							<LoaderCircleIcon className="animate-spin" />
						) : (
							"Cargar Imagenes"
						)}
					</Button>
				</form>
			)}
		</div>
	);
}
