import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import TodoList from "todoList/src/components/TodoList";
import { useState } from "react";
import { getTodos, updateTodo, addTodo, deleteTodo } from "todoList/src/data/todos";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 30,
  },
  addRow: {
    flexDirection : "row",
    width: "80%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    flex:1,
    borderBottomWidth: 1,
    padding: 5
  }
});



export default function MainScreen() {
  const [todos, setTodos] = useState(getTodos());
  const [newTodo, setNewTodo] = useState();

  const handleAdd = () => {
        const newList = addTodo(todos, {text: newTodo})
        setTodos(newList)
        setNewTodo(null)
  }

  const handleUpdate = todo => {
    const newList = updateTodo(todos, todo);
    setTodos(newList)
  }

  const handleDelete = todo => {
    const newList = deleteTodo(todos, todo);
    setTodos(newList)
  }

  return (
    <View style={styles.container}>
      <Text selectable style={styles.title}>
        Todo list App
      </Text>
      <View style={styles.addRow}>
        <TextInput
          value={newTodo}
          onChangeText={(todo) => setNewTodo(todo)}
          placeholder="Nuevo toDo"
          style={styles.text}
          autoCapitalize="words"
          returnKeyType="done"
        />
        <Button onPress={handleAdd} title="Añadir" />
      </View>
      <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
    </View>
  );
}
