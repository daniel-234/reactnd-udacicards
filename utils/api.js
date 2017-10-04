import { AsyncStorage } from 'react-native';
import { formatResults } from './helpers';

const DECKS_STORAGE_KEY = 'UdaciCards: decks';

export function fetchAllDecks() {
	console.log(AsyncStorage.getItem(DECKS_STORAGE_KEY));
	AsyncStorage.clear();
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(formatResults)
}

export function submitNewDeck(key, deck) {
	AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[key]: deck}), () => {
		AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
			console.log(result);
		})

		AsyncStorage.getAllKeys((err, keys) => {
		  AsyncStorage.multiGet(keys, (err, stores) => {
		  	console.log(stores);
		   stores.map((result, i, store) => {
		     // Get at each store's key/value so you can work with it
		     let key = store[i][0];
		     let value = store[i][1];
		     console.log(key);
		     console.log(value);
		    });
		  });
		});
	})
}