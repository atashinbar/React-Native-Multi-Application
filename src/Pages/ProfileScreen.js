import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function ProfileScreen(props) {
    const { route } = props;
    const { name, lName, image } = route.params;
    return (
        <View style={styles.container}>
            <View>
                <Image resizeMode="cover" style={styles.image} source={image} />
            </View>
            <View>
                <Text style={styles.text}>
                    {name} {lName}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
    },
    image: {
        width: '100%',
    },
    text: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});
