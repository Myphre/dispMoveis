
import React, { useState } from 'react'
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native'

class ExibeItens extends React.Component {

    render() {
        return (
            <View           style={styles.listaDeItens}
            >
                {
                   <FlatList
                        data={this.props.dados}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Text>
                                            {"Descricao:  "+ item.descricao
                                             +"\nFabricante: " + item.fabricante } 
                                        </Text>
                                    </View>
                                )
                            }}

                        />

                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    listaDeItens: {
      padding: 12,
      backgroundColor: '#CCE',
      borderColor: '#CCC',
      marginBottom: 8,
      borderRadius: 8
    }
  });

export default ExibeItens;