import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciCards: decks';

let A1_object = {
	// age: 30,
	// traits: {hair: 'brown', eyes: 'brown'}
}

let A1_delta = {
	// age: 31,
	// traits: {hair: 'blue', shoe_size: 10}
	// height: '180'
}

const newDeck = {
	// TODO
	// Refactor
	title: 'New deck'
};

export function submitNewDeck(key, deck) {
	console.log({[key]:deck});
	A1_delta = {[key]: deck};
	// AsyncStorage.setItem('A1', JSON.stringify(A1_object), () => {
		AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[key]: deck}), () => {
			AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
				console.log(result);
			})

			AsyncStorage.getAllKeys((err, keys) => {
			  AsyncStorage.multiGet(keys, (err, stores) => {
			  	console.log(stores);
			   stores.map((result, i, store) => {
			     // get at each store's key/value so you can work with it
			     let key = store[i][0];
			     let value = store[i][1];
			     console.log(key);
			     console.log(value);
			    });
			  });
			});
		})
	// })

}

export function getStoredDecks() {
	Promise.all(AsyncStorage.getAllKeys()
		.then(ks =>
			ks.map(k =>
				AsyncStorage.getItem(k)
			)
		)
	)
}

	// return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
	// 	[key]: deck
	// }));
// }