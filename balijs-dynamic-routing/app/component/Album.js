import React, { Component } from 'react';
import { Link } from 'react-router';
import Loading from './Loading';
import 'whatwg-fetch';

export default class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			albums: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/albums')
		  .then(function(response) {
		    return response.json()
		  })
		  .then((albums) => {
				this.setState({ albums, loading: false });
		  });
	}

	render() {
		const albums = this.state.albums.map(album => (
			<li key={album.id}>
				<h3>{album.title}</h3>
			</li>
		));

		let dom = this.state.loading ? <Loading /> : <ul>{albums}</ul>;
		return (
			<div>
				<h1>Albums</h1>
				{dom}
			</div>
		);
	}
}