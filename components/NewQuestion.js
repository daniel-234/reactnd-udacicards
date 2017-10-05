import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { white, black, red } from '../utils/colors';

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

class NewQuestion extends Component {
	state = {
		question: '',
		answer: '',
		show: false
	}

	submit = (() => {
		if (this.state.question && this.state.answer) {
			console.log(this.state.question);
			console.log(this.state.answer);
			this.setState({
				show: false
			});
		} else {
			this.setState({
				show: true
			});
		}

		this.setState({
			question: '',
			answer: ''
		});
	})

	showAlertMessage = (() => {
		if (this.state.show) {
			return (
				<Text style={styles.message}>
					Please, provide both a question and an answer.
				</Text>
			);
		} else {
			return null
		};
	});

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder='Enter a new question'
					value={this.state.question}
	      	onChangeText={(question) => this.setState({question})}
	      	maxLength={50}
	      />
	      <TextInput
					placeholder='Enter the answer'
					value={this.state.answer}
	      	onChangeText={(answer) => this.setState({answer})}
	      	maxLength={150}
	      />
	      {this.showAlertMessage()}
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
	message: {
		color: red,
		fontSize: 16,
		textAlign: 'center'
	}
});

export default NewQuestion;