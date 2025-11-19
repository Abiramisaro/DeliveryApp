import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../theme/color";
import RImage from "./RImage";
import RText from "./RText";

const CardOption = ({ title, desc, icon, iconShadow,onPress, schedule= false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[  styles.card, { backgroundColor: schedule ?  '#DCE8E9': Colors.secendary } ]}>
      <RImage source={icon} style={styles.icon} />

        <View>
          <RText style={styles.title}>{title}</RText>
          <RText style={styles.desc}>{desc}</RText>
        </View>
      <RImage source={iconShadow} style={styles.icon_Shadow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 5,
    borderWidth: 0.6,
    borderColor: "#DCE8E9",
    marginBottom: 18,
  },
  icon_Shadow: {
    height: 100,
    width: 100,
    position: "absolute",
    right: 10,
    top: 10,
  },
  icon: { width: 32, height: 32, marginRight: 14 },
  title: { fontSize: 16, fontWeight: "700", marginBottom: 4 },
  desc: { fontSize: 12, fontWeight: "350", color: "#555" },
});

export default CardOption;
