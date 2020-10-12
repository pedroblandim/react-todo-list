import React from "react";
import styled from "styled-components";

interface IProps {
	date: Date;
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
	overflow: hidden;
	padding: 8px 5px;
	background: #4e87c4;
	color: #fff;
	margin-top: 10px;
	/* border: 3px solid #4b80b97d; */
	border-top-right-radius: 18px;
	border-top-left-radius: 18px;

	font-size: 1.6rem;
	text-align: center;
	/* border-bottom: 1px solid white; */
`;

export const CardHeader = (props: IProps) => {
	const buildText = () => {
		const { date } = props;
		return `
		${daysOfTheWeek[date.getDay()]} 
		${months[date.getMonth()]} 
		${date.getDate()}, 
		${date.getFullYear()}
		`;
	};

	return <Header>{buildText()}</Header>;
};
