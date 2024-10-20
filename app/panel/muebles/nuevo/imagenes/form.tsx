"use client";

import React, { useState } from "react";
import ImageUpload from "../image-upload";
import { useUploadThing } from "@/lib/hooks/upload";
import { ImagesT } from "@/lib/definitions";

export default function FormImages() {
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
	return (
		<form action="">
			<ImageUpload images={images} setImages={setImages} />
		</form>
	);
}
