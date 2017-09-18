import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}
	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({
			term: event.target.value
		});
	}

	// use the event object to prevent the browser from submitting the form at all
	onFormSubmit(event) {
		event.preventDefault();

		//we need to go and fetch weather data
		
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input type="text" 
				className="form-control" 
				placeholder="Get a five-day forecast in your favorite cities" 
				value={this.state.term} 
				onChange={this.onInputChange} />
				<span className="input-group-btn"><button type="submit" className="btn btn-primary">Submit</button></span>
			</form>
		)
	}
}