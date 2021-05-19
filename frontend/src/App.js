import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Header from './components/Header';
import TestScreen from './Screens/TestScreen';

function App() {
	return (
		<Router>
			<Header></Header>
			<main>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/test" component={TestScreen} />
			</main>
		</Router>
	);
}

export default App;
