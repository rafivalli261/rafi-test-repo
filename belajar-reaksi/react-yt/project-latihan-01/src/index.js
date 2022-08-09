import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Halo() {
	return <h1>Halo Dunia</h1>;
}

root.render(
	<div>
		<Halo />
	</div>
);
