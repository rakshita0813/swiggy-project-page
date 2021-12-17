/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./hero.css";
// import SwiggyLogo from "../../public/Swiggy_logo.png";

function navbar() {
	return (
		<div>
			<nav className="navbar">
				<img src="/Swiggy_logo.png" className="logo" alt="_logo" />
				<ul>
					<li>
						<a className="navlinks" href="#" alt="" style={{ color: "black" }}>
							Login
						</a>
					</li>
					<li style={{ backgroundColor: "#000", color: "white" }}>
						<a className="navlinks" href="#" alt="" style={{ color: "white" }}>
							Sign Up
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default navbar;
