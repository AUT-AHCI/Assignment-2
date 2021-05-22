import React, { useEffect, } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Description = () => {
	
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
                <h1>Overview</h1>
                <br/>
                <p>i dont know what im doing</p>

                <br/><br/><br/>
                <h1>Hypothesis</h1>
                <br/>
                <p>bees</p>

                <br/><br/><br/>
                <h1>Methodology</h1>
                <br/>
                <p>Hello, my brother just pranked me by switching my brownies with edibles and now I'm high as hell, so I'm looking for some gory gameplay, can this place can deliver?</p>
                
                <br/>
                <Container className="d-flex flex-column justify-content-center align-items-center">
                    <Row>
                        <Col>
                            <h2>Processes</h2>
                            <p>⣿⠿⣛⣯⣭⣭⣭⣭⣭⣭⣥⣶⣶⣶⣶⣶⣮⣭⣭⣭⣭⣭⡛⢻⣿⣿⣿⣿⣿⣿⣿ 
⡇⣾⣿⣿⣿⣿⣿⠿⢛⣯⣭⣭⣷⣶⣶⣶⣶⣶⣶⣶⣶⣬⣭⢸⣿⣿⣿⣿⣿⣿⣿ 
⢰⣶⣶⣶⣶⣶⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿ 
⡏⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⡿⢋⣩⠭⠭⡙⢋⣭⠶⠒⠒⢍⡘⠻⣿⣿⣿⣿⣿⣿ 
⡇⣿⣿⣿⣿⣿⢸⣿⣿⡿⣋⣴⣯⡴⠚⠉⡡⠤⢄⣉⣅⡤⠄⢀⢺⡌⣻⣿⣿⣿⣿ 
⡇⣿⣿⣿⣿⣿⢸⣿⡏⡆⣿⣿⣉⣐⢴⣿⠈⠈⢀⠟⡿⠷⠄⢠⢎⢰⣿⣿⣿⣿⣿ 
⡇⣿⣿⣿⣿⣿⢸⣿⢸⣿⣿⣿⡫⣽⣒⣤⠬⠬⠤⠭⠭⢭⣓⣒⡏⣾⣿⣿⣿⣿⣿ 
⡇⣿⣿⣿⣿⣿⢸⡿⢸⣿⣿⣿⣿⣷⣾⣾⣭⣭⣭⣭⣭⣵⣵⡴⡇⠉⠹⣿⣿⣿⣿ 
⡇⣿⣿⣿⣿⣿⢸⠠⠄⠉⠉⠛⠛⠛⠛⠛⠊⠉⠉⠉⠉⠁⠄⠄⠄⠠⢤⡸⣿⣿⣿ 
⢇⡻⠿⣿⣿⣿⠘⣠⣤⣤⣀⡚⠿⢦⣄⡀⠤⠤⠤⣤⣤⣤⣤⣤⣤⣄⣘⠳⣭⢻⣿ 
⣎⢿⣿⣶⣬⣭⣀⠛⢿⣿⣿⣿⣷⣶⣬⣙⡳⠟⢗⣈⠻⠛⠛⠛⠛⢿⣿⣿⣦⢸⣿ 
⣿⣆⢿⣿⣿⣿⣽⣛⣲⠤⠤⢤⣤⣤⣤⣀⡙⣿⣿⣿⠇⣤⣤⣤⡶⢰⣿⣿⠃⣼⣿ 
⣿⣿⣆⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⡖⣸⣿⡟⣠⣶⣶⡖⣠⣿⡿⣡⣾⣿⣿ 
⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣽⣛⣛⡻⣿⠇⣿⣿⠃⣿⣟⡭⠁⣿⣯⣄⢻⣿⣿⣿ 
⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣷⣭⣙⠗⣸⣿⡇⣾⣮⣙⡛⣸⣿⣿⣿</p>
                        </Col>
                        <Col>
                            <h2>Theory</h2>
                            <p>Kinda bug and kinda snack 🐛🍓 Try to catch 'em in your trap 🐛🍌 Feed somebody and you'll see 🐛🍕 We are whatever we eat 🐛🍔 Find 'em hiding in the sand 🐛🌭 Tearing up a ketchup patch 🐛🍩 Come to Snaktooth Island and discover 🐛🥑 It's Bugsnax 🐛🍪</p>
                        </Col>
                    </Row>                  
                </Container>

                <br/><br/><br/>
                <h1>Planning and Implementation</h1>
                <br/>
                <p>YOU HATE THEM? Get ragged, bro! This DESTROYED our friendship! Hmm but I cant change this, its your Opinion. Anyway GOOD LUCK! Oh and before I forget it, we will see each other again because I can teleport me to you! So you are never alone and maybe you meet GLP or Paluten. But it changes nothing because you HATE THEM! See you later!</p>
                <br/><br/><br/>
                <LinkContainer to="/findings" className="mx-2 my-2">
						<Button className="findingsBtn">Study Findings</Button>
					</LinkContainer>
                    <br/><br/><br/><br/><br/>
            </Container>           
        </div>

    );

};

export default Description;