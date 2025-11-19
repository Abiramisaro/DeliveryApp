import { ScrollView, StyleSheet, View } from "react-native";
import MenuItem from "../../components/MenuItem";
import RImage from "../../components/RImage";
import RText from "../../components/RText";
import App_Images from "../../theme/AppImage";
import { Colors } from "../../theme/color";

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          <RText style={styles.profileText}>DE</RText>
        </View>

        <RText style={styles.username}>Davidson Edgar</RText>

        <View style={styles.line} />
      </View>

      {/* Menu Items */}
      <MenuItem
        icon={App_Images.credit_card}
        label="Payments"
        onPress={() => {}}
      />

      <MenuItem
        icon={App_Images.history_pro}
        label="Delivery History"
        onPress={() => {}}
      />

      <MenuItem
        icon={App_Images.Setting}
        label="Settings"
        onPress={() => {}}
      />

      <MenuItem
        icon={App_Images.faq}
        label="Support/FAQ"
        onPress={() => {}}
      />

      <MenuItem
        icon={App_Images.invitation}
        label="Invite Friends"
        onPress={() => {}}
      />

      {/* Sign Out */}
      <View style={styles.row}>
      <RImage source={App_Images.signout} style={styles.signout} />
      <RText style={styles.signOutText}>Sign Out</RText>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  row :{
    flexDirection:'row', alignItems:'center'    

  },
  signout :{
    height:20,
    width:20,marginTop:40
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileCircle: {
    width: 90,
    height: 90,
    backgroundColor: "#C8EAE9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
  },
  username: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "500",
    color : Colors.text
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#1D3557BA",
    marginTop: 25,
  },

  signOutContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  signOutText: {
    marginLeft: 15,
    marginTop:40,
    color: "#1D3557BA",
    fontSize: 15,
  },
});

export default Profile;
