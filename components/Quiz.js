import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';
import { white, black, green, red } from '../utils/colors';

// Create a local `CorrectButton` component.
function CorrectBtn({ onPress }) {
  return (
    <TouchableOpacity
    	style={styles.correctBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>Correct</Text>
    </TouchableOpacity>
  );
}

// Create a local `IncorrectButton` component.
function IncorrectBtn({ onPress }) {
  return (
    <TouchableOpacity
    	style={styles.incorrectBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>Incorrect</Text>
    </TouchableOpacity>
  );
}

function Card({ textDisplayed, linkToFlip, flipFunc }) {
	return (
		<View>
			<Text>
				{ textDisplayed }
			</Text>
			<Text
				onPress={() => flipFunc()}
			>
				{ linkToFlip }
			</Text>
		</View>
	);
}

class Quiz extends Component {
	state = {
		currentQuestion: 0,
		numberOfQuestions: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		front: true
	}

	componentDidMount() {
		const deckTitle = this.props.navigation.state.params.title;
		const questions = this.props.decks[deckTitle].questions;
		const numberOfQuestions = questions.length;
		this.setState({
			numberOfQuestions
		});
	}

	submitCorrect = (() => {
		const currentQuestion = this.state.currentQuestion;
		const numberOfQuestions = this.state.numberOfQuestions;
		console.log(currentQuestion);
		console.log(numberOfQuestions);
		if (currentQuestion <= numberOfQuestions - 1) {
			this.setState((prevState) => ({
				correctAnswers : prevState.correctAnswers + 1
			}))
		}
		// Check if there are still questions to display.
		if (currentQuestion < numberOfQuestions - 1) {
			this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1,
				front: true
			}))
		}

		console.log(currentQuestion);
		console.log(numberOfQuestions);
	})

	submitIncorrect = (() => {
		const currentQuestion = this.state.currentQuestion;
		const numberOfQuestions = this.state.numberOfQuestions;
		console.log(currentQuestion);
		console.log(numberOfQuestions);
		if (currentQuestion <= numberOfQuestions - 1) {
			this.setState((prevState) => ({
				incorrectAnswers : prevState.incorrectAnswers + 1
			}))
		}
		// Check if there are still questions to display.
		if (currentQuestion < numberOfQuestions - 1) {
			this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1,
				front: true
			}))
		}

		console.log(currentQuestion);
		console.log(numberOfQuestions);
	})

	flipCard = (() => {
		this.setState((prevState) => ({
			front: !prevState.front
		}))
	})

	displayCard = ((question, answer, flipCard) => {
		const currentSide = this.state.front;
		const correctAnswers = this.state.correctAnswers;
		const incorrectAnswers = this.state.incorrectAnswers;
		const totalAnswers = correctAnswers + incorrectAnswers;
		const numberOfQuestions = this.state.numberOfQuestions;
		let text;
		let link;
		console.log(question);
		console.log(answer);
		console.log(totalAnswers);
		console.log(numberOfQuestions);
		// console.log(flipCard);
		console.log(currentSide);
		if (totalAnswers === numberOfQuestions) {
			text = 'Your score is ' + correctAnswers + ' / ' + totalAnswers + '.';
			// link = undefined;
			console.log('Questions finished');

			return (
				<View>
					<Card
						textDisplayed={text}
						// linkToFlip={link}
						// flipFunc={flipCard}
					/>
				</View>


			);
		} else {
			if (currentSide === true) {
				text = question;
				link = 'Answer';
			} else {
				text = answer;
				link = 'Question';
			}
		}

		console.log('Correct: ' + correctAnswers);
		console.log('Incorrect: ' + incorrectAnswers);

		return (
			<View>
				<Card
					textDisplayed={text}
					linkToFlip={link}
					flipFunc={flipCard}
				/>
				<CorrectBtn
					onPress={this.submitCorrect}
				/>
				<IncorrectBtn
					onPress={this.submitIncorrect}
				/>
			</View>

		);
	})

	render() {
		console.log(this.props);
		const deckTitle = this.props.navigation.state.params.title;
		const questions = this.props.decks[deckTitle].questions;
		const question = questions[this.state.currentQuestion].question;
		const answer = questions[this.state.currentQuestion].answer;
		const correctAnswers = this.state.correctAnswers;
		const incorrectAnswers = this.state.incorrectAnswers;
		const totalAnswers = correctAnswers + incorrectAnswers;
		const numberOfQuestions = this.state.numberOfQuestions;

		// let currentQuestion = 0;
		console.log(deckTitle);
		console.log(questions);
		// console.log(numberOfQuestions);
		return (
			<View>
				<Text>
					{
						totalAnswers + '/' + numberOfQuestions
					}
				</Text>
				{ /*
				<Text>
					{
						question
					}
				</Text>
			*/}
				{ this.displayCard(question, answer, this.flipCard) }
				{ console.log(this.state.front) }

				{
					/*
						<CorrectBtn
							onPress={this.submitCorrect}
						/>
						<IncorrectBtn
							onPress={this.submitIncorrect}
						/>
					 */
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around'
	},
	correctBtn: {
		backgroundColor: green,
		padding: 10,
		height: 45,
		marginLeft: 100,
		marginRight: 100,
		marginTop: 10,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center'
	},
	incorrectBtn: {
		backgroundColor: red,
		padding: 10,
		height: 45,
		marginLeft: 100,
		marginRight: 100,
		marginTop: 10,
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