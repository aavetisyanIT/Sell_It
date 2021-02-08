import React from 'react';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
	return (
		<Screen>
			<ListingEditScreen />
		</Screen>
	);
}
