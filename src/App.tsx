import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Header name="World">
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
					<li>Item 4</li>
				</ul>
			</Header>
		</div>
	);
}

export default App;
