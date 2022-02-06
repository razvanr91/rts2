const EventComponent: React.FC = () => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};

	const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("I'm being dragged!");
		console.log(e.clientX, e.clientY);
	};

	return (
		<div>
			<h2>Event Component</h2>
			<input onChange={onChange} />
			<div draggable onDragStart={onDragStart}>
				<h2>Drag me!</h2>
			</div>
		</div>
	);
};

export default EventComponent;
