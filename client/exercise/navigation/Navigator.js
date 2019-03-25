import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainListScreen from '../screens/MainListScreen';
import FileScreen from '../screens/FileScreen';

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
	Main: MainListScreen,
	File: FileScreen,
}, {
    headerMode: 'none',
	}));

