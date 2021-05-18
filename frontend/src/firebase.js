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
		firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));
	}
}
