import { TouchableOpacity } from "react-native";
import RText from "./RText";

const RButton = ({ title, onPress, buttonStyle, textStyle }) => (
  <TouchableOpacity style={buttonStyle} onPress={onPress}>
    <RText style={textStyle}>{title}</RText>
  </TouchableOpacity>
);

export default RButton;
