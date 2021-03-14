import React from "react";

function item({
	title,
	desc,
	descLink,
	backgroungImg,
	leftBtnText,
	leftbtnLink,
	rightBtnText,
	rightBtnLink,
	twoButtons,
	first,
}) {
	return (
		<div className="item" style={{}}>
			<div className="item_container">
				<div className="item_text">
					<p>{title}</p>
					<div className="item_text_description">
						<p>{desc}</p>
					</div>
				</div>
				<div className="item_lower_third">
					<div className="item_buttons"></div>
				</div>
			</div>
		</div>
	);
}

export default item;
