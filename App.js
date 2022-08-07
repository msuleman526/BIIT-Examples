import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, FlatList, Pressable, LogBox} from "react-native";
import MapView, {enableLatestRenderer, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Routes from "./src/routing/routes";

const App = () => {
  enableLatestRenderer();
  return (
    <>
        <Routes />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;