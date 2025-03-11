import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'
import { useAuth, useSSO } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'


export default function login() {

  
const {startSSOFlow}=useSSO()
const router=useRouter()
// making the google sign in function
 const handleGoogleSignIn=async()=>{
try {
 const {createdSessionId,setActive}= await startSSOFlow({strategy:"oauth_google"})
  if(setActive && createdSessionId){
    setActive({session:createdSessionId})
    router.replace("/(tabs)/Index")
  }
} catch (error) {
  console.log(error)
}
 }

  return (
    <View style={styles.container}  >
      {/* the logo name and the theme */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
        <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Anti-Social</Text>
        <Text style={styles.tagLine}>don't miss anything</Text>
        {/* now the illustration */}
        <Image   
        source={require('../../assets/images/Online wishes-bro (1).png')}
        resizeMode='cover'
        style={styles.illustration}
        />
        {/* login section */}
        <View style={styles.loginSection}  >
         <TouchableOpacity   
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
         >
          <View style={styles.googleIconContainer}  >
            <Ionicons name='logo-google' size={20} color={COLORS.surface}  />
          </View>
          <Text>
           Continue with Google
          </Text>
         </TouchableOpacity>
         <Text style={styles.termsText}>
            By continuing, you agree to our terms of service and privacy policy
         </Text>
        </View>
      </View>
    </View>
  )
}