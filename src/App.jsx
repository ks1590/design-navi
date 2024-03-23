// import '@mantine/core/styles.css';
// import { MantineProvider } from '@mantine/core';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
// import { Navigation } from './components/Navigation';

function App() {
	return (
		// <MantineProvider>
		// <Router>
		// 	<Navigation />
		// 	<Routes>
		// 		<Route path='/' element={<Home />} exact />
		// 		<Route path='/about' element={<About />} />
		// 	</Routes>
		// </Router>
		// </MantineProvider>
		<Home />
	);
}

export default App;
