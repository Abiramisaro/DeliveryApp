import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { Colors } from "../theme/color";
import RText from "./RText";

const StarRating = ({ rating }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 3 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Ionicons
          key={i}
          name="star"
          size={16}
          color={i <= rating ? "#FFC107" : Colors.grey}
          style={{ marginRight: 3 }}
        />
      ))}
      <RText style={{color :Colors.grey, fontSize : 12, marginLeft :4}}>4.1</RText>
    </View>
  );
};

export default StarRating;
