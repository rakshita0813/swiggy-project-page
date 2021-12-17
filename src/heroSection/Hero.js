/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

import Navbar from "./navbar";
import "./hero.css";

function CitiesComp() {
	const cities = [
		"Ahmedabad",
		"Bangalore",
		"Chennai",
		"Delhi",
		"Gurgaon",
		"Hyderabad",
		"Kolkata",
		"Mumbai",
		"Pune",
		"&more.",
	];

	return (
		<div className="cities-box">
			{cities.map((val, idx) => {
				let cityLink = `https://www.swiggy.com/${val}`
				if (idx % 2 === 0) {
					return (
						<a
							href={cityLink}
							style={{
								color: "#696d7a",
								fontWeight: "600",
								display: "inline-block",
								paddingRight: "10px",
								fontSize: "0.89rem",
							}}
							className="city"
						>
							{val}
						</a>
					);
				} else {
					return (
						<a
							href={cityLink}
							style={{
								color: "#93959f",
								fontWeight: "600",
								display: "inline-block",
								padding: "0px 10px 5px 0px",
								fontSize: "0.89rem",
							}}
							className="city"
						>
							{val}
						</a>
					);
				}
			})}
		</div>
	);
}

function LocationInput() {
	const [state, setstate] = useState("Locate Me");
	const input = useRef();
	const [link, setlink] = useState(`#`);

	function LocateMe({ state }) {
		return (
			<button
				key={state}
				className="locateme_btn ">

				<a className="" onClick={() => {
					input.current.value = "";
					setstate("Locate Me");
				}} herf="#">{state}</a>
			</button>
		)
	}

	return (
		<div className="location-cover">
			<input

				placeholder="Enter your delivery location"
				ref={input}
				onChange={() => {
					if (input.current.value === "") {
						setstate("Locate Me");
						<LocateMe state={state} />
					} else {
						setstate("Clear");
						setlink(`https://www.swiggy.com/${input.current.value}`);
					}
				}}

				maxLength="30"
			/>
			<LocateMe state={state} />
			<button className="findfood_btn">
				<a href={link}>FIND FOOD</a>
			</button>
		</div>
	);
}

const headingarray = [
	"Cooking gone wrong?",
	"Movie Marathon?",
	"Game night?",
	"Late night at office?",
	"Hungry?",
	"Unexpected guests?",
];


function Hero() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() =>
			setIndex(index => index + 1),
			3000
		);
		return () => {
			clearTimeout(intervalId);
		}
	}, [])


	return (
		<div>
			<div className="hero-content">
				<div className="firsthalf">
					<Navbar />
					<div className="location-area">
						<h1 className="heading">
							<TextTransition
								text={headingarray[index % headingarray.length]}
								springConfig={presets.wobbly}
							/>
						</h1>
						<h3 className="subheading">
							Order food from favourite restaurants near you.
						</h3>
						<LocationInput />
						<p className="cities-heading">POPULAR CITIES IN INDIA</p>
						<CitiesComp />
					</div>
				</div>
				<div className="secondhalf">
					<img src="/hero-image.jpg" alt="heroimage" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
