import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={{color: 'white', fontSize: 20}}>---</Text>
            <Text style={{color: 'white', fontSize: 26}}>Unika</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1C1C1C',
  }
})