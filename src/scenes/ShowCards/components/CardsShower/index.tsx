import React from "react";
import { Card, ITask, TaskStatus } from "../../../../components/Card";
import styled from "styled-components";
import { Todo } from "../../../../common/interfaces";
import { TodoStatus } from "../../../../common/enum";

export interface IProps {
	currentDay: Date;
	changeDate: (date: Date) => void;

	todos: Todo[];
	createTodo: (todo: Todo) => void;
	updateTodo: (
		id: number,
		text?: string,
		status?: TodoStatus,
		date?: Date,
	) => void;
	deleteTodo: (id: number) => void;
}

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const LeftCard = styled.div`
	position: relative;
	left: 100px;
`;
const MiddleCard = styled.div`
	z-index: 2;
	position: relative;
	top: -50px;
`;
const RightCard = styled.div`
	position: relative;
	left: -100px;
`;

export const CardsShower = (props: IProps) => {
	const getTasksOfDay = (date: Date) => {
		// console.table(props.todos);
		return props.todos
			.filter((todo) => isSameDay(date, todo.date))
			.map((todo) => {
				return todoToTask(todo);
			});
	};

	const isSameDay = (date1: Date, date2: Date) => {
		return (
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		);
	};

	// This method converts Tasks to Todos (put this on redux)
	const addTask = (text: string) => {
		const todo: Todo = {
			text: text,
			date: props.currentDay,
			status: TodoStatus.Doing,
		};
		props.createTodo(todo);
	};

	const updateTask = (
		id: number,
		text?: string,
		status?: TaskStatus,
		date?: Date,
	) => {
		const todoStatus =
			status === TaskStatus.Done ? TodoStatus.Done : TodoStatus.Doing;
		props.updateTodo(id, text, todoStatus, date);
	};

	const deleteTask = (id: number) => {
		props.deleteTodo(id);
	};

	return (
		<CardContainer>
			<MiddleCard>
				<Card
					date={props.currentDay}
					changeData={props.changeDate}
					addTask={addTask}
					updateTask={updateTask}
					deleteTask={deleteTask}
					tasks={getTasksOfDay(props.currentDay)}
				/>
			</MiddleCard>
		</CardContainer>
	);
};

function todoToTask(todo: Todo): ITask {
	return {
		id: todo.id || 0,
		status:
			todo.status === TodoStatus.Done ? TaskStatus.Done : TaskStatus.Doing,
		text: todo.text,
	};
}
