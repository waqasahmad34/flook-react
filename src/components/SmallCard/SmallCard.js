import React from 'react';

export default function SmallCard() {
	return (
		<div className="col-md-6 float-right mt-5 coupon">
			<div className="card col-md-3 float-right">
				<div className="game-item-box p-2 mb-4">
					<i className="fas fa-trophy trophy-icon" />
				</div>
				<div className="card-body">
					<p className="card-text"> Start Betsip</p>
					<h5 className="card-title"> This coupon</h5>
					<a href="#" className="btn btn-dark mx-auto">
						How To Start?
					</a>
				</div>
			</div>
		</div>
	);
}
