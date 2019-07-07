import React from 'react';
import '../../css/main.css';
import '../../css/animate.css';
import Slider from 'react-slick';

var settings = {
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	dots: false,
	arrows: false,
	fade: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};
export default function Content() {
	return (
		<div class="content">
			<div class="hero-section typed-demo">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo03"
						aria-controls="navbarTogglerDemo03"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<a class="navbar-brand" href="#">
						<img src={require('../../img/logo.png')} />
					</a>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
						<ul class="navbar-nav mx-auto mt-2 mt-lg-0">
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Sports <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Live Play
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									JackPot
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Chat
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Promotions
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									News
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Statistics
								</a>
							</li>
						</ul>
						<form class="form-inline my-2 my-lg-0">
							<div class="form-group">
								<label for="sel1" />
								<select class="form-control" id="sel1">
									<option>15:41(GMT-1)</option>
									<option>15:41(GMT-1)</option>
									<option>15:41(GMT-1)</option>
									<option>15:41(GMT-1)</option>
								</select>
							</div>
							<a class="btn btn-success ml-3 pl-3 pr-3">Login</a>
						</form>
					</div>
				</nav>

				<Slider {...settings} className="touristpoint-banner">
					<div class="touristpoint-banner-layer">
						<img src={require('../../img/q.jpg')} alt="" />
						<span class="blue-transparent" />
						<div class="touristpoint-banner-caption">
							<div class="container" />
						</div>
					</div>
					<div class="touristpoint-banner-layer">
						<img src={require('../../img/q.jpg')} alt="" />
						<span class="blue-transparent" />
						<div class="touristpoint-banner-caption">
							<div class="container" />
						</div>
					</div>
					<div class="touristpoint-banner-layer">
						<img src={require('../../img/q - Copy.jpg')} alt="" />
						<span class="blue-transparent" />
						<div class="touristpoint-banner-caption">
							<div class="container" />
						</div>
					</div>
				</Slider>
				<div class="constructit-testimonial-thumb-list">
					<div class="constructit-testimonial-list-layer">
						<span>
							<img src={require('../../img/q.jpg')} alt="" />
						</span>
						<div class="card">
							<div class="card-body">
								<small>Next</small>
								<h5 class="card-title">Beryan munich</h5>
								<p class="card-text">Borussia</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 p-4 mt-4 game-list float-left">
					<div class="col-md-4 float-left">
						<ul class="row">
							<li>
								<div class="game-item-box">
									<a href="#" class="game-item">
										<i class="fas fa-football-ball menu-item-icon" />
									</a>
								</div>
							</li>
							<li>
								<div class="game-item-box mt-1">
									<i class="fas fa-ellipsis-v game-item-icon" />
								</div>
							</li>
							<li>
								<div class="game-item-box">
									<a href="#" class="game-item">
										<i class="fas fa-football-ball menu-item-icon" />
									</a>
								</div>
							</li>
							<li class="game">
								<div class="game-item-box">
									<a href="#" class="game-item">
										<i class="fas fa-football-ball menu-item-icon" />
									</a>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-md-8 float-left">
						<div class="count-down p-t-b-15" data-end-date="Nov 20, 2019 00:00:00">
							<ul class="row">
								<li>
									<div>
										<h3>136</h3>
										<p>days</p>
									</div>
								</li>
								<li>
									<h3>02</h3>
									<p>hrs</p>
								</li>
								<li>
									<div>
										<h3>22</h3>
										<p>min</p>
									</div>
								</li>
								<li>
									<div>
										<h3>06</h3>
										<p>sec</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6 float-right mt-5 coupon">
					<div class="card col-md-3 float-right">
						<div class="game-item-box p-2 mb-4">
							<i class="fas fa-trophy trophy-icon" />
						</div>
						<div class="card-body">
							<p class="card-text"> Start Betsip</p>
							<h5 class="card-title"> This coupon</h5>
							<a href="#" class="btn btn-dark mx-auto">
								How To Start?
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 float-right">
				<div class="review">
					<p>This coupon Start?</p>
					<div class="input-group">
						<span>
							<i class="fas fa-microphone-alt" />
						</span>
						<input type="text" class="form-control" placeholder="Voice Review" />
					</div>
					<div class="chat-btn">
						<a class="btn btn-success">
							{' '}
							<i class="far fa-comment-dots" />
						</a>
					</div>
				</div>
			</div>
			<div class="section-hero-content">
				<h4 class="sec-font">FOOTBALL</h4>
				<div class="block">
					<h1>
						<span>Atlana</span>
						<br /> Internazionale
					</h1>
				</div>
				<a href="#" class="sec-font btn theme-btn">
					<i class="far fa-tired" />
					INT <span class="lnr">1.28</span>
				</a>
				<a href="#" class="sec-font btn theme-btn">
					<i class="far fa-tired" />
					INT <span class="lnr">1.28</span>
				</a>
				<a href="#" class="sec-font btn theme-btn">
					<i class="far fa-tired" />
					INT <span class="lnr">1.28</span>
				</a>
			</div>
		</div>
	);
}
