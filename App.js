import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './src/screens/ProductListScreen';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {

let [fontsLoaded]=useFonts({  //hook is useFonts
  Roboto_400Regular, //asynchronous hook=> 
  Roboto_700Bold
});

const onLayoutRootView = useCallback(async()=>{ //hook
if(fontsLoaded){
  console.log("Events triggered", fontsLoaded);
  await SplashScreen.hideAsync();
}
  
},[fontsLoaded]);

if(!fontsLoaded){
  console.log("Fonts not loaded");
  return null;
}else{
  console.log("Fonts loaded");
}

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


