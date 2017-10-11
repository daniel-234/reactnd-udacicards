import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addQuestion } from '../actions';
import { white, black, red, grey } from '../utils/colors';
import { submitNewQuestion } from '../utils/api';
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

class NewQuestion extends Component {
	state = {
		question: '',
		answer: '',
		/*
		 * If set to true, display a message to the user asking to
		 * insert both question and answer.
		 */
		showMessage: false
	}

	submit = () => {
		const { question, answer } = this.state;
		const cardTitle = this.props.navigation.state.params.title;

		if (question && answer) {
			console.log(question);
			console.log(answer);

			// Save to 'DB' (AsyncStorage has been used here).
			submitNewQuestion(cardTitle, question, answer);

			this.setState({
				showMessage: false
			});

			// Update Redux adding the new deck to the store.
			this.props.dispatch(addQuestion({
				cardTitle,
				question,
				answer
			}));

			this.goBack();
		} else {
			this.setState({
				showMessage: true
			});
		}
	}

	goBack = () => {
		console.log('home')
		this.props.navigation.dispatch(NavigationActions.back())
	}

	showAlertMessage = () => {
		if (this.state.showMessage) {
			return (
				<Text style={styles.message}>
					Please, provide both a question and an answer.
				</Text>
			);
		} else {
			return null
		};
	};

	render() {
		console.log(this.props);
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder='Enter a new question'
						value={this.state.question}
		      	onChangeText={(question) => this.setState({question})}
		      	maxLength={50}
		      	style={styles.input}
		      />
		      <TextInput
						placeholder='Enter the answer'
						value={this.state.answer}
		      	onChangeText={(answer) => this.setState({answer})}
		      	maxLength={100}
		      	style={styles.input}
		      />
				</View>
	      { this.showAlertMessage() }
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
		justifyContent: 'flex-start',
		backgroundColor: white
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
	},
	input: {
		borderRadius: 4,
		borderWidth: 1,
		borderColor: grey,
		marginTop: 30,
		height: 40,
		width: 300,
		alignSelf: 'center'
	},
	inputContainer: {
		marginTop: 140,
		marginBottom: 60
	}
});

export default connect()(NewQuestion);
// export default NewQuestion;