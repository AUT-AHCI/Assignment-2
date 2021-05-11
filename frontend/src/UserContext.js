import { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/**
 * Initiates firebase application
 * @return { void }
 */
export function init() {
	if (!firebase.apps.length) {
		console.log(process.env.REACT_APP_FIREBASE_CONFIG);
		firebase.initializeApp(JSON.parse(''));
	}
}

/**
 *
 * @param {*} handler
 * @return { void }
 */
export function attachAuthListener(handler) {
	return firebase.auth().onAuthStateChange((user) => {
		handler(user);
	});
}

/**
 * Handles Authentication for User
 */
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userToken, setUserToken] = useState('');

	const contextValue = {
		currentUser,
		isLoggedIn,
		userToken,
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			setCurrentUser(user);
			if (user) {
				const _token = await user.getIdToken();

				setUserToken(_token);
			}
			return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
		});
	}, []);

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
