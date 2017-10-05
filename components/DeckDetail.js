import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { white, black, grey } from '../utils/colors';
// import NewQuestion from './NewQuestion';

// Create a local `SubmitButton` component.
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
    	style={styles.submitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>Add Card</Text>
    </TouchableOpacity>
  );
}

class DeckDetail extends Component {
	render() {
		console.log(this.props);
		return (
			<View>
				<Text>
					Deck Detail - {
						JSON.stringify(this.props.navigation.state.params.title)
					}
				</Text>
				<SubmitBtn
					onPress={() => this.props.navigation.navigate(
						'NewQuestion',
						{
							key: this.props.navigation.state.params.title
						}
					)}
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
	}
});

export default DeckDetail;