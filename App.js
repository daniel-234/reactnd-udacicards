import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DecksList from './components/DecksList';
import NewDeck from './components/NewDeck';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckDetail from './components/DeckDetail';
import NewQuestion from './components/NewQuestion';
import Quiz from './components/Quiz';
import { setLocalNotification } from './utils/helpers';
import { white, lightBlue, black } from './utils/colors';

const Tabs = TabNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
}, {
  tabBarOptions: {
    style: {
      backgroundColor: lightBlue
    },
    labelStyle: {
      color: black
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
      headerStyle: {
        backgroundColor: black,
      },
      headerTitleStyle: {
        color: white
      },
      // Change color to the `back` arrow.
      headerTintColor: white
    })
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'Add Card',
      headerStyle: {
        backgroundColor: black,
      },
      headerTitleStyle: {
        color: white
      },
      // Change color to the `back` arrow.
      headerTintColor: white
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
});

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    console.log(this.props);
    return (
      /*
       * Give this parent Component View a flex value of 1.
       * We want this Component to take up all the available space, so
       * that all the available children Components will be able to
       * expand to the full size of the phone.
       *
       * NOTE: Also be aware that for some reason there seems to be
       * an issue with TabNavigator, that I experienced, which makes the
       * app sometimes show a blank screen.
       * One possible fix suggested in the GitHub open issue page is to make
       * sure the containers are either the height of the device or they
       * have a flex: 1 value.
       */
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;