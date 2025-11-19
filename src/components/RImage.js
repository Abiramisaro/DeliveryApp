import { Image } from "react-native";

const RImage = ({ source, style, resizeMode = "contain" }) => (
  <Image source={source} style={style} resizeMode={resizeMode} />
);

export default RImage;
