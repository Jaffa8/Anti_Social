import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
// One the basis of dependencies like isLoaded or isSigned in, we are redirecting the user to the respective screen.
// If the user is not signed in, we are redirecting the user to the login screen.
// If the user is signed in, we are redirecting the user to the home screen.
// If the user is not loaded, we are not doing anything.
export default function Initial_layout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    const inAuthScreen = segments[0] === "(auth)";
    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)/login");
    } else if (isSignedIn && inAuthScreen) {
      router.replace("/(tabs)/Index");
    }
  }, [isLoaded, isSignedIn, segments]);
  if (!isLoaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
