import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'Udacicards: decks';

export function submitEntry({ entry, key}) {
	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
		[key]: entry
	}));
}