import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

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
                <p>
                    To conduct the analysis of the data, statistical analysis was used.
                    Gathered data is translated into graphs, tables and charts to help 
                    readability and present the data in an understandable manner. 
                    Findings are then presented in a logical, sequential order 
                    (University of Southern California, 2021).
                </p>
                <p>
                    We then utilized descriptive analysis to perform a primary level of 
                    analysis as outlined by Bhatia (2018), to summarize individual variables 
                    and find patterns.
                </p>
                <p>
                    We analysed the data to check for statistics such as:
                </p>
                <ul>
                    <li>Mean - the numerical average</li>
                    <li>Median - a midpoint in the numerical data</li>
                    <li>Mode - the most common value</li>
                    <li>Percentage - preference amongst the respondents</li>
                    <li>Frequency - the number of times a certain value appears</li>
                    <li>Range - highest and lowest values within the data</li>
                </ul>

                <br/><br/><br/>
                <h1>How The Testing Went</h1>
                <br/>
                <p>
                    Testing began on the 1st of June, with the survey being distributed amongst x people.
                </p>
                <p>
                    Over the course of our testing phase, we were able to retrieve 
                    15 results from participants.
                </p>

                <br/><br/><br/>
                <h1>Results</h1>
                <br/>
                <p>
                    graphs, tables, charts etc, 
                    statistical analysis.
                </p>

                <br/><br/><br/>
                <h1>Discussion</h1>
                <br/>
                <p>
                    interpretation of results, 
                    description of trends, comparisons, relationships, 
                    discussion of implications, 
                    limitations
                </p>

                <br/><br/><br/>
                <h1>Conclusion</h1>
                <br/>
                <p>
                    summary of findings, recommendations, future research
                </p>

                <br/><br/><br/>
                <h1>HCI Discoveries</h1>
                <br/>
                <p>
                    what have we learned about hci from this?
                </p>

                <br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <div className="references">
				<h1>References</h1>
				<p>
					University of Southern California. (2021).
					<em> Quantitative Methods. </em>
					Retrieved June 1, 2021, from
					https://libguides.usc.edu/writingguide/quantitative
				</p>
                <p>
					Bhatia, M. (2018).
					<em> Your Guide to Qualitative and Quantitative Data Analysis Methods. </em>
					Retrieved June 1, 2021, from
					https://humansofdata.atlan.com/2018/09/qualitative-quantitative-data-analysis-methods/
				</p>
                

                
                <br/><br/><br/>
                </div>
            </Container>
        </div>
    );
};

export default Findings;
