import React from "react";
import { Button, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ImageTest from '../screens/ImageTest';
import MapTest from "../screens/MapTest";

const AppStack = createStackNavigator({
    'imageTest': {
        screen: ImageTest,
        navigationOptions: {
            'headerShown': false
        }
    },
    'mapTest': {
        screen: MapTest,
        navigationOptions: ({ navigation }) => ({
            'headerShown': true,
            'headerLeft': <Button title="Back" onPress={()=> navigation.navigate('imageTest')} />
        })
    }
})

export default createAppContainer(AppStack);   