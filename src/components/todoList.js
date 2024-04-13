import { useSelector } from "react-redux"
import TodoItem from "./todoItem"

export default function TodoList() {
  const todos = useSelector(state => state.todos)

  return (
    <div className="flex flex-col gap-2">
      {todos.map(todo => {
        return (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed}/>
        )
      })}
      </div>
  )
}
