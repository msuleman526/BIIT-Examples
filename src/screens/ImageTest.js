import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, FlatList, Pressable, LogBox, Button, Image} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
 
const ImageTest = (props) => {

    let [image, setImage] = useState("")

    let data = {
      'name': "Suleman"
    }

  async function onCameraButtonClick(){
    let options = {includeBase64: true};
    const result = await launchCamera(options);
    let src = result.assets[0].base64;
    setImage(src)
  }
  
  async function onLibraryButtonClick(){
    let options = {includeBase64: true, selectionLimit: 3};
    const result = await launchImageLibrary(options);
    let src = result.assets[0].base64;
    setImage(src)
  }

  function onOpenMapClick(){
    let jData = JSON.stringify(data)
      props.navigation.navigate('mapTest', { data: jData })
  }

  return (
    <View style={[styles.container]}>
        <Button title="Open Camera" onPress={onCameraButtonClick}></Button>
        <Button title="Open Library" onPress={onLibraryButtonClick}></Button>
        <Button title="Open Map" onPress={onOpenMapClick}></Button>
        <Image style={[styles.img]} source={{uri: `data:image/png;base64,${image}`}}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  img: {
    width: 200,
    height: 200
  }
});

export default ImageTest;