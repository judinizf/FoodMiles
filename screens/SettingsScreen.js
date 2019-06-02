import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={StyleSheet.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});


