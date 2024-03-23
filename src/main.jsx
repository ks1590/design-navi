import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// ReactDOM.createRootの代わりにReactDOM.renderを使用
const container = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	container
);
