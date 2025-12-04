import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Tasks",
          headerBackButtonDisplayMode: "minimal",
        }}
      />

      <Stack.Screen
        name="details"
        options={{
          title: "Task Details",
          headerBackButtonDisplayMode: "minimal",
          // presentation: "formSheet",
          // sheetAllowedDetents: [0.3, 0.5, 0.8],
        }}
      />

      <Stack.Screen
        name="new"
        options={{
          title: "New Task",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
