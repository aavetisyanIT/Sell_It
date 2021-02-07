import React from 'react';
import { Text } from 'react-native';

import defalutStyles from '../config/styles';

function AppText({ children, style }) {
	return <Text style={[defalutStyles.text, style]}>{children}</Text>;
}

export default AppText;
