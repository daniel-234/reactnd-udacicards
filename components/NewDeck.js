import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { white, black, grey } from '../utils/colors';

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
		console.log('New Deck submitted')
	})

	render() {
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
		// flexDirection: 'row',
		justifyContent: 'space-around'
	},
	submitBtn: {
		backgroundColor: black,
		padding: 10,
		height: 45,
		marginLeft: 100,
		marginRight: 100,
		borderRadius: 6,
		// alignSelf: 'flex-end',
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

export default NewDeck;