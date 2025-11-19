import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screen";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
 

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false,
        
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      
    </Stack.Navigator>
  );
};
export default AuthStack;
