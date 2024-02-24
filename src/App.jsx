import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Navigation } from './components/Navigation';

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} exact />
				<Route path='/about' element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
