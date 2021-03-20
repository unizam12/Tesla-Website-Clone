import "./App.css";
import Header from "./components/header.js";
import Item from "./components/item.js";

import Accessories from "./assets/Desktop-Accessories.jpg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import SolarPanel from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="item_container">
				<Item
					title="Lowest cost solar panels in America"
					desc="Money Back Guarentee"
					desclink=""
					backgroundImg={SolarPanel}
					leftBtnText="ORDER NOW"
					leftbtnLink=""
					rightBtnText="LEARN MORE"
					rightBtnLink=""
					twoButtons="true"
					first
				/>
				<Item
					title="Model S"
					desc="Order online for Touchless Delivery"
					desclink=""
					backgroundImg={ModelS}
					leftBtnText="Custom Order"
					leftbtnLink=""
					rightBtnText="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Item
					title="Model 3"
					desc="Order online for Touchless Delivery"
					desclink=""
					backgroundImg={Model3}
					leftBtnText="Custom Order"
					leftbtnLink=""
					rightBtnText="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Item
					title="Model X"
					desc="Order online for Touchless Delivery"
					desclink=""
					backgroundImg={ModelX}
					leftBtnText="Custom Order"
					leftbtnLink=""
					rightBtnText="Learn More"
					rightBtnLink=""
					twoButtons="True"
				/>
				<Item
					title="Model Y"
					desc="Order online for Touchless Delivery"
					desclink=""
					backgroundImg={ModelY}
					leftBtnText="Custom Order"
					leftbtnLink=""
					rightBtnText="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Item
					title="Solar For New Roof"
					desc="Money back guarentee"
					desclink=""
					backgroundImg={SolarRoof}
					leftBtnText="Order now"
					leftbtnLink=""
					rightBtnText="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Item
					title="Accessories"
					desc="Money back guarentee"
					desclink=""
					backgroundImg={Accessories}
					leftBtnText="Shop now"
					leftbtnLink=""
					rightBtnText="Learn more"
					rightBtnLink=""
				/>
			</div>
		</div>
	);
}

export default App;
