import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HistoryItem from "../../components/HistoryItem";
import RImage from "../../components/RImage";
import RText from "../../components/RText";
import App_Images from "../../theme/AppImage";

const DATA = [
  {
    orderId: "ORDB1234",
    name: "Kiran",
    address: "21b, Karimu Kotun Street, Victoria Island",
    date: "20 mins to delivery location",
    status: "In progress",
    less: true,
  },
  {
    orderId: "ORDB1234",
    name: "Paul Pogba",
    address: "Maryland busstop, Anthony Ikeja",
    date: "12 January 2020, 2:43pm",
    status: "Completed",
  },
  {
    orderId: "ORDB1234",
    name: "Danial",
    address: "Maryland busstop, Anthony Ikeja",
    date: "12 January 2020, 2:43pm",
    status: "Completed",
  },
  {
    orderId: "ORDB1234",
    name: "John Doe",
    address: "Maryland busstop, Anthony Ikeja",
    date: "12 January 2020, 2:43pm",
    status: "Completed",
  },
  {
    orderId: "ORDB1234",
    name: "Draiel",
    address: "Maryland busstop, Anthony Ikeja",
    date: "12 January 2020, 2:43pm",
    status: "Completed",
  },
  {
    orderId: "ORDB1234",
    name: "Warren",
    address: "Maryland busstop, Anthony Ikeja",
    date: "12 January 2020, 2:43pm",
    status: "Completed",
  },
];

const DeliveryHistoryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe}>
      
      {/* Header */}
      <View style={styles.headerRow}>
        <RText style={styles.title}>Delivery History</RText>

        <TouchableOpacity style={styles.filterButton}>
          <RImage source={App_Images.filter} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* List */}
      
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>  <HistoryItem 
    {...item}
    navigation={navigation}
  />}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 14 },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },
  filterButton:{
    padding: 6,
    borderRadius: 6,
    backgroundColor: '#F0F5F5',
    justifyContent: 'center',
    alignItems:"center"
  },

  title: { fontSize: 20, fontWeight: "600" },
  filterIcon: { width: 17, height: 17 },
});

export default DeliveryHistoryScreen;
