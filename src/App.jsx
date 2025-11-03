import { useColorScheme } from "@mui/material/styles";
import {
  Button,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import Header from "./Components/Header";
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
      <Header />
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "light" ? "Turn dark" : "Turn light"}
        </Button>
        <Box sx={{ maxWidth: "150px" }}>
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
        </Box>
      </Box>
    </>
  );
}

export default App;
