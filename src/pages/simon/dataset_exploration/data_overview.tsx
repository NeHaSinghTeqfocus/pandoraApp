import React, { useState } from "react";
import CustomSelect from "@/components/Select/Select";
import { Box, Button, Grid } from "@mui/material";
import NewSelect from "@/components/Select/NewSelect";
import Counter from "@/components/Counter/Counter";
import Switch from "@/components/Switch/Switch";
import CustomButton from "@/components/Button/Button";

const DataOverview = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];

  const marginY = 3;

  const theme_data = ["Ten", "twenty", "thirty"];
  const color_data = ["Red", "Blue", "Green", "Yellow"];

  const [preproces, setPreprocess] = useState(true);
  const [theme, setTheme] = useState("");
  const [color, setColor] = useState("");
  const [counter, setCounter] = useState(0);
  const [fontsize, setFontSize] = useState(12);
  const [plotratio, setPlotRatio] = useState(1);

  return (
    <Box>
      <Box justifyContent="center" m={2}>
        <NewSelect
          main_title="Columns"
          dropvalues={top100Films}
          marginY={marginY}
        />
        <Counter
          main_title="First (n) columns"
          value={counter}
          setValue={setCounter}
          max={100}
          marginY={marginY}
        />
        <Switch
          main_title="Preprocess"
          value={preproces}
          setValue={setPreprocess}
          marginY={marginY}
        />
        <hr
          style={{
            width: "270px",
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.2)",
            border: 0,
            margin: "20px 0px",
          }}
        />
        <CustomSelect
          main_title="Theme"
          options={theme_data}
          value={theme}
          setValue={setTheme}
          defaultValue={0}
          marginY={marginY}
        />
        <CustomSelect
          main_title="Color"
          options={color_data}
          value={color}
          setValue={setColor}
          defaultValue={0}
          marginY={marginY}
        />
        <Counter
          main_title="Font Size"
          value={fontsize}
          setValue={setFontSize}
          max={100}
          marginY={marginY}
        />
        <Counter
          main_title="Plot Ratio"
          value={plotratio}
          setValue={setPlotRatio}
          max={100}
          marginY={marginY}
        />
        <CustomButton />
      </Box>
      {/* <Grid container style={{ backgroundColor: "white" }}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={8}>
          <Box>Data Table</Box>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default DataOverview;
