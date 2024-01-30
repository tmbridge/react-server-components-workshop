// ./src/App.tsx
import { Counter } from "./Counter.js";

export function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>3 | Server-side rendering</title>
			</head>
			<body>
				<div>
					<p>"Hello, world!" from server-side rendered React!  Tim was here</p>
					<img src="/react-summit.svg" width="128" />
					<Counter />
				</div>
			</body>
		</html>
	);
}