import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import TelaInicial from './componentes/TelaInicial/';
import TelaCatalogo from './componentes/TelaCatalogo/';
import TelaContato from './componentes/TelaContato/';



const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator 
        screenOptions={{
          headerStyle:{ 
            backgroundColor: '#400303' 
          },
          headerTitleStyle: { 
            color: '#fff', 
            fontWeight: 'bold' 
          },
          headerTitleAlign: 'center',
          
          tabBarStyle: { 
            backgroundColor: "#fff"
          },
          tabBarLabelStyle:{ 
            fontSize: 14, 
            fontWeight: "bold"
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#ab887c",
          tabBarActiveBackgroundColor: "#400303",
        }}
      >
        <Abas.Screen name="Início"    component = { TelaInicial }   options={{ tabBarIcon: ({ color }) => ( <Entypo name="home" color={ color } size={ 20 } />),}}/>
        <Abas.Screen name="Catalogo"  component = { TelaCatalogo }  options={{ tabBarIcon: ({ color }) => ( <FontAwesome5 name="wine-bottle" size={20} color={ color } />),}}/>
        <Abas.Screen name="Contato"   component = { TelaContato }   options={{ tabBarIcon: ({ color }) => ( <AntDesign name="contacts" size={20} color={ color } />),}}/>         
      </Abas.Navigator>
    </NavigationContainer>
  )
}