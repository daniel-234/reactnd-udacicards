import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { fetchAllDecks } from '../utils/api';

class DecksList extends Component {
	componentDidMount() {
		const { dispatch } = this.props;

		fetchAllDecks()
		.then((decks) => dispatch(receiveDecks(decks))
			.then(({ decks }) => {
				console.log(decks)
			})
		)
		// .then(({ decks }) => {
		// 	console.log(decks)
		// })
		// {
		// 	console.log(entries)
		// })

		console.log(this.props);
	}

	render() {
		return (
			<View>
				<Text>{JSON.stringify(this.props)}</Text>
			</View>
		);
	}
};

function mapStateToProps(decks) {
	return {
		decks
	};
}

export default connect(
	mapStateToProps
)(DecksList);