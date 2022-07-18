// membuat komponen dengan fungsi
function Header() {
	return (
		<div>
			<h1>Belajar cara mengendalikan diri, asek</h1>
			<h2>Ini contoh h2nya</h2>
		</div>
	);
}

// render komponen ke real DOM
ReactDOM.render(<Header />, document.getElementById("root"));
