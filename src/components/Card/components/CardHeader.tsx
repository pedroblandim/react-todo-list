import React from "react";
import styled from "styled-components";

import { DatePicker } from "antd";
import moment, { Moment } from "moment";

// import "moment/locale/pt-br";
// import locale from "antd/es/date-picker/locale/pt_BR";

interface IProps {
	date: Date;
	changeDate: (date: Date) => void;
}

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const daysOfTheWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const Header = styled.div`
	& input {
		color: white;
		font-size: 1.3rem;
		text-align: center;
	}
	& > .date-picker {
		/* overflow: hidden; */
		padding: 8px 5px;
		/* background: #4e87c4; */
		margin-top: 10px;
		font-size: 1.1rem;

		border: none;
	}
	text-align: center;
`;

export const CardHeader = (props: IProps) => {
	const changeDate = (date: moment.Moment | null, dateString: string) => {
		if (date) props.changeDate(date.toDate());
	};

	const buildText = () => {
		const { date } = props;
		return `
		${daysOfTheWeek[date.getDay()]} 
		${months[date.getMonth()]} 
		${date.getDate()}, 
		${date.getFullYear()}
		`;
	};

	return (
		// Sunday October 4, 2020
		<>
			{/* {buildText()} */}
			<Header spellCheck={false}>
				<DatePicker
					// locale={locale}
					bordered={false}
					size={"middle"}
					format={"ddd MMM Do, YYYY"}
					allowClear={false}
					className={"date-picker"}
					showToday={true}
					defaultValue={moment(new Date())}
					onChange={changeDate}
				/>
			</Header>
		</>
	);
};
