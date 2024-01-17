import { StyleSheet, View as ViewPhone, Pressable, Text, Platform } from 'react-native';
import { View as ViewWeb } from 'react-native-web';
import FontAwesome from "@expo/vector-icons/FontAwesome";


const View = Platform.OS === "web"? ViewWeb : ViewPhone;

export default function Button({ label, theme,choose , onPress   }) {
    if (theme === "primary"){
  return (
    <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: "#3a3e44", borderRadius: 18}] }>
      <Pressable 
      style={[styles.button, { backgroundColor: "#f0f0f0" },]}
      onPress={onPress}>
        <FontAwesome
        name = "picture-o"
        size={18}
        color={"#25292e"}
        style = {styles.buttonIcon}
         />
        <Text style={styles.buttonLabel}>{label}</Text>
        <Text style={styles.secolor}>{choose}</Text>
      </Pressable>
    </View>
  );}
  return(
    <View style = {styles.buttonContainer} >
      <Pressable style = {styles.button} onPress={onPress} >
        <Text style = {styles.buttonLabel} > {label} </Text>
      </Pressable>  
    </View>    
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  secolor:{
    fontSize:16,
  },
});
