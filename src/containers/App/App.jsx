import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allData } from '../../actions';
import CardContainer from '../../components/CardContainer/CardContainer';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			error: false
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/v1/presidents')
			.then(res => res.json())
			.then(data => {
				this.props.allData(data);
				this.setState({
					isLoading: false,
					error: false
				});
			})
			.catch(err => {
				this.setState({
					isLoading: true,
					error: true
				});
				console.log(err);
			});
	}

	render() {
		let page;

		if (this.state.isLoading) {
			page = 'Loading...';
		} else if (this.state.error) {
			page = 'Error loading page.';
		} else {
			page = (
				<div className="App">
					<header className="App-header">
						<h1>Presidents and Assholes</h1>
					</header>
					<CardContainer data={allData} />
				</div>
			);
		}
		return page;
	}
}

export const mapStateToProps = state => ({
	allData: state.allData
});

export const mapDispatchToProps = dispatch => ({
	allData: data => dispatch(allData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
