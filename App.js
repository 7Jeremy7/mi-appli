import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Button  from './components/Button';
import ImageViewer from './components/ImageViewer';


const PlaceholderImage = require("./assets/imagenes/islandia-turismo.jpg");

// ruta de la imagen con placeholder 
// ...rest of the import statements remain unchanged
 





export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer} >
       <Button theme= "primary" choose = "Choose a photo" onPress = {pickImageAsync} /> 
       <Button label = "Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer:{
    flex: 1 / 2,
    alignItems: 'center',
  },
});
