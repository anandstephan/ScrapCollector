import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";
import { Box, Heading, NativeBaseProvider } from "native-base";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import LoginStack from "./navigation/LoginStack";
import MainStack from "./navigation/MainStack";

const App = () =>{
return <NativeBaseProvider>
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {
           <MainStack/>     
          //  <LoginStack/> 
        }
    
      </NavigationContainer>
   
    </SafeAreaView>
   
</NativeBaseProvider>
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})