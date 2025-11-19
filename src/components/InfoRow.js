import { View } from 'react-native';
import { Colors } from '../theme/color';
import RText from './RText';

const InfoRow = ({ label, value, containerStyle, valueStyle }) => {
  return (
    <View style={[{ marginBottom: 15 }, containerStyle]}>
      <RText style={{ fontSize: 12, color: '#77869E', marginBottom: 4 }}>{label}</RText> 
       
      <RText style={[{ fontSize: 14, color: Colors.black, fontWeight: '500' }, valueStyle]}
>{value}</RText>
       
    </View>
  );
};

export default InfoRow;
