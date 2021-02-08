import React from 'react';
import { Text } from 'react-native';

import defalutStyles from '../config/styles';

function AppText({ children, style, ...otherProps }) {
	return (
		<Text style={[defalutStyles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}

export default AppText;
