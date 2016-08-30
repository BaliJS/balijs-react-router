import React, { Component } from 'react';
import { Link } from 'react-router';
import Loading from './Loading';
import faker from 'faker';
import 'whatwg-fetch';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			todos: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/todos')
		  .then(response =>  response.json())
		  .then(todos => this.setState({ todos, loading: false }));
	}

	render() {
		const todos = this.state.todos.map(({ id, title }) => (
			<li key={id}>
				<h3><Link to={`/todos/${id}`}>{title}</Link></h3>
			</li>
		));

		let dom = this.state.loading ? <Loading /> : <ul>{todos}</ul>;

		return (
			<div>
				<h1>Home</h1>
				{dom}
			</div>
		);
	}
}
