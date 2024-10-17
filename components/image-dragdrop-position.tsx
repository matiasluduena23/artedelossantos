import { ImagesT } from "@/lib/definitions";
import React from "react";
import {
	DndContext,
	DragEndEvent,
	closestCenter,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
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
	const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over) return;

		setImages((prev) => {
			const oldIndex = prev.findIndex((item) => item.id === active.id);
			const newIndex = prev.findIndex((item) => item.id === over.id);
			return arrayMove(prev, oldIndex, newIndex);
		});
	};

	const removeImage = (id: string) => {
		setImages((prev) => [...prev.filter((item) => item.id !== id)]);
	};
	return (
		<DndContext
			onDragEnd={handleDragEnd}
			collisionDetection={closestCenter}
			sensors={sensors}
		>
			<SortableContext items={images} strategy={horizontalListSortingStrategy}>
				<ul className="flex gap-2 mt-4">
					{images.map((item, index) => (
						<ImageComponent
							key={item.id}
							image={item}
							index={index}
							removeImage={removeImage}
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
	removeImage,
}: {
	image: ImagesT;
	index: number;
	removeImage: (id: string) => void;
}) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
		setActivatorNodeRef,
	} = useSortable({ id: image.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? "0.4" : "1",
	};

	return (
		<div ref={setNodeRef} style={style} className="bg-black relative">
			<button
				className="absolute top-0 right-0 bg-green-600 text-white w-5 h-5 p-0  z-10 flex items-center justify-center"
				onClick={() => removeImage(image.id)}
			>
				x
			</button>
			<li
				ref={setActivatorNodeRef}
				key={image.id}
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
					<span className="absolute bottom-0 left-0 bg-green-600 text-white text-sm">
						Portada
					</span>
				)}
			</li>
		</div>
	);
}
