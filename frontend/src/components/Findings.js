import React, { useEffect, } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Findings = () => {
	
	const containerStyle = {
		background: 'rgba(0, 0, 0, 0.6)',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100%',
	};

	return (
        <div style={containerStyle}>
            <Container className="d-flex flex-column justify-content-center align-items-center w-50">
            
                <br/><br/><br/>
                <h1>Findings</h1>
                <br/>
                <p>the question is, i dont know what im doing</p>

                <br/><br/><br/>
            </Container>

        </div>

    );

};

export default Findings;