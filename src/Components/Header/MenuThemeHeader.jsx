import {
  FormControl,
  FormControlLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  useColorScheme,
} from "@mui/material";

const MenuThemeHeader = ({ anchorElChild, openChild, handleCloseChild }) => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <>
      <Menu
        anchorEl={anchorElChild}
        open={openChild}
        onClose={handleCloseChild} // Dòng này giữ nguyên, để đóng khi bấm ra ngoài
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          ml: -17,
        }}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={mode}
            onChange={handleChange}
          >
            <MenuItem>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="light"
              />
            </MenuItem>
            <MenuItem>
              <FormControlLabel value="dark" control={<Radio />} label="dark" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                value="system"
                control={<Radio />}
                label="system"
              />
            </MenuItem>
          </RadioGroup>
        </FormControl>
      </Menu>
    </>
  );
};

export default MenuThemeHeader;
