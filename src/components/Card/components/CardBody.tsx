import React from "react";
import styled from "styled-components";

import { ITask, TaskStatus } from "../index";
import Task from "./CardBody/components/Task";

import { IoMdAdd } from "react-icons/io";

interface IProps {
	tasks: ITask[];
	addTask: (text: string) => void;
	updateTask: (id: number, text: string, status: TaskStatus) => void;
	deleteTask: (id: number) => void;
}

const Body = styled.div`
	height: 80%;
	width: 85%;
	margin: 0 auto;
	margin-top: 20px;
	color: #000;
	display: flex;
	flex-direction: column;
	overflow: auto;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 335px;
		height: 15px;
		background-color: red;
		border: 1px solid black;
	}
`;

const ButtonsContainer = styled.div``;

const AddTodoButton = styled.button`
	float: right;
	display: flex;
	align-items: center;
	justify-content: center;

	outline: none;
	border: none;
	height: 36px;
	margin: 0px 0px 15px 0px;
	border-radius: 10%;

	color: #446d99;
	background: #5ce568;
	cursor: pointer;
	transition: background 0.4s;
	&:hover {
		background: #80ed8f;
	}
`;

const NoTasksSpan = styled.span`
	color: #979696;
	font-size: 1em;
	margin: 0 auto;
	background-color: white;
	border-radius: 500px;
	padding: 4px 20px;
`;

export const CardBody = (props: IProps) => {
	const createNewTask = () => {
		props.addTask("");
	};

	return (
		<Body>
			{props.tasks.length === 0 && (
				<NoTasksSpan>There are no Todos today</NoTasksSpan>
			)}
			{props.tasks.map((task, idx) => (
				<Task
					key={idx}
					task={task}
					updateTask={props.updateTask}
					deleteTask={props.deleteTask}
				/>
			))}
			<ButtonsContainer>
				<AddTodoButton onClick={createNewTask}>
					<IoMdAdd size={25} />
				</AddTodoButton>
			</ButtonsContainer>
		</Body>
	);
};
