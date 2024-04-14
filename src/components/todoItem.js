import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '@/redux/todoSlice';
import { useState } from 'react';

export default function TodoItem({id, title, completed}) {
  const [isTodoHovered, setIsTodoHovered] = useState(false)
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
      <div className="flex items-center gap-2 font-light">
        <div onMouseEnter={()=>setIsTodoHovered(true)} onMouseLeave={()=>setIsTodoHovered(false)} onClick={handleComplete} className={`relative flex items-center justify-between w-full px-3 py-1 gap-2 ${completed ? "bg-[#306844]" : "bg-[#353535]"} rounded-lg hover:cursor-pointer hover:brightness-110`}>
          <span className='textWrap'>{title}</span>
          <div className={`${isTodoHovered ? "relative" : "hidden"}`}>
            {completed ?
              <div className='flex items-start gap-1 text-[#f58a8a]'>
                <CloseIcon fontSize='small'/>
                <span>Unmark as done!</span>
              </div>
              :
              <div className='flex items-start gap-1 text-[#b5b5b5]'>
                <DoneIcon fontSize='small'/>
                <span>Mark as done!</span>
              </div>
            }
          </div>
        </div>
        <button title='Delete todo' onClick={handleDelete} className='hover:text-[#f58a8a]'><DeleteIcon /></button>
      </div>
    </div>
  )
}
