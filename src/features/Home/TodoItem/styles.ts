import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
  containe:{
    backgroundColor:"#262626",

    flexDirection:"row",
    paddingHorizontal:12,
    paddingVertical:20,

    width:"100%",
    justifyContent: "space-between",
    alignItems: "center",

    borderColor:"#333333",
    borderWidth:2,
    borderStyle:"solid",
    borderRadius:5,

    marginBottom:8


  },
  wrappedText:{
    flexDirection:"row",
  },
  checkbox:{
    marginRight:16
  },
  text:{
   width:"100%",
   flex:1
  },
})

export default styles