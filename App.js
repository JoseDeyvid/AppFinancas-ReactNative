import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#F0F4FF'}/>
      <Routes />
    </NavigationContainer>
  );
}
