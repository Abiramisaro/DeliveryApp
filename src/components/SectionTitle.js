import RText from './RText';

const SectionTitle = ({ title, style }) => (
  <RText style={[{ fontSize: 12, fontWeight: '400', color: '#77869E' }, style]}>{title}</RText>
    
);

export default SectionTitle;
