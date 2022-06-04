import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Landing({ navigation }) {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        
        <View style={styles.container2}>
            <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 20
            }}>SeatGeek</Text>
            <Image source ={require("./assets/bmw-x6.jpg")} resizeMode='cover' style ={{width: '80%', height: 300, borderRadius: 20, alignItems: 'center'}}/>
        </View>



        <View style={styles.container3}>
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>Log-in</Text>
            <Text style={{
                fontSize: 18,
                color: 'grey',
            }}>Hello, welcome back!</Text>
            
        </View>

        {/* <View style={styles.inputText}>
            <Text style={{fontSize: 18,}}>Username</Text>
            <View style={{flexDirection: 'row'}}>
                <AntDesign name="user" size={24} color="black" style={{marginTop: 20}}/>
                <TextInput placeholder="Enter your full name" style={{paddingVertical: 15, paddingHorizontal: 5, borderBottomWidth: 2, borderBottomColor: 'black', width: '80%', marginTop: 10}}></TextInput>
            </View>
        </View> */}
        <View style={styles.inputText}>
            <Text style={{fontSize: 18,}}>Username:</Text>
            <View style={{marginTop: 7, padding: 5,borderWidth: 1, borderColor: 'black', flexDirection: 'row', width: '90%', borderRadius: 10, backgroundColor: 'white'}}>
                <AntDesign name="user" size={24} color="black" style={{marginTop: 8, marginLeft: 5}}/>
                <TextInput placeholder="Enter username" style={{padding: 10, width: '80%', fontSize: 16}}></TextInput>
            </View>
            
        </View>
        <View style={styles.inputText1}>
            <Text style={{fontSize: 18,}}>Username:</Text>
            <View style={{marginTop: 7, padding: 5, borderWidth: 1, borderColor: 'black', flexDirection: 'row', width: '90%', borderRadius: 10, backgroundColor: 'white'}}>
                <AntDesign name="lock" size={24} color="black" style={{marginTop: 8, marginLeft: 5}}/>
                <TextInput placeholder="Enter your password" secureTextEntry={true}  style={{padding: 10, width: '80%', fontSize: 16}}></TextInput>
            </View>
            
        </View>
        {/* <View style={styles.inputText1}>
            <Text style={{fontSize: 18,}}>Password</Text>
            <View style={{flexDirection: 'row'}}>
                <AntDesign name="lock" size={24} color="black" style={{marginTop: 20,}}/>
                <TextInput placeholder="Enter your password" secureTextEntry={true} style={{padding: 15, borderBottomWidth: 2, borderBottomColor: 'black', width: '80%', marginTop: 10}}></TextInput>
            </View>
            
        </View> */}

        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={
                {
                    backgroundColor: 'orange',
                    width: '60%',
                    borderRadius: '25%',
                    marginTop: 40,
                    paddingVertical: 10,
                    alignItems: 'center' 
                }
            }
            onPress={() => navigation.navigate('Home')} 
            >
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10}} >Login</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}
  const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#e8f5fd",
    // alignItems: 'center',
    // justifyContent: 'center'

},
  container2:{
    marginTop: 50,
    paddingLeft: 10,
    alignItems: 'center',
    // justifyContent: "center",
    
},

  container3: {
    alignItems: 'flex-start',
    marginLeft: 50,
    marginTop: 20
    
  },
  inputText: {
      marginLeft: 50,
      marginTop: 30,
  },
  inputText1: {
    marginLeft: 50,
    marginTop: 10,
}
  
});
