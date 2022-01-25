interface Props {
	color: string;
}

export const Child = ({ color }: Props) => {
	return <div>Hi there! -- {color}</div>;
};

export const ChildAsFC: React.FC<Props> = ({ color }) => {
	return <div>Hi there! -- {color}</div>;
};
