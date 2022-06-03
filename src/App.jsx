import React from "react";
import "./App.scss";

import Kanban from "./components/kanban";
import { Title } from "./components/title/title";

function App() {
	return (
		<div>
			<Title />
			<Kanban />
		</div>
	);
}

export default App;
