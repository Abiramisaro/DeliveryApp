import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from '../store/authStore';
import AppStack from './AppStack';


const Root_Navigation
 = ({
    params,
}) => {
    const{ loggedIn} = useAuthStore();
    return(
    <NavigationContainer>
    {/* {loggedIn ? <AppStack /> : <AuthStack />} */}
    <AppStack />
    </NavigationContainer>
)};

export default Root_Navigation