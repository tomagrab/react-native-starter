import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyles } from "@/constants/styles/GlobalStyles/GlobalStyles";
import { useState } from "react";

type Person = {
  id: number;
  name: string;
  age: number;
};

type People = Person[];

export default function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [people, setPeople] = useState<People>([
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 23 },
    { id: 3, name: "John Smith", age: 30 },
    { id: 4, name: "Jane Smith", age: 28 },
    { id: 5, name: "John Johnson", age: 35 },
    { id: 6, name: "Jane Johnson", age: 33 },
    { id: 7, name: "John Brown", age: 40 },
    { id: 8, name: "Jane Brown", age: 38 },
    { id: 9, name: "John White", age: 45 },
    { id: 10, name: "Jane White", age: 43 },
    { id: 11, name: "John Black", age: 50 },
    { id: 12, name: "Jane Black", age: 48 },
    { id: 13, name: "John Green", age: 55 },
    { id: 14, name: "Jane Green", age: 53 },
    { id: 15, name: "John Blue", age: 60 },
    { id: 16, name: "Jane Blue", age: 58 },
    { id: 17, name: "John Red", age: 65 },
    { id: 18, name: "Jane Red", age: 63 },
    { id: 19, name: "John Yellow", age: 70 },
    { id: 20, name: "Jane Yellow", age: 68 },
    { id: 21, name: "John Orange", age: 75 },
    { id: 22, name: "Jane Orange", age: 73 },
    { id: 23, name: "John Purple", age: 80 },
    { id: 24, name: "Jane Purple", age: 78 },
    { id: 25, name: "John Pink", age: 85 },
    { id: 26, name: "Jane Pink", age: 83 },
    { id: 27, name: "John Gray", age: 90 },
    { id: 28, name: "Jane Gray", age: 88 },
    { id: 29, name: "John Silver", age: 95 },
    { id: 30, name: "Jane Silver", age: 93 },
  ]);

  const pressHandler = (id: number) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <SafeAreaView style={[GlobalStyles.flex_1]}>
      <StatusBar style="auto" />
      <Text style={[GlobalStyles.h1]}>People</Text>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={[GlobalStyles.justify_between]}
        data={people}
        renderItem={({ item }) => (
          <View className="flex-1">
            <TouchableOpacity
              onPress={() => pressHandler(item.id)}
              style={[
                GlobalStyles.bg_blue_500,
                GlobalStyles.p_4,
                GlobalStyles.m_4,
                GlobalStyles.flex_1,
              ]}
            >
              <Text style={[GlobalStyles.text_base, GlobalStyles.text_white]}>
                {item.name}
              </Text>
              <Text style={[GlobalStyles.text_base, GlobalStyles.text_white]}>
                {item.age}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* <ScrollView>
        {people.map((person) => (
          <View
            key={person.id}
            style={[
              GlobalStyles.bg_blue_500,
              GlobalStyles.p_4,
              GlobalStyles.m_4,
            ]}
          >
            <Text style={[GlobalStyles.text_base, GlobalStyles.text_white]}>
              {person.name}
            </Text>
            <Text style={[GlobalStyles.text_base, GlobalStyles.text_white]}>
              {person.age}
            </Text>
          </View>
        ))}
      </ScrollView> */}
    </SafeAreaView>
  );
}
