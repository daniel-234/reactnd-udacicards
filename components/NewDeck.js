import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Create a lacal `SubmitButton` component.
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}



export default class NewDeck extends Component {
	submit = (() => {
		console.log('New Deck submitted')
	})

	render() {
		return (
			<View>
				<Text>New Deck</Text>
				<SubmitBtn
					onPress={this.submit}
				/>
			</View>
		)
	}
}