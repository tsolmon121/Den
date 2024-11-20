import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import MyPage from "./MyPage";
import UserInfo from "./UserInfo";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleStyle: { 
            fontWeight: "bold", // Makes all titles bold
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyPage" component={MyPage} />
        <Stack.Screen name="UserInfo" component={UserInfo} options={{ title: "내 정보 수정" }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};


export default App;
