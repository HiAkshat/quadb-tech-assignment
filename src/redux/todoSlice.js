import { createSlice } from "@reduxjs/toolkit";

// Get the todos from previous session if available
// const getLocalStorageItems = () => {
//   const items = localStorage.getItem("todos")
//   if (items!=null) return JSON.parse(items)
//   return null
// }

const todoSlice = createSlice({
  name: "todos",

  // Todo State: If null in local storage, default todos are added
  initialState: [
    {id: 1, title: "Add new todos", completed: false},
    {id: 2, title: "Delete the existing ones", completed: false},
    // {id: 3, title: "All your todos are stored locally for later access", completed: false},
    {id: 4, title: "Tap on a todo to mark/unmark as done", completed: true},
  ],

  // Todo functions are defined as reducers
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }

      state.push(newTodo)
      localStorage.setItem("todos", JSON.stringify(state))
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id===action.payload.id)
      state[index].completed=!state[index].completed
      localStorage.setItem("todos", JSON.stringify(state))
    },
    deleteTodo: (state, action) => {
      localStorage.setItem("todos", JSON.stringify(state.filter(todo => todo.id !== action.payload.id)))
      return state.filter(todo => todo.id !== action.payload.id)
    }
  }
})

// Actions exported for components to access
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions

// Todo reducer exported as default (for Redux store to access)
export default todoSlice.reducer