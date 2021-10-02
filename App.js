import React, { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';
import EntradadeDados from './EntradaDeDados.js'
import ExibeItens from './ExibeItens.js'


export default function App() {
  
  const [dados, setDados] = useState([])

  const [contador, setContador] = useState(0)

    function armazenarDados (fabricante, descricao){

    setContador(contador + 1)
    const item = {fabricante, descricao}
    setDados([...dados, item])

    {/* nao funciona
    setDados (dados => {
      let aux = [...dados, {key: contador.toString(), value: item} ]
      console.log(aux)

      return aux
    })*/}

  }

  return (
  
    <View style={styles.container}>

      <EntradadeDados armazenarDados={armazenarDados} />

      <ExibeItens dados={dados}/>

      </View>

  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCE',
    borderColor: '#CCC',
    marginBottom: 8,
    borderRadius: 8
  }
});
