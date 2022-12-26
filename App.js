import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/component/BottomTabNavigation';
import StackNavigation from './src/component/StackNavigation';



export default function App() {
  return (
    
    <NavigationContainer>
      <StackNavigation />
      {/* <BottomTabNavigation /> */}
    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({
  
});
