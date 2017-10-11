import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { white, black, grey } from '../utils/colors';
import { generateUUID } from '../utils/helpers';
import { submitNewDeck, getStoredDecks } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { NavigationActions } from 'react-navigation';

// Create a local `SubmitButton` component.
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
    	style={styles.submitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

function Question() {
	return (
		<View>
			<Text style={styles.question}>
				What is the title of your new deck?
			</Text>
		</View>
	);
}

class NewDeck extends Component {
	state = {
		title: ''
		/*
		 * Keep track of how many decks have been inserted. Used when a
		 * user doesn't write a title and the app automatically sets it
		 * with the progressive number of the current desk.
		 */
	};

	submit = (() => {
		// Get the decks from props (passed by `mapStateToProps`)
		const decks = this.props.decks
		// Count the number of properties in the decks object.
		const decksCounter = Object.keys(decks).length;
		/*
		 * Store a title for the deck. If there is a not empty string value,
		 * take it. Otherwise, assign an automatic title to the deck, with
		 * the current deck progressive number.
		 */
		console.log(decksCounter);
		/*
		 * If the user provided a title, use it. Otherwise build one, with
		 * the progressive number of the next deck.
		 */
		const titleText = this.state.title ? this.state.title : 'New Deck ' +
			decksCounter;
		// Add an id to this deck
		const key = titleText;
		// Get the deck title from the form.
		const newDeck = {
			title: titleText,
			questions: []
		};
		// Update Redux adding the new deck to the store.
		this.props.dispatch(addDeck({
			[key]: newDeck
		}));
		// Save to 'DB' (AsyncStorage has been used here).
		submitNewDeck(key, newDeck);
		/*
		 * Set the state text value back to the empty screen.
		 * Increment the decks counter. Used to assign a progressive
		 * number as a new deck without title is created.
		 */
		this.setState({
			title: ''
		});
		// Navgate to home.
		this.toHome();

		console.log(key + ' submitted');
	})

	toHome = () => {
		this.props.navigation.dispatch(NavigationActions.back({
			key: 'NewDeck'
		}))
	}

	render() {
		console.log(this.props);
		const decks = this.props.decks;
		console.log(decks);
		const decksNumber = Object.keys(decks).length;
		console.log(decksNumber);
		return (
			<View style={styles.container}>
				<Question />
				<TextInput
					placeholder='Deck Title'
					value={this.state.title}
	      	onChangeText={(title) => this.setState({title})}
	      	maxLength={35}
	      />
				<SubmitBtn
					onPress={this.submit}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around'
	},
	submitBtn: {
		backgroundColor: black,
		padding: 10,
		height: 45,
		marginLeft: 100,
		marginRight: 100,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center'
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	question: {
		color: grey,
		fontSize: 32,
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
)(NewDeck);