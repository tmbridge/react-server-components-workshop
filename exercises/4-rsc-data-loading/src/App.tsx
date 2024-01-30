// ./src/App.tsx
"use server";

import { Suspense } from "react";
import { Counter } from "./Counter.js";
import { Todos } from "./ToDos.js";

export function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>4 | RSC data loading</title>
			</head>
			<body>
				<div>
					<p>"Hello, world!" from server-side rendered React!</p>
					<img src="/react-summit.svg" width="128" />
					<Counter />
					<Suspense fallback={<p>Loading...</p>}>
						{/* @ts-expect-error Async Server Component */}
						<Todos />
					</Suspense>
				</div>
			</body>
		</html>
	);
}