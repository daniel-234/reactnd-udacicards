import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { white, black, grey } from '../utils/colors';
import { generateUUID } from '../utils/helpers';
import { submitNewDeck, getStoredDecks } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

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
	submit = (() => {
		// Add an id to this deck
		const key = generateUUID();

		// TODO
		// Get the deck title from the form.
		const newDeck = {
			// TODO
			// Refactor
			title: 'New deck'
		};

		// Update Redux
		this.props.dispatch(addDeck({
			[key]: newDeck
		}));

		// Navigate to home

		// Save to 'DB'
		submitNewDeck(key, newDeck)
			// .then(items => (
			// 	console.log(items)
			// ))
			// .catch(err => (
			// 	console.log(err)
			// ))
		// Delete later
		// getStoredDecks()
		// 	.then(items => (
		// 		console.log(items)
		// 	))
		// 	.catch(err => (
		// 		console.log(err)
		// 	));

		// Clear local notification

		console.log(newDeck.title + ' ' + key + ' submitted');
	})

	render() {
		console.log(this.props);
		return (
			<View style={styles.container}>
				<Question />
				<Text style={{alignSelf: 'center'}}>FORM PLACEHOLDER</Text>
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

export default connect()(NewDeck)