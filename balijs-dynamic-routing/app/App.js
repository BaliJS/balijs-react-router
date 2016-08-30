import React, { Component } from 'react';
import { Link } from 'react-router';
import s from './main.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>BaliJS #9 - Dynamic Routing</h1>
				<ul className={s.nav}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/album">Albums</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<div className={s.content}>
					{this.props.children}
				</div>
			</div>
		);
	}
}