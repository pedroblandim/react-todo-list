import { TodoStatus } from "../../common/enum";
import { Todo } from "../../common/interfaces";

import { TODOS_ITEM_KEY } from "./constants";

export const getTodo = (id: Number) => {
	const todos = getParsedTodos();

	return todos[id.toString()];
};

export const getTodos = (init: number = 0, end: number = 5) => {
	const todosObj = getParsedTodos();
	return Object.values(todosObj).slice(init, end);
};

export const createTodo = (todo: Todo) => {
	if (!todo.id) todo.id = generateId();

	let todos = getParsedTodos();
	if (getTodo(todo.id)) return todo;

	todos[todo.id.toString()] = todo;

	saveTodos(todos);
	return todo;
};

export const updateTodo = (
	id: number,
	text?: string,
	status?: TodoStatus,
	date?: Date,
) => {
	const todoObj = getParsedTodos();
	const todo = todoObj[id.toString()];
	if (text) todo.text = text;
	if (status) todo.status = status;
	if (date) todo.date = date;
	saveTodos(todoObj);
	return todo;
};

export const deleteTodo = (id: Number) => {
	const todosObj = getParsedTodos();
	if (!todosObj) return false;

	delete todosObj[id.toString()];
	saveTodos(todosObj);
	return true;
};

function saveTodos(todosObj: { [key: string]: Todo }) {
	localStorage.setItem(TODOS_ITEM_KEY, JSON.stringify(todosObj));
}

function generateId() {
	const counterKey = "TODO_ID_COUNTER";
	let counterString = localStorage.getItem(counterKey);
	if (!counterString) counterString = "1";

	const newCounter = parseInt(JSON.parse(counterString)) + 1;

	localStorage.setItem(counterKey, JSON.stringify(newCounter.toString()));
	return newCounter;
}

function getParsedTodos(): { [key: string]: Todo } {
	const todosString = localStorage.getItem(TODOS_ITEM_KEY);
	if (!todosString) return {};

	const todos: { [key: string]: Todo } = JSON.parse(todosString);
	for (let key in todos) {
		const todo = todos[key];
		todo.date = new Date(todo.date);
	}
	return todos;
}
