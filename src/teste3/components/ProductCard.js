import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductCard = ({ nome, categoria, quantidade }) => {
  const [qtd, setQuantidade] = useState(() => quantidade);

  return (
    <View style={styles.card}>
      <View style={styles.imagemView}>
        <Image 
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAAnwe0aHOuifwhWGL66L-anpHl8390C4zA&s" }} 
          style={styles.imagem} 
          resizeMode="cover"
        />
      </View>
      <View style={styles.prod}>
        <Text style={styles.texto}>{nome}</Text>
        <Text style={styles.texto}>{categoria}</Text>
        <View style={styles.BtnView}>
          <Botao text="-" funcao={() => setQuantidade(prev => Math.max(prev - 1, 0))} />
          <Text style={styles.texto}>{qtd}</Text>
          <Botao text="+" funcao={() => setQuantidade(prev => prev + 1)} />
        </View>
      </View>
    </View>
  );
};

function Botao({ text, funcao }) {
  return (
    <TouchableOpacity
      onPress={funcao}
      style={{
        backgroundColor: '#D8A13B',
        height: 40,
        width: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: '#1C1C1C', fontSize:20 }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#C8C2BC',
  },
  imagemView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prod: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  BtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  texto: {
    fontSize: 20
  },
  imagem: {
    flex: 0.8,
    width: 140,
    borderRadius: 10, // opcional
  },
});

export default ProductCard;
