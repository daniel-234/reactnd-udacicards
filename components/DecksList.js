import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { fetchAllDecks } from '../utils/api';

function Deck({ title, questions, navigation }) {
	return (
		<View>
			<Text
				onPress={() => navigation.navigate(
					'DeckDetail',
					{
						// entryId: key,
						title: title
					}
				)}
			>
				{title} {'     -  ' + questions.length + ' cards'}
			</Text>
		</View>
	);
}

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


	renderItem = ({ item }) => {
		return <Deck {...item} navigation={this.props.navigation} />
	}

	render() {
		const decks = this.props.decks;
		console.log(decks);
		console.log(this.props);
		const decksArray = [];
		Object.keys(decks).map((title) => (
			decksArray.push(decks[title])
		))
		console.log(decksArray);
		return (
			<View>
				<FlatList
					data={decksArray}
					extraData={this.props}
					renderItem={this.renderItem}
				/>
				{
					/* decksArray.map(({ title }) => (
					// <Text
					// 	key={key}
					// 	onPress={() => this.props.navigation.navigate(
					// 		'DeckDetail',
					// 		{
					// 			entryId: key,
					// 			title: decks[key].title
					// 		}
					// 	)}
					// >
					// 	{decks[key].title}
					// </Text>

					<Deck
						key={title}
						title={title}
						navigation={
						// 	() => this.props.navigation.navigate(
						// 	'DeckDetail',
						// 	{
						// 		// entryId: key,
						// 		title: title
						// 	}
						// )
						this.props.navigation


					}
					/>
				))

			*/}
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