import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Halo() {
	return (
		<div>
			<h1>Halo Dunia</h1>
			<h3>Halo Kawand</h3>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum exercitationem eum dolor nisi facere itaque delectus veniam autem ullam excepturi dolorum quia, consequuntur assumenda fugit reiciendis possimus, distinctio
			id maxime iste necessitatibus voluptate! Modi pariatur molestias est unde, fugiat laudantium ipsa. Est sed in tempora fuga quos, recusandae magnam consequatur voluptatem, porro esse necessitatibus nam commodi labore a placeat
			dolores nemo possimus illum inventore qui quo cum? Odio repellendus eaque itaque a reprehenderit ad error dolorem illum. Dignissimos, ullam. Laboriosam ad cupiditate architecto facere, necessitatibus consequuntur aliquid officia
			inventore harum. Quia dicta eum laboriosam minima ipsam unde itaque quis.
			<h5>Genshin Character</h5>
			<ul>
				<li>Xiao</li>
				<li>Hutao</li>
				<li>Eula</li>
				<li>Kazuha</li>
			</ul>
		</div>
	);
}
root.render(
	<div>
		<Halo />
	</div>
);
