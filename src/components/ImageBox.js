import { StyleSheet, View } from 'react-native';

const ImageBox = () => (
  <View style={styles.box} />
);

const styles = StyleSheet.create({
  box: {
    width: 95,
    height: 95,
    backgroundColor: '#E5E5E5',
    borderRadius: 12,
    marginRight: 12,
  }
});

export default ImageBox;
