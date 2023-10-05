import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabOne from "./tabs/one";
import TabTwo from "./tabs/two";
import TabThree from "./tabs/three";
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: { backgroundColor: "#33A883" },
        }}
      >
        <Tab.Screen name="Home" component={TabOne} />
        <Tab.Screen name="Message" component={TabTwo} />
        <Tab.Screen name="Phone" component={TabThree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
