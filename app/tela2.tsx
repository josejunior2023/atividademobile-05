import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { FC } from "react";

const Tela2: FC = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Esta é a Tela 2</Text>
      <Button
        title="Voltar para Home"
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
};

export default Tela2;
