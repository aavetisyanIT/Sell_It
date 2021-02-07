import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from './../components/Screen';
import ListItemSeparator from './../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/person.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/person.jpg'),
	},
];

export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const handleDelete = item => {
		//delete the message from messages
		setMessages(messages.filter(m => m.id !== item.id));
	};
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Item selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
}
