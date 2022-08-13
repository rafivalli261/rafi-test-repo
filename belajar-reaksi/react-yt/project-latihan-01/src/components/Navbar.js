import React from "react";
import react_icon from "../image/react-icon.png";

export default function Navbar() {
	return (
		<nav>
			<img src={react_icon} alt="React-Icon" className="nav--icon" />
			<h3 className="nav--logo_text">ReactFacts</h3>
			<h4 className="nav--title">React Course - Project 1</h4>
		</nav>
	);
}
