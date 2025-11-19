import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import App_Images from "../theme/AppImage";
import { Colors } from "../theme/color";
import RImage from "./RImage";
import RText from "./RText";

const HistoryItem = ({ orderId, name, address, date, status, less,navigation }) => {
  const isInProgress = status === "In progress";
  const isCompleted = status === "Completed";
  const isLive = date.includes("mins");

  return (
    <TouchableOpacity style={[styles.container, less && styles.lessPadding]} onPress={()=> navigation.navigate('Detail_Delivery')}>
      {/* Row Top */}
      <View style={styles.rowBetween}>
        <RText style={styles.orderId}>{orderId}</RText>

        {/* Badge */}
        <View
          style={[
            styles.badge,
            isInProgress && { backgroundColor: Colors.yellow },
            isCompleted && { backgroundColor: Colors.green },
          ]}
        >
           <RText style={[
             styles.badgeText,
             { color: isCompleted ? Colors.white : Colors.brown }
           ]}>
             {status}
           </RText>
        </View>
      </View>

      {/* Recipient */}
      <RText style={styles.recipient}>Recipient: {name}</RText>

      {/* Icon + Location Info */}
      <View style={styles.row}>
        <RImage source={App_Images.bike} style={styles.bikeIcon} />

        <View>
          {/* Dropoff title */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="location-sharp"
              size={15}
              color={Colors.green}
            />
            <RText style={styles.dropOff}>Drop Off</RText>
          </View>

          {/* Address */}
          <RText style={styles.address}>{address}</RText>

          {/* Date — special green + gray logic */}
          {isLive ? (
            <RText style={styles.liveText}>
              <RText style={styles.liveGreen}>
                {date.split("to")[0]}
              </RText>
              <RText style={styles.liveGrey}>
                {" to" + date.split("to")[1]}
              </RText>
            </RText>
          ) : (
            <RText style={styles.date}>{date}</RText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  lessPadding: {
    paddingVertical: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderId: { fontWeight: "500", fontSize: 14, color: Colors.title },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  recipient: { color: "#545454", fontSize: 12, },

  row: { flexDirection: "row", marginTop: 10 },
  bikeIcon: { width: 32, height: 32, marginRight: 8 },

  dropOff: {
    fontSize: 11,
    color: Colors.text,
    marginLeft: 2,
  },

  address: {
    fontWeight: "500",
    fontSize: 12,
    color: Colors.title,
    marginBottom: 2,
  },
  date: { fontSize: 12, color: "#777" },

  liveText: { fontSize: 12 },
  liveGreen: { color: Colors.green, fontWeight: "600" },
  liveGrey: { color: "#777" },
});

export default HistoryItem;
