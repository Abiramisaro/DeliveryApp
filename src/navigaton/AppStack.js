import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RImage, RText } from "../components";
import { DeliveryDetailsScreen, History, Home, Instant_Delivery, Profile, Schedule_Delivery } from "../screen";
import App_Images from "../theme/AppImage";
import { Colors } from "../theme/color";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const AppStack = () => {

  const HomeStack = () => {
   return(
   <Stack.Navigator initialRouteName="Home_Dashboard" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home_Dashboard" component={Home} />
    <Stack.Screen name="Schedule_Delivery" component={Schedule_Delivery}  />
       <Stack.Screen name="InstantDelivery" component={Instant_Delivery} />

   </Stack.Navigator>
   )
  }

  const HistoryStack = () => {
   return(
   <Stack.Navigator initialRouteName="History_Dashboard" screenOptions={{headerShown: false}}>
    <Stack.Screen name="History_Dashboard" component={History}  />
    <Stack.Screen name="Detail_Delivery" component={DeliveryDetailsScreen} />

   </Stack.Navigator>
   )
  }

  const TabBarLabel = ({ focused, title }) => {
    return (
      <View style={styles.labelContainer}>
        <RText
          style={[styles.label, focused && styles.activeLabel]}
          children={title}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown : false
    }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown : false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <Foundation
              name={"home"}
              size={30}
              color={focused ? Colors.prime : Colors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="History" />
          ),

          tabBarIcon: ({ focused }) => (
            <RImage
              source={
                focused ? App_Images.history_selected : App_Images.history
              }
              style={styles.history_icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown : false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} title="Profile" />
          ),

          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={33}
              color={focused ? Colors.prime : Colors.grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
   headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 12,
    color: "#777",
    fontWeight:"normal",
  },
  activeLabel: {
    fontWeight: "500",
    color: Colors.prime,
  },
  indicator: {
    width: "40%",
    height: 3,
    backgroundColor: Colors.prime,
    position: "absolute",
    top: -35,
    borderRadius: 5,
  },
  history_icon: {
    height: 26,
    width: 26,
  },
});
export default AppStack;
