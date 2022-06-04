import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home( { navigation } ) {
  
  return (
    <SafeAreaView style={styles.mainForm}>

      {/*---MAIN HEADER---*/}
      <View style={{flexDirection: 'row'}}>
        <AntDesign name="menufold" size={24} color="black" />
        <Text style={{marginHorizontal: 130, fontSize: 20, fontWeight: 'bold'}}>SG</Text>
        <AntDesign name="search1" size={24} color="black" style={{alignContent: 'flex-end'}}/>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text style={{fontSize: '30', fontWeight: 'bold', marginRight: 70}}>Our Products</Text>
        <Text style={{color: 'grey', marginTop: 14, fontSize: 16}}>Sort by <AntDesign name="down" size={15} color="black" /></Text>
      </View>
      
      {/*----Horizontal scroll----*/}
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: 10, flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10, marginRight: 10,}}>
            <Text>Benz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10, marginRight: 10}}>
            <Text>BMW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10, marginRight: 10}}>
            <Text>Porsche</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10, marginRight: 10}}>
            <Text>Tesla</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10, marginRight: 10}}>
            <Text>Volkswagen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10, marginRight: 10}}>
            <Text>Jaguar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/*---display items---*/}
      <View>
        <ScrollView>
          <View>
            <View style={styles.items}>
              <Image source={require('./assets/Mercedes.jpg')} style={{width: '100%', height: 250, alignItems: 'center', borderRadius: 10,}}></Image>
              
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>Benz S Class 2021</Text>
                  <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}>$ 145,000</Text>
                </View>
                <View style={{marginLeft: 40, marginTop: 20}}>
                  <TouchableOpacity style={{backgroundColor: 'black', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20}} 
                    onPress={() => navigation.navigate('Details')}  >
                    <Text style={{color: 'white'}}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.items}>
              <Image source={require('./assets/porsche.webp')} style={{width: '100%', height: 250, alignItems: 'center', borderRadius: 10,}}></Image>
              
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>Porsche Panamera</Text>
                  <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}>$ 220,000</Text>
                </View>
                <View style={{marginLeft: 40, marginTop: 20}}>
                  <TouchableOpacity style={{backgroundColor: 'black', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20}} onPress={() => navigation.navigate('Details1')}  >
                    <Text style={{color: 'white'}}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.items}>
              <Image source={require('./assets/BMW-X7.jpg')} style={{width: '100%', height: 250, alignItems: 'center', borderRadius: 10,}}></Image>
              
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>BMW X7M 2021</Text>
                  <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}>$ 145,000</Text>
                </View>
                <View style={{marginLeft: 50, marginTop: 20}}>
                  <TouchableOpacity style={{backgroundColor: 'black', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20}} onPress={() => navigation.navigate('Details2')}  >
                    <Text style={{color: 'white'}}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.items}>
              <Image source={require('./assets/Jaguar.jpg')} style={{width: '100%', height: 250, alignItems: 'center', borderRadius: 10,}}></Image>
              
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold', paddingTop: 10}}>Jaguar F-Type</Text>
                  <Text style={{fontSize: 18, fontWeight: '400', paddingTop: 5}}>$ 89,000</Text>
                </View>
                <View style={{marginLeft: 60, marginTop: 20, marginBottom: 100}}>
                  <TouchableOpacity 
                    style={{
                      backgroundColor: 'black', 
                      paddingVertical: 10, 
                      paddingHorizontal: 30, 
                      borderRadius: 20
                    }}
                    onPress={() => navigation.navigate('Details3')} 
                  >
                    <Text style={{color: 'white'}}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
      {/*---^End^--Display Items END---*/}

    </SafeAreaView>
    );
  }
  const styles = StyleSheet.create ({
    mainForm: {
      padding: 20,
      flex: 1, 
      backgroundColor: '#f5f3ed',
    },
    items: {
      width: '100%',
      padding: 10,
      borderRadius: 10, 
      backgroundColor: 'white',
    }
  });