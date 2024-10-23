import { Link } from "expo-router";
import { View, Text } from "react-native";
import { FC } from "react";

const Tela1: FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela 1</Text>
      <Link href="/tela2">Ir para Tela 2</Link>
    </View>
  );
};

export default Tela1;
