import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from './firebaseConfig';

const CreateItem = ({ onItemCreated }) => {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [imagem, setImagem] = useState(null);

  const tirarFoto = async () => {
    const result = await launchCamera({ mediaType: 'photo', quality: 0.5 });
    if (!result.didCancel && result.assets.length > 0) {
      setImagem(result.assets[0]);
    }
  };

  const enviarItem = async () => {
    if (!nome || !quantidade || !imagem) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    try {
      const ext = imagem.fileName.split('.').pop();
      const path = `imagens/${Date.now()}.${ext}`;
      const imgRef = ref(storage, path);

      const img = await fetch(imagem.uri);
      const blob = await img.blob();

      await uploadBytes(imgRef, blob);
      const url = await getDownloadURL(imgRef);

      await addDoc(collection(db, 'itens'), {
        nome,
        quantidade,
        imagemUrl: url,
      });

      Alert.alert('Item salvo com sucesso!');
      setNome('');
      setQuantidade('');
      setImagem(null);
      onItemCreated(); // Atualiza a lista
    } catch (error) {
      console.error('Erro ao salvar item:', error);
      Alert.alert('Erro ao salvar item');
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" />
      <Button title="Tirar Foto" onPress={tirarFoto} />
      {imagem && <Image source={{ uri: imagem.uri }} style={{ width: 100, height: 100 }} />}
      <Button title="Salvar" onPress={enviarItem} />
    </View>
  );
};

export default CreateItem;
