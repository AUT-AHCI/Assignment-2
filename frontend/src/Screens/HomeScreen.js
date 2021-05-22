import React, { useContext, useEffect } from 'react';
import Description from '../components/Description';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
// import './Buttons.css';

const HomeScreen = ({ history }) => {
	return (
		<>
			<Hero></Hero>
			<Description></Description>
			<AboutUs></AboutUs>
			<Footer></Footer>
		</>
	);
};

export default HomeScreen;
