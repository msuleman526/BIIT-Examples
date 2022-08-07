import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, FlatList, Pressable, LogBox} from "react-native";
import MapView, {enableLatestRenderer, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const MapTest = (props) => {
  
  let dataStr = props.navigation.getParam("data", "{}")
  let data = JSON.parse(dataStr)s
  LogBox.ignoreLogs(['Warning: ...']);
  let [listOfMarkers ,setListOfMarker] = useState([{
    title: "BIIT",
    latitude: 33.643273,
    longitude: 73.079006,
  },
  {
    title: "BIIT 2",
    latitude: 33.643137,
    longitude: 73.078471,
  }
])

  enableLatestRenderer();
  return (
    <View style={[styles.container]}>
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 33.643273,
          longitude: 73.079006,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
          {
          listOfMarkers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
              title={marker.title}
            />
          ))}
     </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

export default MapTest;