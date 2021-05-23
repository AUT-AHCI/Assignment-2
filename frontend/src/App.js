import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Header from './components/Header';
import SurveyScreen from './Screens/SurveyScreen';
import FindingScreen from './Screens/FindingScreen';

function App() {
	return (
		<Router>
			<Header></Header>
			<main>
				<Route exact path="/" component={HomeScreen} />
				<Route exact path="/survey" component={SurveyScreen} />
				<Route exact path="/findings" component={FindingScreen} />
			</main>
		</Router>
	);
}

export default App;
