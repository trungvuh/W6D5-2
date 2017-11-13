import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const Folders = [
	{ title: "one", content: "This is the first" },
	{ title: "two", content: "This is the second"},
	{ title: "three", content: "This is the  third"}
];

const Names = ['Trung', 'Bo', 'Bob', 'Tyler', 'Kevin', 'Kelly'];

class Root extends React.Component {
	render () {
		return (
			<div>
				<Clock />
				<br/>
				<Tabs folders={Folders} />
				<br/>
				<Autocomplete names={Names} />
			</div>
		);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById('main');
	ReactDOM.render(<Root />, root);
});
