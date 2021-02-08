import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from './../components/Screen';
import ListItemSeparator from './../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: `Cillum commodo est pariatur Lorem ea duis id irure mollit magna consectetur eu. Nisi veniam amet cupidatat dolor voluptate sint. Nisi non tempor cillum consequat elit qui ullamco proident qui ea laboris dolor proident incididunt`,
		description: `Cillum commodo est pariatur Lorem ea duis id irure mollit magna consectetur eu. Nisi veniam amet cupidatat dolor voluptate sint. Nisi non tempor cillum consequat elit qui ullamco proident qui ea laboris dolor proident incididunt`,
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
	const [refresh] = useState(false);
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
				refreshing={refresh}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: require('../assets/person.jpg'),
						},
					]);
				}}
			/>
		</Screen>
	);
}
