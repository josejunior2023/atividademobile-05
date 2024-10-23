import { Link, useRouter } from "expo-router";
import { View, Button, Text } from "react-native";
import { FC } from "react";

const Home: FC = () => {
  const router = useRouter();
  const randomId = Math.floor(Math.random() * 100);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página Inicial</Text>

      <View style={{ marginBottom: 40 }}>
        <Link href={`/${randomId}`}>
          <Text style={{ fontSize: 18, color: "blue" }}>
            Ir para a tela com o ID {randomId}
          </Text>
        </Link>
      </View>

      <Button
        title="Navegar para Tela 2"
        onPress={() => {
          router.push("/tela2");
        }}
      />
    </View>
  );
};

export default Home;
