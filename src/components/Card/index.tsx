import React from "react";
import styled from "styled-components";
import { CardBody } from "./components/CardBody";
import { CardHeader } from "./components/CardHeader";

interface IProps {
	date: Date;
	tasks: ITask[];

	updateTask: (id: number, text: string, status: TaskStatus) => void;
	addTask: (text: string, date: Date) => void;
	deleteTask: (id: number) => void;
}

export interface ITask {
	text: String;
	status: TaskStatus;
	id: number;
}

export enum TaskStatus {
	Doing,
	Done,
}

const CardWrapper = styled.div`
	width: 430px;
	height: 490px;
	background: #4e87c4;
	box-shadow: 0px 4px 20px 1px #4e87c4;
	border-radius: 20px;

	overflow: hidden;
`;

export const Card = (props: IProps) => {
	return (
		<CardWrapper>
			<CardHeader date={props.date} />
			<CardBody
				addTask={(text: string) => props.addTask(text, props.date)}
				updateTask={props.updateTask}
				deleteTask={props.deleteTask}
				tasks={props.tasks}
			/>
		</CardWrapper>
	);
};
