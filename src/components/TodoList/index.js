import { Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  listItem: {
    borderWidth: 1,
    margin: 5,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  bullet: {
    padding: 5,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
    padding: 5,
    fontWeight: "bold",
  },
  textDone: {
    color: "#aaa",
    textDecorationLine: "line-through",
    fontWeight: "normal",
  },
  delete: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "#ff0000",
    fontSize: 18,
  },
});

renderItem = (todo) => (
  <TouchableOpacity
    key={todo.text}
    style={styles.listItem}
    onPress={() => onUpdate({ ...todo, done: !todo.done })}
  >
    <Text style={styles.bullet}>-</Text>
    <Text style={[styles.text, todo.done && styles.textDone]}>{todo.text}</Text>
    <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
      <Text style={styles.deleteText}>X</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const TodoList = ({ todos, onUpdate, onDelete }) => {
  return (
    // <FlatList
    //   style= {styles.container}
    //   data={todos}
    //   keyExtractor={(todo) => todo.id}
    //   renderItem={({ item }) => renderItem(item)}
    // />
    <ScrollView contentContainerStyle={styles.container} >

      {todos.map((todo) => (
        <TouchableOpacity key={todo.text} style={styles.listItem} onPress={() => onUpdate({...todo, done: !todo.done}) }>
          <Text style={styles.bullet}>-</Text>
          <Text
            style={[styles.text, todo.done && styles.textDone]}
          >
            {todo.text}
          </Text>
          <TouchableOpacity style={styles.delete} onPress={() => onDelete(todo)}>
            <Text style={styles.deleteText}>X</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TodoList;
