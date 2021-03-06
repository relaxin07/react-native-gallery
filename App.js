import 'react-native-gesture-handler'
import React from 'react'
import RootStack from './src/navigation/AppNavigation'
import { Provider } from 'react-redux'
import store from './src/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}
