import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ name, quantity, onIncrease, onDecrease, categorie}) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productName}>{categorie}</Text>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton} onPress={onDecrease}>
            <Text style={styles.controlText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.controlButton} onPress={onIncrease}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fffaf0',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    height: 200,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  imagePlaceholder: {
    width: 120,
    height: 150,
    backgroundColor: '#6F3E2D',
    borderRadius: 20,
    marginRight: 15,
    marginLeft: 10,
  },
  detailsContainer: {
    alignItems: 'center',
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginHorizontal: 10,
  },
  controlText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    minWidth: 40,
    textAlign: 'center',
  },
});