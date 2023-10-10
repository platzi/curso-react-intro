import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useState } from "react";

function TodoSearch() {
  const [search, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
        value={search}
        onChange={handleChange}
      />
    </Box>
  );
}

export { TodoSearch };
