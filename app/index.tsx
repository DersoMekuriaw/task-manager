import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

interface Task {
  completedOn: string;
  createdOn: string;
  dueDate: string;
  isCompleted: boolean;
  itemId: number;
  tags: string;
  taskDescription: string;
  taskName: string;
}

export default function Index() {
  const [items, setItems] = useState<Task[]>([]);

  useEffect(() => {
    //get Tasks
    getTaks();
  }, []);

  async function getTaks() {
    const response = await fetch(
      "http://freeapi.miniprojectideas.com/api/JWT/GetAllTaskList/?limit=5"
    );
    const data = await response.json();

    setItems(data.data);
  }

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 16,
        padding: 16,
      }}
    >
      {items.map((item) => (
        <Link
          key={item.itemId}
          href={{pathname:"/details", params: {taskName: item.taskName}}}
          style={{
            backgroundColor: "#e7e7bd40",
            borderRadius: 7,
            padding: 8,
          }}
        >
          <View>
            <Text style={styles.taskName}>{item.taskName}</Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  taskName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    padding: 8,
  },
});
