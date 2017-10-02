import { RECEIVE_DECKS, ADD_DECK } from '../actions';

function decks(state = {}, action) {
	switch(action.type) {
		case RECEIVE_DECKS:
			console.log(state);
			console.log(action);
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
		default:
			return state;
	}
}

export default decks;