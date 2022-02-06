import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Div100vh from "react-div-100vh";

import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<Div100vh>
			<App />
		</Div100vh>
	</React.StrictMode>,
	document.getElementById("root")
);
