import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';

const Form = ({ voltar }) => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const salvar = () => {
    if (!nome || !categoria || !quantidade) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    // Aqui você pode salvar o produto em um estado global, banco ou apenas exibir
    console.log('Produto criado:', {
      nome,
      categoria,
      quantidade: Number(quantidade),
    });

    Alert.alert('Produto criado com sucesso!');
    voltar(); // volta para tela anterior (Home)
  };

  return (
    <View style={styles.container}>
      <Header/>

      <View style={{flex: 1, paddingHorizontal: 15, justifyContent: 'center', paddingBottom: 50}}>
        <Text style={styles.title}>Criar Produto</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={categoria}
          onChangeText={setCategoria}
        />

        <TextInput
          style={styles.input}
          placeholder="Imagem"
          value={categoria}
          onChangeText={setCategoria}
        />

        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={salvar}>
            <Text style={styles.buttonText}>Salvar Produto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#AAA', marginTop: 10 }]} onPress={voltar}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  button: {
    backgroundColor: '#D8A13B',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1C1C1C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Form;
