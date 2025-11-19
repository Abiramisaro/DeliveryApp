import { StyleSheet, TouchableOpacity } from "react-native";
import App_Images from "../theme/AppImage";
import { Colors } from "../theme/color";
import RImage from "./RImage";

const VehicleCard = ({ item, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.activeCard]}
      onPress={onPress}
    >
      <RImage
        source={App_Images[item.image]}   // 🔥 Local image handled here
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 12,
  },
  
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    color: Colors.title,
  },
});

export default VehicleCard;
