import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "../screens/LoginScreen";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <LoginScreen />
    </SafeAreaView>
  )
}