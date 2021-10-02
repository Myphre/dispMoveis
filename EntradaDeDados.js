import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

function  EntradaDeDados({armazenarDados}){

    const [fabricante, setFabricante] = useState ('')
    const [descricao, setDescricao] = useState('')
  


  const capturarFabricante = (fabricante) => {
    setFabricante(fabricante)

  }

  const capturarDescricao = (descricao) => {
    setDescricao(descricao)
  }
  
  function limparCampos() {
    setFabricante("")
    setDescricao("")
    
}
    
    
    return (

      <View>
        <div>
        <TextInput 
          placeholder="Fabricante..."
          style={styles.dadosTextInput}
          onChangeText={capturarFabricante}
          value={fabricante}
        />
        <TextInput 
          placeholder="Descricao..."
          style={styles.dadosTextInput}
          onChangeText={capturarDescricao}
          value={descricao}
        />
                </div>
        <Button 
          title="Cadastrar"
          onPress={() => { 
            armazenarDados(fabricante, descricao)
            limparCampos()
          }
        }
        />

      </View>


    )


}

const styles = StyleSheet.create({

    dadosTextInput :{
      borderBottomColor: '#DDD',
      borderBottomWidth: 1,
      marginBottom: 8,
      marginLeft: 15,
      marginRight: 15,
      padding: 8,
      textAlign: 'center'
    }
  });

    

export default EntradaDeDados