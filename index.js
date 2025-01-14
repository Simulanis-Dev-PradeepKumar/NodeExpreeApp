import express from "express";

const app = express();
const port = 3000;

const version = "2.3434343434";

app.get("/", (req, res) => {
	res.send(
		`<h1>Welcome to Simulanis</h1> <h3>Node Express deployment from Node & Express CI-CD! </h3>
		 <h3 style="color: blue">Version ${version}</h3>`
	);
});

app.get("/work", (req, res) => {
	res.send("<h3>Work is going along fine!</h3>");
});

app.listen(port, "0.0.0.0", () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on port: ${port}`);
});
