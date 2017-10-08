import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { white, black, grey } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/api';
// import NewQuestion from './NewQuestion';

// Create a local `AddCardButton` component.
function AddCardBtn({ onPress }) {
  return (
    <TouchableOpacity
    	style={styles.addCardBtn}
      onPress={onPress}>
      <Text style={styles.addCardBtnText}>Add Card</Text>
    </TouchableOpacity>
  );
}

// Create a local `StartQuizButton` component.
function StartQuizBtn({ onPress }) {
  return (
    <TouchableOpacity
    	style={styles.startQuizBtn}
      onPress={onPress}>
      <Text style={styles.startQuizBtnText}>Start Quiz</Text>
    </TouchableOpacity>
  );
}

class DeckDetail extends Component {
	startQuiz = (() => {
		const deckTitle = this.props.navigation.state.params.title;
		const questions = this.props.decks[deckTitle].questions;
		if (questions.length) {
			clearLocalNotification()
			 .then(setLocalNotification)
			return (
				<StartQuizBtn
					onPress={() => this.props.navigation.navigate(
						'Quiz',
						{
							title: this.props.navigation.state.params.title
						}
					)}
				/>
			);
		}
	})

	render() {
		console.log(this.props);
		return (
			<View>
				<Text>
					Deck Detail - {
						JSON.stringify(this.props.navigation.state.params.title)
					}
				</Text>
				<AddCardBtn
					onPress={() => this.props.navigation.navigate(
						'NewQuestion',
						{
							title: this.props.navigation.state.params.title
						}
					)}
				/>
				{this.startQuiz()}

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around'
	},
	addCardBtn: {
		backgroundColor: white,
		padding: 10,
		height: 45,
		marginLeft: 100,
		marginRight: 100,
		marginTop: 10,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center'
	},
	addCardBtnText: {
		color: black,
		fontSize: 22,
		textAlign: 'center'
	},
	startQuizBtn: {
		backgroundColor: black,
		padding: 10,
		height: 45,
		marginLeft: 100,
		marginRight: 100,
		marginTop: 10,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center'
	},
	startQuizBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	}
});

function mapStateToProps(decks) {
	return {
		decks
	};
}

export default connect(
	mapStateToProps
)(DeckDetail);