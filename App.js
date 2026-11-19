import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


const datasource = [
  {
    data: [
      {name: 'Apple', image: {uri: 'https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}},
      {name: 'Banana', image: {uri: 'https://plus.unsplash.com/premium_photo-1724250081102-cab0e5cb314c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}},
      {name: 'Orange', image: {uri: 'https://plus.unsplash.com/premium_photo-1670512181061-e24282f7ee78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}},
    ],
    title: "Fruits",
    icon: "apple-whole",
    bgcolor: "#E74C3C",
    textcolor: "white",
  },
  {
    data: [
      {name: 'Carrot', image: {uri: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}},
      {name: 'Broccoli', image: {uri: 'https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}},
      {name: 'Corn', image: {uri: 'https://plus.unsplash.com/premium_photo-1667047165840-803e47970128?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}},
    ],
    title: "Vegetables",
    icon: "carrot",
    bgcolor: "#27AE60",
    textcolor: "white",
  },
];

const renderItem = ({item, section}) => {
  return (
      <TouchableOpacity style={[styles.opacityStyle, {borderColor: section.bgcolor}]}
                        onPress={() => Alert.alert(item.name + " is selected!")}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source={item.image} style={styles.imageStyle}/>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Fruits & Vegetables</Text>
        <Button title="Add Item" onPress={() => {}}/>
        <SectionList sections={datasource} renderItem={renderItem}
                     contentContainerStyle={{padding: 10}}
                     renderSectionHeader={({section: {title, icon, bgcolor, textcolor}}) => (
                         <View style={[styles.headerStyle, {backgroundColor: bgcolor}]}>
                           <FontAwesome6 name={icon} size={20} color={textcolor}/>
                           <Text style={[styles.headerText, {color: textcolor}]}>{title}</Text>
                         </View>
                     )}/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  opacityStyle: {
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
  },
  textStyle: {
    fontSize: 18,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});