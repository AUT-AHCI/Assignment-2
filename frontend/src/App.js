import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Header from './components/Header';
import TestScreen from './Screens/TestScreen';
import FindingScreen from './Screens/FindingScreen';
import DisclaimerScreen from './Screens/DisclaimerScreen';

function App() {
	return (
		<Router>
			<Header></Header>
			<main>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/test" component={TestScreen} />
				<Route exact path="/findings" component={FindingScreen} />
				<Route exact path="/disclaimer" component={DisclaimerScreen} />
			</main>
		</Router>
	);
}

export default App;
