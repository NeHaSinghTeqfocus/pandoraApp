import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

interface CustomTextFieldProps {
  label: string;

  placeholder?: string;
  width?: string;
  height?: string;
  value?: string;
  defaultValue?:any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFFFFF",

      borderRadius: "4px",
    },

    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },

    "& .MuiFormLabel-root": {
      fontSize: "13px",
    },
  },
});

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,

  placeholder,

  width,

  height,

  value,

  defaultValue,

  onChange,
}) => {
  const classes = useStyles(); // Use makeStyles from @mui/styles

  const inputStyle: React.CSSProperties = {
    width: width || "100%", // Default width to 100%

    height: height || "32px",

    lineHeight: "32px",

    borderRadius: "4px",

    fontSize: "13px", // Set font size for input text

    backgroundColor: "#FFFFFF",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "13px", // Set font size for label
  };

  return (
    <TextField
      className={classes.root}
      label={label}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      InputProps={{ style: inputStyle }}
      InputLabelProps={{ style: labelStyle }}
    />
  );
};

export default CustomTextField;
