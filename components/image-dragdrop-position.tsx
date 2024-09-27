import { ImagesT } from "@/lib/definitions";
import React from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
	SortableContext,
	horizontalListSortingStrategy,
	useSortable,
	arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";

export default function ImageDragdropPosition({
	images,
	setImages,
}: {
	images: ImagesT[];
	setImages: React.Dispatch<React.SetStateAction<ImagesT[]>>;
}) {
	const handleDragEnd = (e: DragEndEvent) => {
		setImages((prev) => {
			const oldIndex = prev.findIndex((item) => item.id === e.active.id);
			const newIndex = prev.findIndex((item) => item.id === e.over?.id);
			return arrayMove(prev, oldIndex, newIndex);
		});
	};
	return (
		<DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
			<SortableContext items={images} strategy={horizontalListSortingStrategy}>
				<ul className="flex gap-2 mt-4">
					{images.map((item, index) => (
						<ImageComponent
							key={item.id}
							image={item}
							index={index}
							setImages={setImages}
						/>
					))}
				</ul>
			</SortableContext>
		</DndContext>
	);
}

function ImageComponent({
	image,
	index,
	setImages,
}: {
	image: ImagesT;
	index: number;
	setImages: React.Dispatch<React.SetStateAction<ImagesT[]>>;
}) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: image.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const handleClick = () => {
		setImages((prev) => [...prev.filter((item) => item.id !== image.id)]);
	};
	return (
		<div className="relative">
			<button
				className="absolute top-0 right-0 bg-green-600 text-white w-5 h-5 p-0 rounded-full z-10 flex items-center justify-center"
				onClick={() => handleClick()}
			>
				x
			</button>
			<li
				key={image.id}
				ref={setNodeRef}
				style={style}
				{...attributes}
				{...listeners}
				className="w-[80px] h-[80px] relative"
			>
				<Image
					src={image.url}
					alt={image.id}
					className="object-cover w-full h-full"
					width={80}
					height={80}
				/>
				{index === 0 && (
					<span className="absolute bottom-0 left-0 bg-green-600 text-sm">
						Portada
					</span>
				)}
			</li>
		</div>
	);
}
