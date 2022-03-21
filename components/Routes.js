import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bingo from "../pages/Bingo";
import Home from "../pages/Home";
import Perguntas from "./Perguntas";
import Compras from "./Compras";


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Bingo" component={Bingo}/>
        <Stack.Screen  name="Carrinho de Compras" component={Compras}/>
        <Stack.Screen name ="Perguntas e Respostas" component={Perguntas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}