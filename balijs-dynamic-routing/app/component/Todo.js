import React, { Component } from 'react';
import Loading from './Loading';
import 'whatwg-fetch';

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			userId: '',
			completed: false,
			loading: true
		}
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.params.id}`)
		  .then(response => response.json())
		  .then(({ title, completed, userId }) => this.setState({ title, completed, userId, loading: false }));
	}
	
	render() {
		const { title, completed, userId, loading } = this.state;
		if(loading) {
			return <Loading />
		} else {
			return (
				<div>
					<h3>Title: {title}</h3>
					<p>Complete: {completed ? 'Beres.' : 'Belum beres.'}</p>
					<p>User: {userId}</p>
				</div>
			);
		}
	}
}