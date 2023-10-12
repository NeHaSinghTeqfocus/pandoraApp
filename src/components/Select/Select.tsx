// @ts-nocheck
import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CustomSelect = ({
  main_title,
  value,
  options,
  setValue,
  onChange,
  defaultValue = null,
  marginY,
}) => {
  // const handleChange = (event) => {
  //   if (event.target) {
  //     setValue(event.target.value);
  //   }
  // };

  const handleDelete = () => {
    console.log("Delete");
  };

  return (
    <Stack spacing={1} sx={{ width: "200px" }} marginY={marginY}>
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
        value={value}
        // label="Age"
        onChange={onChange}
      >
        {options?.map((name: any) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default CustomSelect;
