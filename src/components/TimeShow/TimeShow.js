import React from 'react';

export default function TimeShow() {
	return (
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
	);
}
