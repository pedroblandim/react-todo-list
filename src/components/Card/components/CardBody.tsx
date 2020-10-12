import React from "react";
import { ITask, TaskStatus } from "../index";
import styled from "styled-components";

import Task from "./CardBody/components/Task";
import { IoMdAdd } from "react-icons/io";

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

const ButtonsContainer = styled.div``;

const AddTodoButton = styled.button`
	float: right;
	outline: none;
	border: none;
	height: 38px;
	margin: 0px 0px 15px 0px;
	border-radius: 10%;
	color: #446d99;
	background: #5ce568;
	cursor: pointer;
	transition: background 0.4s;
	text-align: center;
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
				<AddTodoButton onClick={createNewTask}>
					<IoMdAdd size={25} />
				</AddTodoButton>
			</ButtonsContainer>
		</Body>
	);
};
