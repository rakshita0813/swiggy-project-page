import React from "react";
import Hero from "./heroSection/Hero";
import Features from "./featuresSection/Features";
import AppDisplay from "./appSection/AppDisplay";
import Footer from "./footer/Footer";

function App() {
	return (
		<div>
			<section className="hero">
				<Hero className="font-face-pm" />
				<Features />
				<AppDisplay />
				<Footer />
			</section>
		</div>
	);
}

export default App;
