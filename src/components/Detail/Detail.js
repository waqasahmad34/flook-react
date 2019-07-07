import React, { Component } from 'react';
import WOW from 'wowjs';

export default class Detail extends Component {
	componentDidMount() {
		new WOW.WOW().init();
	}
	render() {
		return (
			<div className="section-hero-content wow slideInLeft">
				<h4 className="sec-font">FOOTBALL</h4>
				<div className="block">
					<h1>
						<span>Atlana</span>
						<br /> Internazionale
					</h1>
				</div>
				<a href="#" className="sec-font btn theme-btn">
					<i className="far fa-tired" />
					INT <span className="lnr">1.28</span>
				</a>
				<a href="#" className="sec-font btn theme-btn">
					<i className="far fa-tired" />
					INT <span className="lnr">1.28</span>
				</a>
				<a href="#" className="sec-font btn theme-btn">
					<i className="far fa-tired" />
					INT <span className="lnr">1.28</span>
				</a>
			</div>
		);
	}
}
