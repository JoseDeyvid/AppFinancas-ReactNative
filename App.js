import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';
export default function App() {
  return (  
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#F0F4FF'} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
