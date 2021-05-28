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
						inside one bee's mind, there is a scale that weighs that mischievous soul 
						that berates others and a kind soul that allows others to fish the southern waters
					</p>
				</div>
				<div className="team-member">
					<h2>Ashley</h2>
					<p>
						Text Here... Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Repudiandae ad fugit ex facere error quisquam ratione nobis quaerat,
						sapiente molestias autem itaque perferendis aliquid voluptatibus, nihil
						voluptatem officia ea sunt. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Distinctio vel illum dignissimos, quae deleniti commodi
						tenetur incidunt a laborum veritatis molestias dolore veniam accusamus
						libero autem vitae odio explicabo repellat?
					</p>
				</div>
				<div className="team-member">
					<h2>Robert</h2>
					<p>
						Text Here... Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ratione ullam molestias corporis quis voluptate, commodi numquam a
						voluptatem blanditiis harum quam facilis quaerat, fugit ipsum laborum
						quidem, sint ducimus nam? Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Explicabo quasi repudiandae enim id debitis, eaque quo,
						amet ex cum nobis quod eveniet ad odit saepe, dolor consequatur ea
						voluptatum harum?
					</p>
				</div>
				<div className="team-member">
					<h2>Travis</h2>
					<p>
						Text Here... Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa
						mollitia tempore fuga animi tempora amet neque blanditiis quibusdam, vitae
						dolore at qui unde, eos alias adipisci incidunt eaque eum. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Optio earum dicta eos labore odio,
						possimus atque placeat! Quas vero aspernatur ducimus temporibus harum
						quibusdam saepe soluta, eius, suscipit placeat necessitatibus?
					</p>
				</div>
			</Container>
		</div>
	);
};

export default AboutUs;
