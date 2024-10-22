"use client";

import React, { FormEvent, useState } from "react";
import ImageUpload from "../image-upload";
import { useUploadThing } from "@/lib/hooks/upload";
import { ImagesT } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import { useFormContext } from "@/lib/context/FormContext";

export default function FormImages() {
	const [images, setImages] = useState<ImagesT[]>([]);
	const [loading, setLoading] = useState(false);
	const { updateDatos } = useFormContext();

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
	return (
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
	);
}
