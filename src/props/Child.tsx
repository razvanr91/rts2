interface Props {
	color: string;
	onClick: () => void;
}

export const Child = ({ color, onClick }: Props) => {
	return (
		<div>
			Hi there! -- {color}
			<button onClick={onClick}>Click me!</button>
		</div>
	);
};

export const ChildAsFC: React.FC<Props> = ({ color, onClick }) => {
	return (
		<div>
			Hi there! -- {color}
			<button onClick={onClick}>Click me!</button>
		</div>
	);
};
