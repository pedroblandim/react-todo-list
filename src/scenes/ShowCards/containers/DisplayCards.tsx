import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CardsShower } from "../components/CardsShower";
import {
	getTodos,
	createTodo,
	updateTodo,
	deleteTodo,
} from "../../../services/Todos/repository";
import { Todo } from "../../../common/interfaces";
import { create } from "domain";
import { TodoStatus } from "../../../common/enum";

interface IProps {}

const currentDay = new Date("2020-10-4");

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;
export const DisplayCards = () => {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());

	const [todos, setTodos] = useState<Todo[]>([]);
	useEffect(() => {
		setTodos(getTodos(0, 20));
	}, []);

	const createTodoAndUpdateState = (todo: Todo) => {
		createTodo(todo);
		setTodos(getTodos(0, 20));
	};

	const updateTodoAndUpdateState = (
		id: number,
		text?: string,
		status?: TodoStatus,
		date?: Date,
	) => {
		updateTodo(id, text, status, date);
		setTodos(getTodos(0, 20));
	};

	const deleteTodoAndUpdate = (id: number) => {
		console.log("deleting " + id);
		deleteTodo(id);
		setTodos(getTodos(0, 20));
	};

	const changeDate = (date: Date) => {
		console.log("changing date to " + date);
		setCurrentDate(date);
	};

	return (
		<Container>
			<CardsShower
				currentDay={currentDate}
				changeDate={changeDate}
				createTodo={createTodoAndUpdateState}
				updateTodo={updateTodoAndUpdateState}
				deleteTodo={deleteTodoAndUpdate}
				todos={todos}
			/>
		</Container>
	);
};
