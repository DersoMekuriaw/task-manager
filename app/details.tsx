import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";

const Details = () => {
  const params = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: params.taskName as string }}
      />
      <ScrollView
        contentContainerStyle={{
          margin: 8,
          gap: 16,
          padding: 16,
          backgroundColor: "#e7e7bd40",
          borderRadius: 7,
        }}
      >
        <Text>{params.taskName}</Text>
      </ScrollView>
    </>
  );
};

export default Details;
