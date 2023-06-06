import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/welcomeScreen";
import LoginScreen from "./screens/loginScreen";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
       {
        headerStyle:{backgroundColor:'blue'},
        headerTintColor:'white'
        
      
       }
      }>
        <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} options={
          {
            tabBarIcon:({color,size })=>
             ( <Ionicons name ='home' color={color} size={size}/>

            )
          }
        }/>
        <Tab.Screen name="LoginScreen" component={LoginScreen} options={
          {
            tabBarIcon:({color,size
            })=>(
              <Ionicons name ='person' color={color} size={size}/>

            )
          }
        } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
