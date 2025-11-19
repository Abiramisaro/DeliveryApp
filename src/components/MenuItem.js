import { StyleSheet, TouchableOpacity } from "react-native";
import RImage from "./RImage";
import RText from "./RText";


const MenuItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <RImage source={icon} style={styles.icon} />
      <RText style={styles.label}>{label}</RText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 20,
  },
  label: {
    fontSize: 15,
    color: "#1D3557BA",
  },
});

export default MenuItem;
