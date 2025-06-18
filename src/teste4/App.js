import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CreateItem from './CreateItem';
import ItemList from './ItemList';

const App = () => {
  const [mostrarLista, setMostrarLista] = useState(false);
  const [atualizar, setAtualizar] = useState(false);

  const atualizarLista = () => {
    setAtualizar(!atualizar);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button
        title={mostrarLista ? 'Criar novo item' : 'Ver lista de itens'}
        onPress={() => setMostrarLista(!mostrarLista)}
      />
      {mostrarLista ? <ItemList key={atualizar} /> : <CreateItem onItemCreated={atualizarLista} />}
    </View>
  );
};

export default App;
