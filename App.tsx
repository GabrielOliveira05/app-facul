import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './assets/pages/login/loginScreen';
import Signup from './assets/pages/login/signupScreen';
import SignupEmpresarial from './assets/pages/login/signupEmpresarialScreen';
import BreathingExercise from './assets/pages/login/relaxScreen';
import Checklist from './assets/pages/login/checklistScreen';
import HomeScreen from './assets/pages/login/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReadingScreen from './assets/pages/login/readingScreen';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="RelaxationScreen" component={BreathingExercise} options={{ title: 'Relaxamento' }} />
        <Stack.Screen name="ChecklistScreen" component={Checklist} options={{ title: 'Checklist' }} />
        <Stack.Screen name="ReadingScreen" component={ReadingScreen} options={{ title: 'Reading' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

