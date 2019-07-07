import React from 'react';
import img from '../../img/logo.png';

export default function Navbar() {
	return (
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
				<img src="img/logo.png" />
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
	);
}
