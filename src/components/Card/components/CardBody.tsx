import React, { useState, ChangeEvent, FocusEvent } from "react";
import { ITask, TaskStatus } from "../index";
import styled from "styled-components";
import { EditableTextInput } from "./EditableTextInput";

import { createTodo } from "../../../services/Todos/repository";
import Task from "./CardBody/components/Task";

interface IProps {
	tasks: ITask[];
	addTask: (text: string) => void;
	updateTask: (id: number, text: string, status: TaskStatus) => void;
	deleteTask: (id: number) => void;
}

const Body = styled.div`
	height: 90%;
	width: 85%;
	margin: 0 auto;
	margin-top: 20px;
	color: #000;
	display: flex;
	flex-direction: column;
`;
const TaskWrapper = styled.div`
	box-sizing: border-box;
	/* padding: 3px 5px; */
	color: #000;
	margin-bottom: 20px;
	width: 100%;

	transition: all 0.2s;

	&:hover {
		box-shadow: 0px 4px 20px 1px #3e79ba;
		transform: translate(0px, -2px);
	}
`;

const ButtonsContainer = styled.div``;

const AddTodoButton = styled.button`
	float: right;
	outline: none;
	border: none;
	width: 30px;
	height: 30px;
	margin: 0px 0px 15px 0px;
	border-radius: 50%;
	color: black;
	background: #97e6a2;
	cursor: pointer;
	transition: background 0.2s;
	&:hover {
		background: #80ed8f;
	}
`;

export const CardBody = (props: IProps) => {
	const createNewTask = () => {
		props.addTask("");
	};

	return (
		<Body>
			{props.tasks.map((task, idx) => (
				<Task
					key={idx}
					task={task}
					updateTask={props.updateTask}
					deleteTask={props.deleteTask}
				/>
			))}
			<ButtonsContainer>
				<AddTodoButton onClick={createNewTask}>+</AddTodoButton>
			</ButtonsContainer>
		</Body>
	);
};
