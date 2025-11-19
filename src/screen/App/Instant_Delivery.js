import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SectionTitle } from "../../components";
import GreyBox from '../../components/GreyBox';
import RText from "../../components/RText";
import VehicleCard from "../../components/VehicleCard";
import { Colors } from "../../theme/color";

const InstantDeliveryScreen = ({navigation}) => {
  const [selectedVehicle, setSelectedVehicle] = useState(1);

  return (
    <View style={styles.container}>
      {/* MAP VIEW */}
      <View style={{ height: '65%' }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
          latitude: 37.773972,
          longitude: -122.431297,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        >
          <Marker
            coordinate={{ latitude: 10.7905, longitude: 78.7047 }}
            title="Pickup Point"
          />
        </MapView>

        {/* ⬅️ Back Button on Map */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 50,
            left: 20,
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 40,
            elevation: 5,
          }}
        >
<Ionicons name="chevron-back-sharp" size={24} color="#1D3557" />        
</TouchableOpacity>
      </View>

      {/* BOTTOM SHEET */}
      <View style={styles.bottomSheet}>
        <View style={styles.dragHandle} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <RText style={styles.header}>Instant Delivery</RText>

          {/* Pickup */}
              <SectionTitle title="Pickup Location"  style={{marginTop: 20,marginBottom :5}} />
          <GreyBox style={styles.locationCard}>
            <View style={styles.row}>
              <Ionicons name="location-sharp" size={18} color="#E83A59" />
              <RText style={styles.locationText}>
                32 Samwell Sq, Chevron
              </RText>
            </View>
          </GreyBox>

          {/* Delivery */}
              <SectionTitle title="Delivery Location"  style={{marginTop: 20,marginBottom :5}} />
          <GreyBox style={styles.locationCard}>
            <View style={styles.row}>
              <FontAwesome name="circle-o" size={18} color={Colors.green} />
              <RText style={styles.locationText}>
                21b, Karimu Kotun Street, Victoria Island
              </RText>
            </View>
          </GreyBox>

          {/* Vehicle Type */}
                        <SectionTitle title="Vehicle Type" style={{marginTop: 20,marginBottom :5}} />

          {/* <RLabel label="" style={{ marginTop: 20 }} /> */}

         <View style={styles.vehicleRow}>
  {vehicleOptions.map((item) => (
    <VehicleCard
      key={item.id}
      item={item}
      selected={selectedVehicle === item.id}
      onPress={() => setSelectedVehicle(item.id)}
    />
  ))}
</View>


          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton}>
           <RText style={styles.nextText}>Next</RText>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default InstantDeliveryScreen;

 const vehicleOptions = [
  {
    id: 1,
    name: "Bike",
    image: "selected_bike",   // 🔥 matches App_Images.selected_bike
  },
  {
    id: 2,
    name: "Car",
    image: "car",             // 🔥 matches App_Images.car
  },
  {
    id: 3,
    name: "Lorry",
    image: "lorry",           // 🔥 matches App_Images.lorry
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "65%",
    width: "100%",
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    maxHeight: "50%",
  },
  dragHandle: {
    width: 45,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
  },
  locationCard: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#F4F7F8",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 10,
    fontWeight:"500",
    fontSize: 14,
    color: '#303E37',
  },
  vehicleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: Colors.prime,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  nextText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
