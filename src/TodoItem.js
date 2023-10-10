import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <ListItem divider button onClick={() => onToggle(todo.id)}>
      {todo.completed && (
        <ListItemIcon>
          <CheckIcon color="success" />
        </ListItemIcon>
      )}
      <ListItemText primary={todo.text} />
      <CloseIcon
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      />
    </ListItem>
  );
}

export { TodoItem };
