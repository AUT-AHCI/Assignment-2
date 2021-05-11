import React, { useContext, useEffect } from 'react';
import Developers from '../components/Developers';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import './Buttons.css';

const HomeScreen = ({ history }) => {
	return (
		<>
			<Hero></Hero>
			<Developers></Developers>
			<Footer></Footer>
		</>
	);
};

export default HomeScreen;
