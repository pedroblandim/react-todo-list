import React from "react";
import "./App.css";

import styled from "styled-components";
import { DisplayCards } from "./scenes/ShowCards/containers/DisplayCards";

const AppContainer = styled.div`
	background: #80ed8f;
	font-family: "Work Sans", sans-serif;
`;
function App() {
	return (
		<AppContainer>
			<DisplayCards />
		</AppContainer>
	);
}

export default App;
