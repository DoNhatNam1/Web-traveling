import { StyleSheet, Text, View } from "react-native";
import { ContextProvider } from './context/Context';
import { StatusBar } from "expo-status-bar";
import React from "react";
import ProductListing from "./screens/productListing/ProductListing";
import Favorites from "./screens/favorites/Favorites";
import ProductDetails from "./screens/productDetails/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Bottomtabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          title: "Product List",
        }}
        name="productListing"
        component={ProductListing}
      />
      <Tabs.Screen
        options={{
          title: "Favorites",
        }}
        name="favorites"
        component={Favorites}
      />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <ContextProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="bottomTabs"
            component={Bottomtabs}
          />
          <Stack.Screen
            options={{
              title: "Product Details",
            }}
            name="productDetails"
            component={ProductDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </ContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
