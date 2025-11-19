import { StyleSheet, View } from "react-native";

const RBox = ({ children, style }) => (
  <View style={[styles.box, style]}>{children}</View>
);

export default RBox;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F4F7F8",
    borderRadius: 12,
    padding: 12,
  },
});
