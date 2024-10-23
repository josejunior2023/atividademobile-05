import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { FC } from "react";

type Params = {
  id: string;
};

const TelaComParametro: FC = () => {
  const { id } = useLocalSearchParams<Params>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Parâmetro recebido: {id}</Text>
    </View>
  );
};

export default TelaComParametro;
