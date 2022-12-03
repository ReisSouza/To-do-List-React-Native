import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent: "space-between",

    marginTop:64,

    marginHorizontal:20,

    paddingBottom:12,

    borderBottomColor:'#808080',
    borderBottomWidth:1,
    borderStyle:'solid',
    width:'90%',
  },
  flex:{
    flexDirection:"row",
    alignItems:'center',
    flex:0,
  },
  taskText:{
    color:'#C71861',
    marginRight:8
  },
 
  isDoneText:{
    color:'#CF5D1E',
    marginRight:8
  },
  Number:{
    color:'#FFF',
    backgroundColor:"#333333",
    textAlign:'center',
    paddingHorizontal:8,
    paddingVertical:2,
    borderRadius:99,
  }
})

export default styles