import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

function TodoSearch(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <TextField
        label="Task"
        variant="outlined"
        value={props.searchValue}
        onChange={props.update}
      />
    </Box>
  );
}

export { TodoSearch };
