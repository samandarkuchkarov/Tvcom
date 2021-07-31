
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './pages/Home'
import {BurgerMenu} from './components/BurgerMenu'
import {ContextProvider, Datas} from './context/context'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();



function stack({ navigation }) {
  const {createOption} = React.useContext(Datas)
  return (
      <Stack.Navigator>
        <Stack.Screen  options={createOption(navigation,"Home")} name="Home"  component={Home} />
      </Stack.Navigator>
  );
}

const App = () => {

  return (
    <><ContextProvider>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props =>(<BurgerMenu {...props}/>)} >
          <Drawer.Screen  name="BurgerNavigation" component={stack} />
        </Drawer.Navigator>
      </NavigationContainer>
      </ContextProvider>
      </>
   
  );
};

const styles = StyleSheet.create({
 
});

export default App;
