import React from 'react';

export default function Coupon() {
	return (
		<div className="col-md-3 float-right">
			<div className="review">
				<p>This coupon Start?</p>
				<div className="input-group">
					<span>
						<i className="fas fa-microphone-alt" />
					</span>
					<input type="text" className="form-control" placeholder="Voice Review" />
				</div>
				<div className="chat-btn">
					<a className="btn btn-success">
						{' '}
						<i className="far fa-comment-dots" />
					</a>
				</div>
			</div>
		</div>
	);
}
