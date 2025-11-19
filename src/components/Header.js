import { StyleSheet, View } from "react-native";
import App_Images from "../theme/AppImage";
import { Colors } from "../theme/color";
import RImage from "./RImage";
import RText from "./RText";


const Header = ({ username }) => {
  return (
    <View style={styles.container}>
      
      <View>
        <RText style={styles.welcome}>Welcome Back</RText>
        <RText style={styles.username}>{username}</RText>
      </View>

      <View style={styles.rightContainer}>
        <RImage 
          source={App_Images.notification} 
          style={styles.icon}
        />
        <RImage 
          source={App_Images.profile} 
          style={styles.profile}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: {
    fontSize: 14,
    color: Colors.text,
  },
  username: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 2,
    color : Colors.text
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  profile: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});

export default Header;
