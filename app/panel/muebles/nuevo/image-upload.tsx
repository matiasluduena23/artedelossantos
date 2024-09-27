import ImageDropzone from "@/components/image-dropzone";
import { ImagesT } from "@/lib/definitions";
import React, { useState } from "react";
import { useUploadThing } from "@/lib/hooks/upload";
import ImageDragdropPosition from "@/components/image-dragdrop-position";

export default function ImageUpload() {
	const [images, setImages] = useState<ImagesT[]>([]);

	const { startUpload } = useUploadThing("imageUploader", {
		onClientUploadComplete: () => {
			console.log("uploaded successfully!");
		},
		onUploadError: () => {
			console.log("error occurred while uploading");
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
		<div>
			<ImageDropzone setImages={setImages} />
			<ImageDragdropPosition setImages={setImages} images={images} />
		</div>
	);
}
