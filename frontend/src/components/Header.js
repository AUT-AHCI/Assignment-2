import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { UserContext } from '../UserContext';

const Header = () => {
	const { user } = useContext(UserContext);

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	return (
		<Navbar
			className="navbar"
			variant="dark"
			collapseOnSelect
			expand="md"
			// style={{ position: 'fixed' }}
			// style={{ background: 'linear-gradient(to right, #c31432, #240b36)' }}
		>
			<Container>
				<Navbar.Brand>
					<LinkContainer style={{ cursor: 'pointer' }} to="/">
						<div className="nav-logo"> AHCI - Sign-Up Study</div>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					{user ? (
						<>
							<Nav className="ml-auto mr-4">
								<LinkContainer className="mx-1" to="/test">
									<Nav.Link>Test</Nav.Link>
								</LinkContainer>
							</Nav>
						</>
					) : (
						<>
							<Nav className="ml-auto mr-4">
								<LinkContainer to="/">
									<Nav.Link onClick={() => scrollTo('root')}>Home</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/">
									<Nav.Link onClick={() => scrollTo('about')}>About</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/">
									<Nav.Link onClick={() => scrollTo('team')}>Team</Nav.Link>
								</LinkContainer>
								<LinkContainer className="mx-1" to="/test">
									<Nav.Link>Test</Nav.Link>
								</LinkContainer>
							</Nav>
							<Nav>
								<LinkContainer to="/login">
									<Nav.Link>Sign in</Nav.Link>
								</LinkContainer>
							</Nav>
						</>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
