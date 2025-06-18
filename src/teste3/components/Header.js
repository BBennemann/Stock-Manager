import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

export default function Header() {
    return(
        <View style={styles.header}>
            <Image 
              source={require('../../../src/logo.png')} 
              style={styles.imagem} 
              resizeMode="stretch"
            />
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1C1C',
  },
  imagem: {
    flex: 0.9,
    height: 70,
    borderRadius: 10, // opcional
  },
})