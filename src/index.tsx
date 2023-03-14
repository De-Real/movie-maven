import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyle from "./GlobalStyle.styled";
import "./index.css";
import { store } from "./store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<>
		<GlobalStyle />
		<Provider store={store}>
			<App />
		</Provider>
	</>
);
