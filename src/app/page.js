"use client"

import TodoItem from "@/components/todoItem";
import TodoList from "@/components/todoList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/redux/todoSlice";

export default function Home() {
  const [formInput, setFormInput] = useState("")
  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const handleAddTask = () => {
    dispatch(
      addTodo({
        title: formInput
      })
    )
  }

  return (
    <main className="">
      {console.log(todos)}
      <input className="bg-black text-white outline-none" type="text" value={formInput} onChange={(e)=>setFormInput(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <TodoList />
    </main>
  );
}
