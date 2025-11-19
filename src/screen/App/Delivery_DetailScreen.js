import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GreyBox from "../../components/GreyBox";
import ImageBox from "../../components/ImageBox";
import InfoRow from "../../components/InfoRow";
import RImage from "../../components/RImage";
import RText from "../../components/RText";
import SectionTitle from "../../components/SectionTitle";
import StarRating from "../../components/StarRating";
import App_Images from "../../theme/AppImage";
import { Colors } from "../../theme/color";

const DeliveryDetailsScreen = ({navigation}) => {
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
         <View style={styles.headerRow}>
          <Ionicons name="chevron-back" size={26} color={Colors.black} onPress={()=> navigation.goBack()} style={{marginLeft:10}}/>
          <RText style={styles.headerTitle}>Delivery details</RText>
          <View style={{ width: 26 }} />
        </View>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Profile Section */}
        <View style={styles.profileRow}>
          <RImage source={App_Images.photo} style={styles.profileImage} />

          <View style={{ marginLeft: 12 }}>
            <RText style={styles.name}>Allan Smith</RText>
            <RText style={styles.subText}>124 Deliveries</RText>
            <StarRating rating={4} />
          </View>

          <View style={styles.statusBadge}>
            <RText style={{ color: "#fff", fontSize: 12 }}>Completed</RText>
          </View>

          <RImage source={App_Images.bike} style={styles.bikeIcon} />
        </View>

        <GreyBox style={{ marginTop: 20 }}>
          <View style={styles.locationWrapper}>
            {/* LEFT COLUMN (icons + dots) */}
            <View style={styles.leftColumn}>
              {/* Pickup Icon */}
              <Ionicons name="location-sharp" size={18} color="#E83A59" />

              {/* Center Dots */}
              <View style={styles.dotConnector}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
              </View>

              {/* Delivery Icon */}
              <FontAwesome name="circle-o" size={18} color={Colors.green} />
            </View>

            {/* RIGHT COLUMN (text) */}
            <View style={styles.rightColumn}>
              <SectionTitle title="Pickup Location" />
              <RText style={styles.locationText}>32 Samwell Sq, Chevron</RText>

              <SectionTitle
                title="Delivery Location"
                style={{ marginTop: 18 }}
              />
              <RText style={styles.locationText}>
                21b, Karimu Kotun Street, Victoria Island
              </RText>
            </View>
          </View>
        </GreyBox>

        {/* Details Section */}
        <GreyBox style={{ marginTop: 10 }}>
          <View style={styles.rowSpace}>
            <InfoRow label="What you are sending" value="Electronics/Gadgets" containerStyle={{width:"50%"}} />
            <InfoRow label="Recipient" value="Donald Duck" />
          </View>

          <InfoRow label="Recipient contact number" value="08123456789" containerStyle={{width:"50%"}} />

          <View style={styles.rowSpace}>
            <InfoRow label="Payment" value="Card" containerStyle={{width:"50%"}} />
            <InfoRow
              label="Fee:"
              value="$150"
              containerStyle={{width:"50%"}} 
              valueStyle={{ color: "#1D3557", fontWeight: "700" }}
            />
          </View>
        </GreyBox>

        {/* Pickup Images */}
        <SectionTitle title="Pickup image(s)" style={{ marginTop: 0 }} />
        <View style={styles.imageRow}>
          <ImageBox />
          <ImageBox />
        </View>

        {/* Delivery Images */}
        <SectionTitle title="Delivery image(s)" style={{ marginTop: 20 }} />
        <View style={styles.imageRow}>
          <ImageBox />
          <ImageBox />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    paddingBottom: 120,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  bikeIcon: { width: 32, height: 32, marginLeft: 10 },

  headerTitle: {
    flex: 1,
    fontSize: 20,
    marginLeft:30,
    fontWeight: "500",
    color: "#000",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  name: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },

  subText: {
    fontSize: 12,
    color: "#8A8A8A",
    marginBottom: 3,
  },

  statusBadge: {
    backgroundColor: Colors.green,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: "auto",
  },

  dotRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  dotDivider: {
    height: 12,

    borderLeftWidth: 1,
    borderColor: "#CFCFCF",
    marginLeft: 8,
    marginVertical: 8,
  },

  sectionTitle: {
    marginLeft: 6,
  },

  locationText: {
   // marginLeft: 22,
    marginTop: 3,
    fontWeight:"500",
    fontSize: 14,
    color : Colors.black
  },

  rowSpace: {
    flexDirection: "row",
    //justifyContent: "space-between",
    width:"100%"
  },

  imageRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  locationWrapper: {
    flexDirection: "row",
  },

  leftColumn: {
    width: 28, // FIXED column (prevents shifting)
    justifyContent: "flex-start",
    alignItems: "center", // centers dots & icons
    paddingTop: 2,
  },

  rightColumn: {
    flex: 1,
    paddingLeft: 10,
  },

  dotConnector: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#BEBEBE",
    marginVertical: 3,
  },


});
