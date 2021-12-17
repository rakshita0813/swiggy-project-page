import React, { useRef } from "react";
import "./app.css";

function AppDisplay() {
	const appBody = useRef(null);

	return (
		<div className="app-body" ref={appBody}>
			<div className="text-section">
				<h1> Restaurants in your pocket </h1>

				<h3>
					Order from your favorite restaurants & track on the go, with the all -
					new Swiggy app.
				</h3>

				<div className="text-section-btns">
					<a
						href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/android btn.png" alt="app-btn" className="app-btn" />
					</a>
					<a
						href="https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/ios btn.png" alt="app-btn" className="app-btn" />
					</a>
				</div>
			</div>
			<div className="photo-section">
				<img src="/phone app 2.png" className="photo1" alt="phone-screen" />
				<img src="/phone app.png" className="photo2" alt="phone-screen" />
			</div>
		</div>
	);
}

export default AppDisplay;
