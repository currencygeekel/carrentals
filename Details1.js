import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Details1 ({ navigation }) {
    return(
        <SafeAreaView style={styles.mainForm}>
            <ScrollView>

                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <Text style={{fontSize: 21, color: 'grey', marginRight: 220}}><TouchableOpacity onPress={() => navigation.navigate('Home')}><AntDesign name="left" size={21} color="black" /></TouchableOpacity>  Details</Text>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Checkout')}>
                        <Feather name="shopping-cart" size={25} color="black" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View >
                        <Image source={require('./assets/porsche.webp')} style={{width: '100%', height: 250, alignItems: 'center', borderRadius: 10,}}></Image>
                        
                        <View style={{backgroundColor: 'white', padding: 20, marginTop: 20, borderRadius: 5}}>
                            <Text style={{fontSize: '23', fontWeight: '500'}}>Porsche Panamera 2022 - Specs</Text>
                            <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}><Text style={{fontSize: '21', fontWeight: '500'}}>Price - </Text>$ 1,000,000</Text>
                            <Text style={styles.descriptionText}>With a classically beautiful body and V-8-only engine options, the 2022 Jaguar F-type is a throwback sports car of sorts.</Text>
                            <View style={{marginTop: 15}}>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 1500 horsepower engine, 10.0L V15</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 30 inch carbon Fibre rims</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> Fully Electric</Text>
                                <Text style={{fontSize: 16}}><AntDesign name="check" size={22} color="grey" /> 0-100mph, 0.78 second</Text>

                            </View>

                            <TouchableOpacity style={{marginTop: 60, alignItems: 'center', backgroundColor: 'black', borderRadius: 22, paddingVertical: 10}} onPress={() => navigation.navigate('Checkout')} >
                                <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    mainForm: {
      padding: 20,
      flex: 1, 
      backgroundColor: '#f5f3ed',
    },
    descriptionText: {
        color: 'grey',
        marginTop: 10,
        fontSize: 16,
    }
});