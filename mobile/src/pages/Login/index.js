import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo-black.png'

export default function Login() {
  const navigation = useNavigation();

  function handleRedirect() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
          <Image source={Logo} />
      </View>
      <View style={styles.optionLogin}>
          <TouchableHighlight style={styles.btnFacebook} onPress={handleRedirect}>
              <Text style={styles.txtDefault} >Facebook</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnGoogle} onPress={handleRedirect}>
              <Text style={styles.txtDefault} >Google</Text>
          </TouchableHighlight>
          <Text style={styles.txtOu} >........ OU ........</Text>
          <TouchableHighlight style={styles.btnEmail} onPress={handleRedirect}>
              <Text style={styles.txtDefault} >Email</Text>
          </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFF"
  },
  logoView:{
    flex:4,
    justifyContent:"center",
    alignItems:"center"
  },
  optionLogin:{
    flex:6,
    alignItems:"center",
    paddingTop: 40
  },
  btnFacebook:{
    width: 300,
    height: 50,
    borderRadius:20,
    backgroundColor:"#3B5998",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  btnGoogle:{
    width: 300,
    height: 50,
    borderRadius:20,
    backgroundColor:"#DB4437",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  btnEmail:{
    width: 300,
    height: 50,
    borderRadius:20,
    backgroundColor:"#F36C15",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
  },
  txtDefault:{
    fontSize: 20,
    fontWeight: "bold",
    color:"white"
  },
  txtOu:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color:"black"
  }
});

