import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import AppOptions from './components/AppOptions';
import EmojiSticker from './components/EmojiSticker';
import EmojiPicker from "./components/EmojiPicker";

import * as ImagePicker from 'expo-image-picker';

import EmojiList from './components/EmojiList';
import Button  from './components/Button';
import ImageViewer from './components/ImageViewer';


const PlaceholderImage = require("./assets/imagenes/islandia-turismo.jpg");

// ruta de la imagen con placeholder 
// ...rest of the import statements remain unchanged

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <ImageViewer 
        placeholderImageSource={PlaceholderImage}
        selectedImage = {selectedImage  } />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
       <AppOptions
       onReset={onReset}
       onAddSticker={onAddSticker}
       onSaveImageAsync={onSaveImageAsync}
     /> 
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
