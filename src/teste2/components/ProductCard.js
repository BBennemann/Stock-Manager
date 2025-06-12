import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ name }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.productName}>{name}</Text>
      <View style={styles.quantityControl}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>QTDE</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    marginBottom: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
  },
});

export default ProductCard;
