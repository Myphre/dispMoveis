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


    function armazenarDados (fabricante, descricao){

      if(fabricante ==="" || descricao === "")
        return
      
      else{
    const item = {fabricante, descricao}
    setDados([...dados, item])
        }

    {/* nao funciona
          setContador(contador + 1)

    setDados (dados => {
      let aux = [...dados, {key: contador.toString(), value: item} ]
      console.log(aux)

      return aux
    })
    const [contador, setContador] = useState(0)

  */}

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
