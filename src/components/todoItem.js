import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({id, title, completed}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex items-center px-3 py-1 gap-2 bg-[#444444] rounded-lg">
          <div><DoneIcon /></div>
          <span>{title}</span>
        </div>
        <div><DeleteIcon /></div>
      </div>
    </div>
  )
}
