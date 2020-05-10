import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import MainScreen from '../screens/MainScreen'
import DetailScreen from '../screens/DetailScreen'
import { THEME } from '../theme'

const Stack = createStackNavigator()

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android'
                ? THEME.HEADER_ANDROID_COLOR
                : THEME.HEADER_IOS_COLOR,
          },
          headerTintColor:
            Platform.OS === 'android'
              ? THEME.HEADER_ANDROID_TEXT_COLOR
              : THEME.HEADER_IOS_TEXT_COLOR,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Posts' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{ title: 'Post details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
