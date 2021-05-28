import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					
					<Col className="text-center">
						<p>This Project Was Undertaken By:</p>
					</Col>
					
				</Row>
				<Row>
				<Col md={4} className="text-center">
						<p>Semester 1 - May 2021</p>
					</Col>
					<Col className="text-center">					
						<p>Aaron Gilbert | Ashley Thew <br></br> Robert Ankersmit | Travis Hun</p>
					</Col>
					<Col md={4} className="text-center">
						<p>Applied Human Computer Interaction</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
