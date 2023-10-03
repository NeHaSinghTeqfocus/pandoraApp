import React from "react";
import { Button, useTheme } from "@mui/material";

// Define a TypeScript interface for the props
interface CustomButtonProps {
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  fontSize = "12px",
  color = "white",
  backgroundColor = "#F78989",
  borderRadius = "50px",
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        fontSize,
        color,
        backgroundColor,
        borderRadius,
        "&:hover": {
          backgroundColor,
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      Plot Image
    </Button>
  );
};

export default CustomButton;
