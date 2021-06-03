import React from 'react';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
	return (
		<div className="wrapper">
			<h1>
				<b>About The Team</b>
			</h1>
			<Container className="team">
				<div className="team-member">
					<h2>Aaron</h2>
					<p>
						University student of four years currently undertaking the BCIS degree 
						at AUT, majoring in Software Dev.<br /> Studying computer science due to a 
						general interest in technology and an apparent latent skill around 
						programming, however still trying to figure out my niche.
					</p>
				</div>
				<div className="team-member">
					<h2>Ashley</h2>
					<p>
						AUT Student studying a Bachelor of Computer and Information Sciences, I am
						aiming for Double Major in Software Development and Computer Science.
						<br /> I enjoy web & software development with my main coding knowledge
						being founded in Java, having since transfered these skills into other
						coding languages such as JavaScript, PHP and Python.
					</p>
				</div>
				<div className="team-member">
					<h2>Robert</h2>
					<p>
						I am in my final year of my BCIS degree and I am majoring in software
						development. I enjoy web development as well as software engineering
						principles.
					</p>
				</div>
				<div className="team-member">
					<h2>Travis</h2>
					<p>
						I am a second year BCIS student at AUT. I am majoring in Software
						Development. I enjoy learning about web and mobile app development.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default AboutUs;
