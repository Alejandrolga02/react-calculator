import React from "react";
import ReactDOM from "react-dom/client";

import { CalculatorApp } from "./CalculatorApp";
import { CalculatorProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CalculatorProvider>
			<CalculatorApp />
		</CalculatorProvider>
	</React.StrictMode>
);
