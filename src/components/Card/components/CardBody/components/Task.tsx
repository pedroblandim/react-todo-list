import React, { useState, FocusEvent, ChangeEvent, MouseEvent } from "react";
import { EditableTextInput } from "../../EditableTextInput";
import styled, { keyframes } from "styled-components";
import { ITask, TaskStatus } from "../../..";

import { TiDelete } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";

interface IProps {
	task: ITask;
	updateTask: (id: number, text: string, status: TaskStatus) => void;
	deleteTask: (id: number) => void;
}

const TaskWrapper = styled.div`
	display: flex;
	box-sizing: border-box;

	color: #000;
	margin-bottom: 20px;
	width: 100%;

	transition: all 0.2s;

	&:hover {
		box-shadow: 0px 4px 20px 1px #3e79ba;
	}
`;

const InputWrapper = styled.div<{ isDone: boolean }>`
	flex: 100;
	transition: all 0.5s;
	transition: background 0.7s;
	& > .done {
		text-decoration: black line-through;
		font-style: italic;
		color: #444;
		&:hover {
			color: #444;
			cursor: default;
		}
		background-color: #a7f6bb;
	}
`;

const Options = styled.div`
	flex: 5;
	display: flex;
	height: 100%;

	background: #5ce568;
	cursor: default;

	transition: all 0.2s;
	overflow: hidden;

	& > div {
		display: none;
	}

	&:hover {
		flex: 25;
		& > div {
			display: flex;
		}
	}
`;

const CheckContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	color: #00c31a;
	background: #5ce568;

	transition: all 0.5s;
	&:hover {
		color: #1e7e2b;
	}
	& > span {
		height: 17px;
	}
`;

const DeleteContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	color: #c44646;
	background-color: #fa5555;

	transition: all 0.3s;
	& > span {
		height: 22px;
	}
	&:hover {
		color: #dc1010;
	}
`;

const CheckIcon = (props: { onClick?: (event: MouseEvent) => void }) => {
	return (
		<CheckContainer onClick={props.onClick} className="icon">
			<span>
				<FaRegCheckCircle size={17} />
			</span>
		</CheckContainer>
	);
};

const DeleteIcon = (props: { onClick?: (event: MouseEvent) => void }) => {
	return (
		<DeleteContainer onClick={props.onClick} className="icon">
			<span>
				<TiDelete size={22} />
			</span>
		</DeleteContainer>
	);
};

/* 
The input value is what the users types, after the first onChange. After the blur event (user leaves input), the task is updated and its values goes back being based on the task itself.
*/
const Task = (props: IProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState("");

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		setIsEditing(true);
	};
	const onBlur = (event: FocusEvent<HTMLInputElement>) => {
		setIsEditing(false);
		props.updateTask(props.task.id, event.target.value, props.task.status);
	};

	const checkTask = (event: MouseEvent) => {
		const newStatus =
			props.task.status === TaskStatus.Done
				? TaskStatus.Doing
				: TaskStatus.Done;
		props.updateTask(props.task.id, props.task.text.toString(), newStatus);
	};

	const deleteTask = (event: MouseEvent) => {
		props.deleteTask(props.task.id);
	};

	const isDone = () => props.task.status === TaskStatus.Done;

	return (
		<TaskWrapper>
			<InputWrapper
				isDone={props.task.status === TaskStatus.Done ? true : false}
			>
				<EditableTextInput
					onChange={onChange}
					value={isEditing ? value : props.task.text.toString()}
					onBlur={onBlur}
					isDisabled={isDone() ? true : false}
					className={isDone() ? "done" : ""}
				/>
			</InputWrapper>
			<Options>
				<CheckIcon onClick={checkTask} />
				<DeleteIcon onClick={deleteTask} />
			</Options>
		</TaskWrapper>
	);
};

export default Task;
