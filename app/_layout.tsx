import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet } from "react-native";

import Initiallayout from "@/components/Initial_layout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Initiallayout />
          </SafeAreaView>
        </SafeAreaProvider>
        </ClerkAndConvexProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})