import { StyleSheet, View } from 'react-native';

const GreyBox = ({ children, style }) => {
  return <View style={[styles.box, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  box: {
   marginBottom:7
  },
});

export default GreyBox;
