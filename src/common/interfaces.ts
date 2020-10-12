import { TodoStatus } from "./enum";

export interface Todo {
	id?: number;
	date: Date;
	text: string;
	status: TodoStatus;
}
