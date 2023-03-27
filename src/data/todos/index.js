import * as Crypto from "expo-crypto";
// function guidGenerator(){
//   let S4 = function(){
//       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
//   };
//   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
// }
const getTodos = () => [
  newTodo({ text: "tarea 1", done: false }),
  newTodo({ text: "tarea 2", done: false }),
  newTodo({ text: "tarea 3", done: false }),
  newTodo({ text: "tarea 4", done: false }),
  newTodo({ text: "tarea 5", done: false }),
  newTodo({ text: "tarea 6", done: false }),
  newTodo({ text: "tarea 7", done: false }),
  newTodo({ text: "tarea 8", done: false }),
  newTodo({ text: "tarea 9", done: false }),
  newTodo({ text: "tarea 10", done: false }),
  newTodo({ text: "tarea 11", done: false }),
  newTodo({ text: "tarea 12", done: false }),
  newTodo({ text: "tarea 13", done: false }),
  newTodo({ text: "tarea 14", done: false }),
  newTodo({ text: "tarea 15", done: false }),
  newTodo({ text: "tarea 16", done: false }),
  newTodo({ text: "tarea 17", done: false }),
  newTodo({ text: "tarea 18", done: false }),
  newTodo({ text: "tarea 19", done: false }),

  
];

const newTodo = todo => (
  {
    id: Crypto.randomUUID(),
    text: todo.text,
    createdAt : new Date(),
    done: todo.done
  }
)

const updateTodo = (list, todo) => {
  const updateIndex = list.findIndex(t => t.id === todo.id )
  const newTodoList = [...list];
  newTodoList[updateIndex] = todo
  return newTodoList
}

const addTodo = (list, todo) => [...(list || []), newTodo(todo)]
const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id)


export { getTodos, updateTodo, addTodo, deleteTodo };
