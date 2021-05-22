import React, { useContext, useEffect } from 'react';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
// import './Buttons.css';

const HomeScreen = ({ history }) => {
	return (
		<>
			<Hero></Hero>
			<Description></Description>
			<Footer></Footer>
		</>
	);
};

export default HomeScreen;
