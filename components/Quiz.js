import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';
import { white, black } from '../utils/colors';

// Create a local `SubmitButton` component.
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
    	style={styles.submitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>NEW QUESTION</Text>
    </TouchableOpacity>
  );
}

class Quiz extends Component {
	state = {
		currentQuestion: 0,
		numberOfQuestions: 0
	}

	componentDidMount() {
		const deckTitle = this.props.navigation.state.params.title;
		const questions = this.props.decks[deckTitle].questions;
		const numberOfQuestions = questions.length;
		this.setState({
			numberOfQuestions
		});
	}

	submit = (() => {
		const currentQuestion = this.state.currentQuestion;
		const numberOfQuestions = this.state.numberOfQuestions;
		console.log(currentQuestion);
		console.log(numberOfQuestions);
		if (currentQuestion < numberOfQuestions - 1) {
			this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1
			}))
		}
	})

	render() {
		console.log(this.props);
		const deckTitle = this.props.navigation.state.params.title;
		const questions = this.props.decks[deckTitle].questions;
		const question = questions[this.state.currentQuestion].question;

		// let currentQuestion = 0;
		console.log(deckTitle);
		console.log(questions);
		// console.log(numberOfQuestions);
		return (
			<View>
				<Text>
					{
						question
					}
				</Text>
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
	}
});


function mapStateToProps(decks) {
	return {
		decks
	};
}

export default connect(
	mapStateToProps
)(Quiz);