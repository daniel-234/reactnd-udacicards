import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions';

function decks(state = {}, action) {
	switch(action.type) {
		case RECEIVE_DECKS:
			console.log(state);
			console.log(action.decks);
			return {
				...state,
				...action.decks
			};
		case ADD_DECK:
			console.log(state);
			console.log(action);
			return {
				...state,
				...action.deck
			};
		case ADD_QUESTION:
			const question = action.question;
			console.log(question);
			const cardKey = question.cardKey;
			console.log(cardKey);
			console.log(state);
			const result = {
				...state,
				[cardKey]: {
					...state[cardKey],
					questions: [
						...state[cardKey].questions,
						{
							question: question.question,
							answer: question.answer
						}
					]
				}
			}

			console.log(result);
			console.log(state);
			return result;
		default:
			return state;
	}
}

export default decks;