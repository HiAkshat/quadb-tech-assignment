import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '@/redux/todoSlice';

export default function TodoItem({id, title, completed}) {
  const dispatch = useDispatch()

  const handleComplete = () => {
    dispatch(
      toggleComplete({
        id
      })
    )
  }

  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id
      })
    )
  }
  
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex items-center px-3 py-1 gap-2 bg-[#444444] rounded-lg">
          <button onClick={handleComplete}><DoneIcon /></button>
          <span>{title}</span>
          {completed && <span>he</span>}
        </div>
        <button onClick={handleDelete}><DeleteIcon /></button>
      </div>
    </div>
  )
}
