/**
 * clear and organized structure React Native App
 * https://github.com/724-one/NativeStructure.git
 * This project is created and maintained by:
 * Fiyaz Hussain
 * Software Engineer and Team Lead
 * 724.One
 * https://724.one/fiyaz-hussain/
 * This project structure and associated files are intended for use exclusively within the 724.One organization. Unauthorized use, distribution, or reproduction of this project structure, in whole or in part, is strictly prohibited. Misuse of this structure may lead to legal action.
 * If you are a member of the 724.One team, feel free to contribute and improve the project structure. Ensure that any changes align with the company's coding standards and best practices.
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';
import {QueryClient, QueryClientProvider, onlineManager} from 'react-query';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import AppNavigation from './src/navigation';
import {store, persistedStore} from './src/redux/store';
import Login01 from './src/screens/Login01/Login01';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const queryClient = new QueryClient();
  // For React Query auto refetch on reconnect behavior in React Native you have to use React Query onlineManager
  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
      setOnline(state.isConnected);
    });
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.safeAreaFlex}>
              <NavigationContainer>
                <AuthStack />
              </NavigationContainer>
            </SafeAreaView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaFlex: {
    flex: 1,
  },
});
