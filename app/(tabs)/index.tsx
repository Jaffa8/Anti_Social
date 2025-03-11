import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}   >
      <Text style={{color:'white'}} >INDEX</Text>
      <Link href={"/notifications"}   style={{color:'white'}} >
      Visit notifications screen
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})