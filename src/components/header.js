import React from "react";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import "./header.css";

function header() {
	return (
		<div className="header">
			<div className="header_logo">
				<img src={TeslaLogo} alt="tesla logo"></img>
			</div>
			<div className="header_center">
				<p>Model S</p>
				<p>Model 3</p>
				<p>Model X</p>
				<p>Model Y</p>
				<p>Solar Roof</p>
				<p>Solar PanelS</p>
			</div>
			<div className="header_right">
				<p>Shop</p>
				<p>Tesla Account</p>
			</div>
		</div>
	);
}

export default header;
