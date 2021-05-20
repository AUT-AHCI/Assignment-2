import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Header from './components/Header';
import TestScreen from './Screens/TestScreen';
import DisclaimerScreen from './Screens/DisclaimerScreen';
import FindingsScreen from './Screens/FindingsScreen';

function App() {
	return (
		<Router>
			<Header></Header>
			<main>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/test" component={TestScreen} />
				<Route exact path="/disclaimer" component={DisclaimerScreen} />
				<Route exact path="/findings" component={FindingsScreen} />
			</main>
		</Router>
	);
}

export default App;
