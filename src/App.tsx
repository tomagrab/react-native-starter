import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { GlobalStyles } from "@/constants/styles/GlobalStyles/GlobalStyles";

export default function App() {
  return (
    <View
      style={[
        GlobalStyles.flex_1,
        GlobalStyles.align_center,
        GlobalStyles.justify_center,
      ]}
    >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
