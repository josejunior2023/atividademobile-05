import { Stack } from "expo-router";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Página Inicial" }} />
      <Stack.Screen name="tela2" options={{ title: "Tela 2" }} />
      <Stack.Screen name="[id]" options={{ title: "Detalhes" }} />
    </Stack>
  );
};

export default Layout;
