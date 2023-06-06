import { View, Text, StyleSheet } from "react-native";

function LoginScreen() {
    return (<View style={styles.container}>
    <Text  style={styles.text}>this is a <Text style={styles.innerText}>LoginScreen</Text></Text>
  </View>)
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignContent: "center",
  },
  text: {
    
    fontWeight: "bold",
    color: "red",
  },
  innerText:{
   
    color:'blue'
  }
});
