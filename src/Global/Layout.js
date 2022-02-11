import React from 'react';
import { View, StyleSheet } from 'react-native';
import { wp } from './Style';

export default function Layout(props) {
	return <View style={styles.mainContainer}>{props.children}</View>;
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: wp(5)
	}
});
