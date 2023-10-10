import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function TodoItem(props) {
  return (
    <ListItem divider button>
      {props.completed && (
        <ListItemIcon>
          <CheckIcon color="success" />
        </ListItemIcon>
      )}
      <ListItemText primary={props.text} />
      {/* <Checkbox checked={props.completed} /> */}
    </ListItem>

    // <li>
    //   <span>V</span>
    //   <p>{props.text}</p>
    //   <span>x</span>
    // </li>
  );
}

export { TodoItem };
