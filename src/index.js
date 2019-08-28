import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import App1 from "./Components/App1";

ReactDOM.render(
    <div>
    	<App1 namee="world" /> 
		<App name="is mine" />
	</div>,
    document.getElementById("root")
);