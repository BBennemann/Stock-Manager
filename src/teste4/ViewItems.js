import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';

const ItemList = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'itens'), (snapshot) => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItens(lista);
    });
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <Text>{item.nome} - {item.quantidade}</Text>
      {item.imagemUrl && <Image source={{ uri: item.imagemUrl }} style={{ width: 100, height: 100 }} />}
    </View>
  );

  return <FlatList data={itens} renderItem={renderItem} keyExtractor={item => item.id} />;
};

export default ItemList;
