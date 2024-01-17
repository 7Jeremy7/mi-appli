import { Platform, Image as RNImage , StyleSheet } from "react-native";
import { Image as ImagenViewer} from "react-native-web"

const Image = Platform.OS === "web" ? ImagenViewer: RNImage

export default function ImageViewer({placeholderImageSource, selectedImage }){
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
    return (
        <Image source={imageSource} style={styles.image} />
    )
}
const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
}});

