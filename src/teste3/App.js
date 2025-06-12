import React, { useState } from 'react';
import Home from './views/Home';
import Form from './views/Form';

export default function App() {

  const [tela, setTela] = useState('home')

  function home() {setTela('home')}
  function form() {setTela('form')}

  return (tela === 'home' ? <Home setTela={form}/> : <Form voltar={home}/>)
}