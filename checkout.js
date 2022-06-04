import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Checkout ({ navigation }) {
    return(
        <SafeAreaView style={styles.mainForm}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>

                <Text style={{fontSize: 21, flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginRight: 60}}
                        onPress={() => navigation.navigate('Home')}>
                        <AntDesign name="left" size={21} color="black" />
                    </TouchableOpacity> Confirm Purchase
                </Text>
            </View>

            <View style={{backgroundColor: 'white', borderRadius: 5, paddingLeft: 5}}>
                <Text style={{fontSize: 18, marginTop: 10, fontWeight: '500'}}>Pay with your bank card: </Text>
                <Image 
                    source={require('./assets/card1.png')} 
                    style={{
                        width: '100%', 
                        height: 220, 
                        alignItems: 'center', 
                        borderRadius: 10,
                        }}>
                </Image>
            </View>

            <View style={{backgroundColor: 'white', marginTop: 10, padding: 10, borderRadius: 5}}>
                <Text style={{ fontSize: 18, fontWeight: '500'}}>Other payment method:</Text>
                <View style={styles.inputText1}>
                    <Text style={{fontSize: 18,}}>Card Number:</Text>
                    <View style={{borderWidth: 2, borderColor: '#663300', flexDirection: 'row', width: '95%', borderRadius: 10, margin: 5}}>
                        <FontAwesome name="credit-card" size={24} color="black" style={{marginTop: 5, marginLeft: 10}}/>
                        <TextInput placeholder=" - - - -   - - - -   - - - -   - - - -" style={{padding: 10, width: '80%', fontSize: 16}}></TextInput>
                    </View>
                    
                </View>
                <View style={styles.inputText1}>
                    <Text style={{fontSize: 18,}}>Card Holder Name:</Text>
                    <View style={{borderWidth: 2, borderColor: '#663300', flexDirection: 'row', width: '95%', borderRadius: 10, margin: 5}}>
                        <MaterialCommunityIcons name="card-account-details-outline" size={24} color="black" style={{marginTop: 5, marginLeft: 10}}/>
                        <TextInput placeholder="card holder name " style={{padding: 10, width: '80%', fontSize: 16}}></TextInput>
                    </View>
                    
                </View>
                <View style={styles.inputText1}>
                    <Text style={{fontSize: 18,}}>Expiration Date:</Text>
                    <View style={{borderWidth: 2, borderColor: '#663300', flexDirection: 'row', width: '95%', borderRadius: 10, margin: 5}}>
                        <Fontisto name="date" size={24} color="black" style={{marginTop: 5, marginLeft: 10}}/>
                        <TextInput placeholder="Enter your card number" style={{padding: 10, width: '80%', fontSize: 16}}></TextInput>
                    </View>
                    
                </View>

                <TouchableOpacity style={{marginTop: 60, alignItems: 'center', backgroundColor: '#ffcc00', borderRadius: 22, paddingVertical: 10}} onPress={() => navigation.navigate('Checkout')} >
                    <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>Confirm Purchase</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create ({
    mainForm: {
      padding: 20,
      flex: 1, 
      backgroundColor: '#f5f3ed',
    },
    inputText1: {
        marginTop: 10,
    }
});