import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = ['Nome Produto', 'Nome Produto', 'Nome Produto', 'Nome Produto'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menuIcon} />
        <Text style={styles.title}>Unika</Text>
      </View>
      {products.map((name, index) => (
        <ProductCard key={index} name={name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
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
});

export default Home;
