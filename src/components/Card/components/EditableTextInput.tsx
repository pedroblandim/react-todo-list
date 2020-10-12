import React, {
	useState,
	ChangeEvent,
	MouseEvent,
	FocusEvent,
	KeyboardEvent,
} from "react";
import styled from "styled-components";

interface IProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur: (event: FocusEvent<HTMLInputElement>) => void;
	value: string;
	isDisabled: boolean;
	className?: string;
}

const Input = styled.input<{ editable: Boolean }>`
	box-sizing: border-box;
	outline: none;
	border: none;

	width: 100%;
	padding: 5px 8px;
	font-size: 1.1rem;
	cursor: pointer;

	transition: all 0.2s;
	&:hover {
		color: ${(props) => (props.editable ? "white" : "#1f5897")};
	}
	color: ${(props) => (props.editable ? "white" : "#111")};

	background-color: ${(props) => (props.editable ? "#4e87c4" : "white")};
	border: ${(props) => (props.editable ? "1px dashed white" : "none")};
`;

export const EditableTextInput = (props: IProps) => {
	const [editable, setEditable] = useState(false);

	const handleOnMouseDown = (event: MouseEvent<HTMLInputElement>) => {
		// Preventing text selection when double clicking
		if (event.detail === 2 && !editable) event.preventDefault();
	};

	const enableWriting = () => {
		setEditable(true);
	};

	const disableWriting = (event: FocusEvent<HTMLInputElement>) => {
		setEditable(false);
		props.onBlur(event);
	};

	const getEnterKey = (event) => {
		if (event.key === "Enter") {
			disableWriting(event);
		}
	};

	return (
		<Input
			editable={editable && !props.isDisabled}
			readOnly={!editable || props.isDisabled}
			value={props.value.toString()}
			onChange={props.onChange}
			onBlur={disableWriting}
			onDoubleClick={enableWriting}
			onMouseDown={handleOnMouseDown}
			className={props.className}
			onKeyUp={getEnterKey}
		/>
	);
};
