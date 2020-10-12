import React from "react";
import { render } from "@testing-library/react";
import { Card, Task } from "../";
import { TodoStatus } from "../../../common/enum";

test("renders date on header", () => {
	const tasks: Task[] = [
		{
			status: TodoStatus.Created,
			text: "Passear com o cachorro",
		},
		{
			status: TodoStatus.Created,
			text: "Estudar React",
		},
		{
			status: TodoStatus.Created,
			text: "Malhar",
		},
	];

	const currentDay = new Date("2020-8-4");

	const { getByText } = render(<Card tasks={tasks} date={currentDay} />);
	const cardHeaderText = getByText(/Tuesday August 4, 2020/i);
	expect(cardHeaderText).toBeInTheDocument();
});
