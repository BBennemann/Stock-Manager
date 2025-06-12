import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Home = ({setTela}) => {

  return (
    <View style={{flex: 1, backgroundColor: '#2E2E2E'}}>
        <Header/>
        
        <ScrollView contentContainerStyle={{flexGrow: 1, padding: 10}}>
            <ProductCard nome='produto1' categoria={'categoria'} quantidade={12}/>
            <ProductCard nome='produto1' categoria={'categoria'} quantidade={12}/>
            <ProductCard nome='produto1' categoria={'categoria'} quantidade={12}/>
            <ProductCard nome='produto1' categoria={'categoria'} quantidade={12}/>
            <ProductCard nome='produto1' categoria={'categoria'} quantidade={12}/>
        </ScrollView>

        <TouchableOpacity style={styles.fab} onPress={setTela}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1C1C1C',
  },
  menuIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
   fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#D8A13B',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // sombra para Android
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default Home;