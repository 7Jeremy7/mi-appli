import { Platform, Image as RNImage , StyleSheet } from "react-native";
import { Image as ImagenViewer} from "react-native-web"

const Image = Platform.OS === "web" ? ImagenViewer: RNImage

export default function ImageViewer({placeholderImageSource}){
    return (
        <Image source={placeholderImageSource} style={styles.image} />
    )
}
const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
}});

