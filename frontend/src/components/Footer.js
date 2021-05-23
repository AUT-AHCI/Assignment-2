import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className="p-3 mb-2">
			<Container>
				<Row>
					<Col md={4} className="text-center py-3">
						Semester 1 - Winter 2021
					</Col>
					<Col md={4} className="text-center py-3">
						<div>This Project Was Undertaken By:</div>
						<br/>
						<div>Aaron Gilbert | Ashley Thew | Robert Ankersmit | Travis Hun</div>
					</Col>
					<Col md={4} className="text-center py-3">
						Made for Applied Human Computer Interaction
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
