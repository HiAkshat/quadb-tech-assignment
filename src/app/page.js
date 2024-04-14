"use client"

import TodoItem from "@/components/todoItem";
import TodoList from "@/components/todoList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/redux/todoSlice";
import DoneIcon from '@mui/icons-material/Done';

export default function Home() {
  const [formInput, setFormInput] = useState("")
  const todos = useSelector(state => state.todos)

  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (formInput==="") return

    dispatch(
      addTodo({
        title: formInput
      })
    )

    setFormInput("")
  }

  return (
    <main className="max-w-[700px] m-auto bg-[#1a1a1a] h-[100vh]">
      <div className="flex flex-col gap-6 pt-10 px-8">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-6xl font-bold leading-[45px]">ToDo List</h1>
          <span className="ml-1 italic leading-[12px] text-[#b5b5b5]">~ From Akshat</span>
        </div>

        <div className="flex mt-8">
          <div className="flex flex-col gap-1">
            <span className="text-sm ml-3 text-[#b5b5b5]">Add New Task</span>
            <div className="flex">
              <input className="border border-[#545454] rounded-lg rounded-r-none bg-transparent px-3 py-1 text-white outline-none" type="text" value={formInput} onChange={(e)=>setFormInput(e.target.value)} onKeyPress={(e) => {(e.key === 'Enter' && handleAddTask())}}/>
              <button disabled={formInput===""} className="border border-[#545454] rounded-lg rounded-l-none border-l-0 px-2" onClick={handleAddTask}><DoneIcon /></button>
            </div>
          </div>
        </div>
        <TodoList />
      </div>
    </main>
  );
}
