import ImageDropzone from "@/components/image-dropzone";
import { ImagesT } from "@/lib/definitions";
import React, { useState } from "react";
import ImageDragdropPosition from "@/components/image-dragdrop-position";

export default function ImageUpload({
	images,
	setImages,
}: {
	images: ImagesT[];
	setImages: React.Dispatch<React.SetStateAction<ImagesT[]>>;
}) {
	return (
		<div>
			<ImageDropzone setImages={setImages} />
			<ImageDragdropPosition setImages={setImages} images={images} />
		</div>
	);
}
