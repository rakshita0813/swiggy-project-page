/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer.css";

const companyLinks = [
	{ text: "About us", url: "#" },
	{ text: "Team", url: "#" },
	{ text: "Careers", url: "#" },
	{ text: "Swiggy Blog", url: "#" },
	{ text: "Bug Bounty", url: "#" },
	{ text: "Swiggy Super", url: "#" },
	{ text: "Swiggy Corporate", url: "#" },
	{ text: "Swiggy Instamart", url: "#" },
];

const contactLinks = [
	{ text: "Help & Support", url: "#" },
	{ text: "Partner with us", url: "#" },
	{ text: "Ride with us", url: "#" },
];

const legalLinks = [
	{ text: "Terms & Conditions", url: "#" },
	{ text: "Refund & Cancellation", url: "#" },
	{ text: "Privacy Policy", url: "#" },
	{ text: "Cookie Policy", url: "#" },
	{ text: "Offer Terms", url: "#" },
	{ text: "Phishing & Fraud", url: "#" },
];

const citiLinks1 = [
	{ text: "Kurukshetra", url: "#" },
	{ text: "Abohar", url: "#" },
	{ text: "Adityapur", url: "#" },
	{ text: "Agartala", url: "#" },
	{ text: "Davanagere", url: "#" },
];

const citiLinks2 = [
	{ text: "Dehradun", url: "#" },
	{ text: "Dehri", url: "#" },
	{ text: "Deoghar", url: "#" },
	{ text: "Kochi", url: "#" },
];

const citiLinks3 = [
	{ text: "Kolar", url: "#" },
	{ text: "Kollam", url: "#" },
	{ text: "Puri", url: "#" },
	{ text: "Rae-Bareli", url: "#" },
	{ text: "Purulia", url: "#" },
];

const citiLinks4 = [
	{ text: "Muzaffarnagar", url: "#" },
	{ text: "Mysore", url: "#" },
	{ text: "Nabadwip", url: "#" },
	{ text: "Nagaon", url: "#" },
];

function FooterNavLinks(props) {
	const { heading, links, header } = props;
	return (
		<div className="tag-body">
			{header === "true" ? <h3>{heading}</h3> : ""}
			<ul>
				{links.map((link) => (
					<li>
						<a className="link" href={link.url} alt="link">
							{link.text}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

function Footer() {
	return (
		<footer className="footer-body">
			<div className="company-tags">
				<FooterNavLinks heading="COMPANY" links={companyLinks} header="true" />
				<FooterNavLinks heading="CONTACT" links={contactLinks} header="true" />
				<FooterNavLinks heading="LEGAL" links={legalLinks} header="true" />
				<div className="footer-btn">
					<a
						href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
						className="btn-container"
						target="_blank"
						alt="footer-btn"
						rel="noreferrer"
					>
						<img src="/android footer btn.png" alt="footer-btn" />
					</a>
					<a
						href="https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
						className="btn-container"
						target="_blank"
						alt="footer-btn"
						rel="noreferrer"
					>
						<img src="/ios footer btn.png" alt="footer-btn" />
					</a>
				</div>
			</div>

			<hr
				style={{
					width: "80%",
					margin: "2.5rem auto",
					backgroundColor: "gray",
					height: "0.01rem",
				}}
			/>

			<div className="footer-citySection">
				<h3>We deliver to</h3>
				<FooterNavLinks links={citiLinks1} header="false" />
				<FooterNavLinks links={citiLinks2} header="false" />
				<FooterNavLinks links={citiLinks3} header="false" />
				<FooterNavLinks links={citiLinks4} header="false" />
			</div>

			<hr
				style={{
					width: "80%",
					margin: "2rem auto",
					backgroundColor: "gray",
					height: "0.01rem",
				}}
			/>

			<div className="footer-bottom">
				<div className="footer-bottom_logo-container">
					<a href="https://www.swiggy.com/" target="_blank">
						<img src="/logo b&w.png" alt="social-media" />
					</a>
				</div>
				<h3>© 2021 Swiggy</h3>
				<div className="social-links">
					<a href="https://www.instagram.com/swiggyindia/">
						<img src="/insta.webp" alt="social-media" />
					</a>
					<a href="https://www.facebook.com/swiggy.in">
						<img src="/fb.webp" alt="social-media" />
					</a>
					<a href="https://twitter.com/swiggy_in">
						<img src="/twitter.webp" alt="social-media" />
					</a>
					<a href="https://www.pinterest.com/swiggyindia/">
						<img src="/pinterest.webp" alt="social-media" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
