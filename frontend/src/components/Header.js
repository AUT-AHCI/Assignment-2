import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
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
					<>
						<Nav className="ml-auto mr-4">
							<LinkContainer className="mx-1" to="/test">
								<Nav.Link>Test</Nav.Link>
							</LinkContainer>
						</Nav>
					</>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
