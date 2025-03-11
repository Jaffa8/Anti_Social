import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'

export default function TabLayout() {
  return (
  <Tabs
   screenOptions={{
    headerShown: false,
    tabBarInactiveTintColor: COLORS.grey,
    tabBarActiveTintColor: COLORS.primary,
    tabBarShowLabel: false,
   tabBarStyle:{
    backgroundColor:COLORS.surface,
    borderTopWidth:0,
    position:'absolute',
    elevation:0,
    height:40,
    paddingBottom:10,
   }
  }}
  >
    <Tabs.Screen  
    options={{tabBarIcon: ({color}) => <Ionicons name="home" size={26}  color={color}/>,sceneStyle:{backgroundColor:COLORS.blackground}}} 
    name='Index'
    />
     <Tabs.Screen   
     options={{tabBarIcon: ({color}) => <Ionicons name="bookmarks" size={26} color={color} />,sceneStyle:{backgroundColor:COLORS.blackground}}}
    name='bookmarks'
    />
     <Tabs.Screen   
          options={{tabBarIcon: ({color}) => <Ionicons name="add-circle" size={26} color={color} />,sceneStyle:{backgroundColor:COLORS.blackground}}}

    name='create'
    />
     <Tabs.Screen   
          options={{tabBarIcon: ({color}) => <Ionicons name="heart" size={26} color={color} />,sceneStyle:{backgroundColor:COLORS.blackground}}}
    name='notifications'
    />
     <Tabs.Screen   
          options={{tabBarIcon: ({color}) => <Ionicons name="person-circle" size={26} color={color}/>,sceneStyle:{backgroundColor:COLORS.blackground}}}
    name='profile'
    />
   </Tabs>
  )
}