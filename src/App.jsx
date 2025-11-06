import { useColorScheme } from "@mui/material/styles";
import {
  Button,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import { mockData } from "./data/mock-data";
import Board from "./Components/Boards/Board";
function App() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <>
      <Board board={mockData.board}></Board>

      {/* <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {mode === "light" ? "Turn dark" : "Turn light"}
      </Button> */}
      {/* <Box sx={{ maxWidth: "150px" }}>
          <FormControl fullWidth>
            <InputLabel id="mode-select-label">Theme Mode</InputLabel>
            <Select
              labelId="mode-select-label"
              id="mode-select"
              value={mode}
              label="Theme Mode"
              onChange={handleChange}
              sx={{ height: "40px" }}
            >
              <MenuItem value="system">System</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
    </>
  );
}

export default App;
