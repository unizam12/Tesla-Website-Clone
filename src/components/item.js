import React from "react";
import Button from "./button.js";
import "./item.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function item({
	title,
	desc,
	descLink,
	backgroundImg,
	leftBtnText,
	leftbtnLink,
	rightBtnText,
	rightBtnLink,
	twoButtons,
	first,
}) {
	return (
		<div
			className="item"
			style={{
				backgroundImage: `url(${backgroundImg})`,
			}}
		>
			<div className="item_container">
				<div className="item_text">
					<p>{title}</p>
					<div className="item_text_description">
						<p>{desc}</p>
					</div>
				</div>
				<div className="item_lower_third">
					<div className="item_buttons">
						<Button imp="primary" text={leftBtnText} link={leftbtnLink} />
						{twoButtons && (
							<Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
						)}
					</div>
					{first && (
						<div className="item_expand">
							<ExpandMoreIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default item;
