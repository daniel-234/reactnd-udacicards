import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { fetchAllDecks } from '../utils/api';
import { white, black, grey, darkGrey } from '../utils/colors';

function Deck({ title, questions, navigation }) {
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(
				'DeckDetail',
				{
					title: title
				}
			)}
			style={styles.deck}
		>
			<Text style={styles.title}>
				{title}
			</Text>
			<Text	style={styles.cardsNumber}>
				{questions.length + ' cards'}
			</Text>
		</TouchableOpacity>
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
			<View style={styles.container}>
				<FlatList
					data={decksArray}
					extraData={this.props}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		backgroundColor: white
	},
	deck: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 150,
		borderBottomColor: grey,
		borderBottomWidth: 0.8
	},
	title: {
		color: darkGrey,
		fontSize: 22
	},
	cardsNumber: {
		color: grey,
		fontSize: 16
	}
});

function mapStateToProps(decks) {
	return {
		decks
	};
}

export default connect(
	mapStateToProps
)(DecksList);