# 3DAMNA - PGL > UT3 > Tab Navigation App

Este proyecto de React Native se centra en la implementación de la navegación por pestañas utilizando el componente `createMaterialTopTabNavigator` de la biblioteca `@react-navigation/material-top-tabs`. La navegación por pestañas es una forma común de organizar y presentar múltiples vistas o secciones en una aplicación.

## @react-navigation/material-top-tabs

`@react-navigation/material-top-tabs` es una biblioteca de navegación para React Native que permite crear una interfaz de pestañas para cambiar entre diferentes vistas o páginas en una aplicación. Se utiliza en conjunto con `createMaterialTopTabNavigator` para crear una experiencia de navegación por pestañas.

Para obtener información detallada sobre cómo usar `createMaterialTopTabNavigator`, consulta la [documentación oficial de React Navigation](https://reactnavigation.org/docs/getting-started).

## Funcionamiento Básico

El funcionamiento básico de `createMaterialTopTabNavigator` implica los siguientes pasos:

1. Definir las pestañas y sus configuraciones utilizando `createMaterialTopTabNavigator`.

2. Configurar las pantallas correspondientes a cada pestaña utilizando `Screen` dentro de `createMaterialTopTabNavigator`.

3. Renderizar la navegación en tu componente principal.

4. Las pestañas y las pantallas se sincronizarán automáticamente, lo que permite al usuario cambiar entre las pestañas para ver diferentes contenidos.

## Ejemplo de Uso

```javascript
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Screen1 from './Screen1'; // Importa tus pantallas aquí
import Screen2 from './Screen2';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Screen1} />
        <Tab.Screen name="Tab2" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
