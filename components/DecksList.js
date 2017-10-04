import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { fetchAllDecks } from '../utils/api';

class DecksList extends Component {
	componentDidMount() {
		const { dispatch } = this.props;

		fetchAllDecks()
		.then((decks) => {
			console.log(decks)
			dispatch(receiveDecks(decks))
		})
		console.log(this.props);
	}

	render() {
		const decks = this.props.decks;
		console.log(decks);
		// console.log(decks.length);
		// console.log(Object.keys(decks).length);
		// console.log(Object.keys(decks));

		// const keys = Object.keys(decks).map(function(key) {
		// 	return JSON.stringify(decks[keys])
		// })

		// console.log(keys);

		return (
			<View>
				{Object.keys(decks).map((key) => (
					<Text
						key={key}
						onPress={() => this.props.navigation.navigate(
							'DeckDetail',
							{ entryId: key,
								title: decks[key].title
							}
						)}
					>
						{decks[key].title}
					</Text>
				))}
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