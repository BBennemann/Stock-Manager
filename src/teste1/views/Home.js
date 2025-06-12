import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import ProductCard from '../components/productCard';

export default function HomeScreen() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Nome Produto', quantity: 0 },
    { id: 2, name: 'Nome Produto', quantity: 0 },
    { id: 3, name: 'Nome Produto', quantity: 4 },
    { id: 4, name: 'Nome Produto', quantity: 4 },
    { id: 2, name: 'Nome Produto', quantity: 0 },
    { id: 3, name: 'Nome Produto', quantity: 4 },
    { id: 4, name: 'Nome Produto', quantity: 4 },

  ]);

  const handleIncrease = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const handleDecrease = (id) => {
    setProducts(products.map(p => p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Unika</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            quantity={product.quantity}
            onIncrease={() => handleIncrease(product.id)}
            onDecrease={() => handleDecrease(product.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#000',
  },
  menuIcon: {
    color: '#fff',
    fontSize: 26,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
});
