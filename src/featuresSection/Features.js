import React from "react";
import "./features.css";

const featuresContent = [
	{
		imgsrc: "/minorder.png",
		heading: "No Minimum Order",
		text: "Order in for yourself or for the group, with no restrictions on order value",
	},
	{
		imgsrc: "/live tracking.png",
		heading: "Live Order Tracking",
		text: "Know where your order is at all times, from the restaurant to your doorstep",
	},
	{
		imgsrc: "/delivery.png",
		heading: "Lightning-Fast Delivery",
		text: "Experience Swiggy's superfast delivery for food delivered fresh & on time",
	},
];

function Feature(props) {
	return (
		<div className="content">
			<img src={props.imgsrc} alt="features-img" />
			<h3>{props.heading}</h3>
			<p>{props.text}</p>
		</div>
	);
}

function Features() {
	return (
		<div className="features-body">
			{featuresContent.map((val, idx) => {
				return (
					<Feature
						className="features-card"
						heading={val.heading}
						imgsrc={val.imgsrc}
						text={val.text}
					/>
				);
			})}
		</div>
	);
}

export default Features;
