import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import NativeSelect from "@mui/material/NativeSelect";

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CustomSelect = ({
  main_title,
  value,
  options,
  setValue,
  defaultValue = null,
  marginY,
}) => {
  // const theme = useTheme();

  const handleChange = (event) => {
    setValue(event.target.value);
    // const {
    //   target: { value },
    // } = event;
    // console.log(event.target.value);
    // setValue(event.target.value);
    // setPersonName(
    //   typeof event.target.value === "string"
    //     ? event.target.value.split(",")
    //     : event.target.value
    // );
    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );
    // onChange && onChange(personName);
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <Stack spacing={1} sx={{ width: 270 }} marginY={marginY}>
      <span style={{ fontSize: "14px" }}>{main_title}</span>
      <Select
        sx={{
          "& .MuiSelect-select": {
            padding: "5px 10px",
            width: "100%",
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value || options[defaultValue]}
        // label="Age"
        onChange={handleChange}
      >
        {options.map((name: any) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      {/* <Select
          sx={{
            "& .MuiSelect-select": {
              padding: "5px",
            },
          }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  label="Deletable"
                  onDelete={handleDelete}
                  key={value}
                  // label={value}
                />
              ))}{" "}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((name: any) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}{" "}
        </Select> */}
    </Stack>
  );
};

export default CustomSelect;
