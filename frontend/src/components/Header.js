import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	return (
		<Navbar
			className="navbar"
			variant="dark"
			collapseOnSelect
			expand="md"
		>
			<Container>
				<Navbar.Brand>
					<LinkContainer style={{ cursor: 'pointer' }} to="/">
						<div className="nav-logo"> AHCI - Sign-Up Study</div>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					<>
						<Nav className="ml-auto mr-4">
							<LinkContainer className="mx-1" to="/survey">
								<Nav.Link>Take Survey</Nav.Link>
							</LinkContainer>
						</Nav>
					</>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
