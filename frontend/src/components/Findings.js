import React, { useEffect, } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Findings = () => {
	

	return (
		<div>
			<Container className="d-flex flex-column justify-content-center align-items-center w-50 my-5">
				<div>
					<h1>Our Team's Findings</h1>
					<p>
						Text and graphs here...<br />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat expedita dignissimos debitis sit a fugit nihil quae ipsa laboriosam repellat asperiores amet quidem, doloribus molestias excepturi sapiente distinctio inventore temporibus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non quasi iure sunt totam! Id adipisci saepe beatae corporis atque porro, reiciendis accusamus incidunt aliquid voluptatum labore eum sed aut?
					</p>
				</div>

			</Container>
		</div>
	);
};

export default Findings;
