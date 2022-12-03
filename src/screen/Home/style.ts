import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems:"center",
  },
  notFoundTitle:{
    color:"#808080",
    textAlign:"center",
    fontSize:16,
    fontWeight:'900',
    marginTop:8
  },
  notFoundDescription:{
    color:"#808080",
    textAlign:"center",
    fontSize:16,
    
  },
  wrappedNotFound:{
    alignItems:"center",
    marginTop:24
  },
  wrappedList :{
    width:'90%',
    marginTop:24
  }
});


export default styles