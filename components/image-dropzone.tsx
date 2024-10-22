import { ImagesT } from "@/lib/definitions";
import React, { useCallback } from "react";
import { FileError, useDropzone } from "react-dropzone";

export default function ImageDropzone({
	setImages,
}: {
	setImages: React.Dispatch<React.SetStateAction<ImagesT[]>>;
}) {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			setImages(
				acceptedFiles.map((file) => {
					return {
						id: file.name,
						url: URL.createObjectURL(file),
						file,
					};
				})
			);
		},
		[setImages]
	);

	const { getRootProps, getInputProps, isDragActive, fileRejections } =
		useDropzone({
			onDrop,
			maxFiles: 4,
		});

	const fileRejectionItems = fileRejections.map(({ file, errors }) => {
		return (
			<li key={file.size}>
				<ul>
					{errors.map((e) => (
						<li key={e.code}>{errorMessage(e)}</li>
					))}
				</ul>
			</li>
		);
	});

	return (
		<div
			{...getRootProps()}
			className="bg-slate-50 min-h-[200px] flex flex-col max-w-md mx-auto items-center justify-center rounded-lg border-dashed border-gray-400 border-2 text-sm text-center"
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<>
					<p className="text-balance text-gray-800">
						Arrastre aqui las imagenes, o click para abrir el explorador
					</p>
					<em className="text-gray-500">(maximo 4 imagenes)</em>
				</>
			)}

			<div className="text-white">
				<ul>{fileRejectionItems}</ul>
			</div>
		</div>
	);
}

function errorMessage(code: FileError) {
	switch (code.code) {
		case "too-many-files":
			return "Muchas imagenes";
		case "file-too-small":
			return "Imagen muy pequeña";
		case "file-too-large":
			return "Imagen muy grande";
		case "file-invalid-type":
			return "Formato de imagen no permitido";
		default:
			break;
	}
}
