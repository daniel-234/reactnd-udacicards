# Update

This project is not maintained anymore and it has been archived. 

# UdaciCards Project

The third and last project in the React Nanodegree course is a mobile application that allows users to study collections of flashcards.
The app will allow users to create different categories of flashcards called 'decks', add flashcards to those decks, then take quizzes on those decks.

## Getting Started

This project has been created usning `create-react-native-app`.
To install the application, you can (fork and) download it and then run the command `npm install` from your console. To launch it, after the installation has successfully complete, launch it with the command `npm start`.
`yarn` can be used in place of `npm`.

## Built With

* [React Native](https://facebook.github.io/react-native/) - A framework for building native apps using React
* [React](https://reactjs.org/) - A JavaScript library fro building user interfaces
* [Redux](http://redux.js.org/) - A predictable state container for JavaScript apps
* [React Navigation](https://reactnavigation.org/) - A library for an extensible yet easy-to-use navigation solution
* [Expo](https://expo.io/) - A set of tools, libraries and services which let you build native iOS and Android apps by writing JavaSript
* [Genymotion Android Emulator](https://www.genymotion.com/) - An easy and very powerful Android emulation platform for app developers and testers

## Author

* **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

**IMPORTANT**: This app has only been tested on an Android device (a Samsung S6, through an emulator) and not on any iOS phone or emulation platform.

Why this project? This app has been created as the final project for the React Nanodegree at Udacity and encompasses the fundamental aspects of building a native application including handling infinite lists, routing and user input. By building it, students of the [React Nanodegree Program at Udacity](https://www.udacity.com/course/react-nanodegree--nd019) will gain an understanding of how to use react Native to build an iOs and Android application.
Although the emulation platform is not strictly speaking a building tool, I included it because of its importance in this work.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Forums Expo - Genymotion is not responding - Error](https://forums.expo.io/t/genymotion-is-not-responding-error/547/18)
* [GitHub - React Navigation Issues - Stacking Tab Navigators shows blank screens](https://github.com/react-community/react-navigation/issues/1627)
* [Stackoverflow - Programmatically add a component in React Native](https://stackoverflow.com/questions/35471921/programmatically-add-a-component-in-react-native)
* The code used for local notifiction to remind users to study for a specific day, if they haven't already done so, was entirely taken from one of the lessons the instructor built fro the React Native course hosted by Udacity:
* [GitHub Udacity: React UdaciFitness - helpers](https://github.com/udacity/reactnd-UdaciFitness-complete/blob/8c4b20d9620970e475806bfe8f61308bc336b465/utils/helpers.js)
* [GitHub Udacity: React UdaciFitness - updates for userLocalNotification](https://github.com/udacity/reactnd-UdaciFitness-complete/commit/63778456f674355e40044c673f4b966ebd446866)
* Set headers to `null` in TabNavigator setting the `navigationOptions` parameter:
* [GitHub - React UdaciFitness - Changes for TabNavigator](https://github.com/udacity/reactnd-UdaciFitness-complete/commit/9ff26370e4e5593195fdcad4d85e74f540a39220)
* I found an issue when I had to go back to previous screen from inside a nested StackNavigator. The official documentation and the instructor pointed out that the `back` action creator takes back an optional parameter key, but in this case the solution (after much trial and errors) was to NOT provide any key at all (contrary to the case already resolved of TabNavigator where a key was accepted - see `NewDeck`):
* [GitHub - React UdaciFitness - Changes for finish navigation](https://github.com/udacity/reactnd-UdaciFitness-complete/commit/18aeee6aac40702c2d86cf976a9a67c5691505cf)
* [React Navigation Docs - Navigation actions - back](https://reactnavigation.org/docs/navigators/navigation-actions#Back)
* [GitHub - React Navigation issues ](https://github.com/react-community/react-navigation/issues/697)
* [Stackoverflow - React Native View onPress does not work](https://stackoverflow.com/questions/43665177/react-native-view-onpress-does-not-work)
* [Stackoverflow - Basic FlatList code throws warning - React Native](https://stackoverflow.com/questions/44545148/basic-flatlist-code-throws-warning-react-native)
