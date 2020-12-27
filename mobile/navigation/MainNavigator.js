import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SelectScreen from '../screens/SelectScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const MainStack = createStackNavigator();

const MainNavigator = props => {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    name='Select'
                    component={SelectScreen}
                    options={{
                        headerShown: false
                    }}
                >
                </MainStack.Screen>
                <MainStack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                >
                </MainStack.Screen>
                <MainStack.Screen
                    name='Detail'
                    component={DetailScreen}
                    options={{
                        headerShown: false
                    }}
                >
                </MainStack.Screen>
                <MainStack.Screen
                    name='ProductDetail'
                    component={ProductDetailScreen}
                    options={{
                        headerTransparent: true,
                        headerBackTitleVisible: false,
                        headerTitleStyle: {display: "none"},
                        headerTintColor: '#ffff'
                    }}
                >
                </MainStack.Screen>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;