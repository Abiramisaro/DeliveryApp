import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardOption, Header } from "../../components";
import HistoryItem from "../../components/HistoryItem";
import RText from "../../components/RText";
import App_Images from "../../theme/AppImage";
import { Colors } from "../../theme/color";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.container}>

      <Header username="Davidson Edgar" />

      <RText style={styles.sectionTitle}>What would you like to do?</RText>

      <CardOption
        title="Instant Delivery"
        desc="Courier takes only your package and delivers instantly"
        icon={App_Images.thunder}
        iconShadow={App_Images.thunder_outline}
        onPress={() => navigation.navigate('InstantDelivery')}
      />

      <CardOption 
        title="Schedule Delivery"
        schedule = {true}
        desc="Courier comes to pick up on your specified date and time"
        icon={App_Images.timer}
        iconShadow={App_Images.timer_outline}
        onPress={()=> navigation.navigate('Schedule_Delivery')}
      />

      <View style={styles.historyHeader}>
        <RText style={styles.historyTitle}>History</RText>
        <RText style={styles.viewAll}>View all</RText>
      </View>

      <HistoryItem
        orderId="ORDB1234"
        name="Pooga"
        address="Maryland busstop, Anthony Ikeja"
        date="12 January 2020, 2:43pm"
                status="Completed"

      />

      <HistoryItem 
        orderId="ORDB1235"
        name="Desi britto"
        address="Maryland busstop, Anthony Ikeja"
        date="12 January 2020, 2:43pm"
                status="Completed"

      />
      <HistoryItem
        orderId="ORDB1234"
        name="Sabesstin"
        address="Maryland busstop, Anthony Ikeja"
        date="12 January 2020, 2:43pm"
                status="Completed"

      />

      <HistoryItem 
        orderId="ORDB1235"
        name="Jassmin"
        address="Maryland busstop, Anthony Ikeja"
        date="12 January 2020, 2:43pm"
                status="Completed"

      />

    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 10,
    color : Colors.text
  },

  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  historyTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  viewAll: {
    color: Colors.green,
    fontSize: 12,
    fontWeight: '500'
  },
});

export default HomeScreen;
