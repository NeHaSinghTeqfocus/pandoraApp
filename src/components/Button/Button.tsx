import { Button, useTheme } from "@mui/material";

const CustomButton = () => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        fontSize: "12px",
        color: "white",
        backgroundColor: "#F78989",
        borderRadius: "50px",
        "&:hover": {
          backgroundColor: "#F78989",
        },
      }}
      variant="contained"
    >
      Plot Image
    </Button>
  );
};

export default CustomButton;
