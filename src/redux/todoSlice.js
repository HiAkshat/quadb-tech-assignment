import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {id: 1, title: "Add new todos", completed: false},
    {id: 2, title: "Delete the existing ones", completed: false},
    {id: 3, title: "Tap on a todo to mark/unmark as done", completed: true},
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }

      state.push(newTodo)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id===action.payload.id)
      state[index].completed=!state[index].completed
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    }
  }
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions
export default todoSlice.reducer