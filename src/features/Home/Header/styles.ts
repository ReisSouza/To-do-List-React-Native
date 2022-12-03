import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
  container: {
    height:173,
    width:'100%',

    backgroundColor: '#0D0D0D',

    alignItems:"center",
    justifyContent:"center",
    position:'relative',
    zIndex:20
  },

  wrappedTextField : {
    position:'absolute',
    width:'90%',
    bottom:-30,
  }
});


export default styles