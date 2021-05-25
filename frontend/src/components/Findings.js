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
                <p>Over the course of our testing phase, we were able to retrieve x results from participants.</p>

                <br/><br/><br/>
                <h1>How The Testing Went</h1>
                <br/>
                <p>it hasn't</p>

                <br/><br/><br/>
                <h1>Results</h1>
                <br/>
                <p>we need some of these probably</p>

                <br/><br/><br/>
                <h1>Data Analysis</h1>
                <br/>
                <p>looks like the cheese is melted</p>

                <br/><br/><br/>
                <h1>HCI Discoveries</h1>
                <br/>
                <p>wow</p>

                <br/><br/><br/>
            </Container>

        </div>

    );

};

export default Findings;