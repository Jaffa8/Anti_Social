import { StyleSheet } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function Index() {
   return <Redirect href={'/(auth)/login'} />
}

const styles = StyleSheet.create({})