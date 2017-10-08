import { AsyncStorage } from 'react-native';
import { formatResults } from './helpers';
import { Notifications, Permissions } from 'expo';

const DECKS_STORAGE_KEY = 'UdaciCards:decks';
const NOTIFICATION_KEY = 'UdaciCards:notifications';

export function fetchAllDecks() {
	console.log(AsyncStorage.getItem(DECKS_STORAGE_KEY));
	// AsyncStorage.clear();
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(formatResults)
}

export function submitNewQuestion(cardKey, question, answer) {
	AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
		const decks = JSON.parse(result);
		let cardChosen = decks[cardKey];
		cardChosen.questions.push({
			question: question,
			answer: answer
		});

		decks[cardKey] = cardChosen;
		// console.log(decks);
		// console.log(cardChosen);
		// console.log(cardKey);

		AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks), () => {
			AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
				console.log(result);
			})
		})
	})
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

/*
 * Code taken from the `Notification` lesson in the Udacity React Native course.
 */
export function clearLocalNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
	return {
		title: 'Remember to study!',
		body: 'Hey, don\'t forget to study today, if you haven\'t already!',
		ios: {
			sound: true
		},
		android: {
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true
		}
	}
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(18);
              tomorrow.setMintutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}