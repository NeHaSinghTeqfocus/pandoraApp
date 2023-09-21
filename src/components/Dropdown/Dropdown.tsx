import React from "react";

import FormControl from "@mui/material/FormControl";

import FormLabel from "@mui/material/FormLabel";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import { makeStyles } from "@mui/styles";

interface CustomDropdownProps {
  label: string;

  options: string[];

  placeholder?: string;

  width?: string;

  height?: string;

  value?: string;

  onChange: (value: string) => void;
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFFFFF",

      borderRadius: "4px",
    },

    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "black !important", // Add !important to override conflicting styles
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black !important", // Add !important to override conflicting styles
    },

    "& .MuiFormLabel-root": {
      fontSize: "13px",
    },

    "& .MuiOutlinedInput-input": {
      padding: "8px", // Adjust input padding
    },

    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent !important", // Remove blue background on focus
    },

    "& .MuiMenu-paper": {
      top: "auto !important", // Remove top positioning

      bottom: "100% !important", // Position the menu above the select
    },
  },
});

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,

  options,

  placeholder,

  width,

  height,

  value,

  onChange,
}) => {
  const classes = useStyles();

  const selectStyle: React.CSSProperties = {
    width: width || "100%", // Default width to 100%

    height: height || "32px",

    lineHeight: "32px",

    borderRadius: "4px",

    fontSize: "13px", // Set font size for dropdown

    backgroundColor: "#FFFFFF",
  };

  return (
    <FormControl variant="outlined" style={{ width: selectStyle.width }}>
      <FormLabel
        htmlFor={label}
        style={{
          fontSize: "13px", // Set font size for label
        }}
      >
        {label}
      </FormLabel>

      <Select
        className={classes.root}
        label={label}
        placeholder={placeholder}
        style={selectStyle}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
