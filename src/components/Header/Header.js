import React from 'react';
import '../../css/main.css';
import Typed from 'typed.js';

export default function Header() {
	return (
		<header>
			<div class="menu">
				<div class="menu-item-box mt-3">
					<a href="#" class="menu-item">
						<i class="fas fa-align-center menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-burn menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box active">
					<a href="#" class="menu-item">
						<i class="fas fa-futbol menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-quidditch menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-dumbbell menu-item-icon" />
					</a>
					<span class="badge badge-danger">New</span>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fab fa-playstation menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fab fa-xbox menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-gamepad menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-table-tennis menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-bowling-ball menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-chess-king menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-volleyball-ball menu-item-icon" />
					</a>
				</div>
				<div class="menu-item-box">
					<a href="#" class="menu-item">
						<i class="fas fa-football-ball menu-item-icon" />
					</a>
				</div>
			</div>
		</header>
	);
}
