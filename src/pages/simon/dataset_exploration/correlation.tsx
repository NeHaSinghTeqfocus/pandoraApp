import React, { useState } from "react";
import CustomSelect from "@/components/Select/Select";
import { Box, Button, Grid } from "@mui/material";
import NewSelect from "@/components/Select/NewSelect";
import Counter from "@/components/Counter/Counter";
import Switch from "@/components/Switch/Switch";
import MyCheckbox from "@/components/MyCheckbox/Checkbox";
import CustomButton from "@/components/Button/Button";

const Correlation = () => {
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

  const correlation_data = ["Pearson", "Kendall", "Spearman"];
  const na_action_data = [
    "everything",
    "all.obs",
    "complete.obs",
    "na.or.complete",
    "pairwise.complete.obs",
  ];
  const plot_data = [
    "Mixed",
    "Circle",
    "Square",
    "Ellipse",
    "Number",
    "Shade",
    "Color",
  ];
  const plot_type_data = ["Full", "Lower", "Upper"];
  const reorder_coor_data = [
    "Original",
    "Angular order of the eigenvectors",
    "First principle component",
    "Hierarchical clustering",
    "Alphabetical",
  ];

  const [counter, setCounter] = useState(100);
  const [correl, setCorrel] = useState("");
  const [naAction, setNaAction] = useState("");
  const [plotmethod, setPlotMethod] = useState("");
  const [plottype, setPlotType] = useState("");
  const [recorrel, setReCorrel] = useState("");
  const [textsize, setTextSize] = useState(0.4);
  const [significancetest, setSignificanceTest] = useState(false);
  const [confidenceinterval, setConfidenceInterval] = useState(false);

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
          //   max={100}
          marginY={marginY}
        />
        <CustomSelect
          main_title="Correlation Method"
          options={correlation_data}
          value={correl}
          setValue={setCorrel}
          defaultValue={0}
          marginY={marginY}
        />
        <CustomSelect
          main_title="NA Action"
          options={na_action_data}
          value={naAction}
          setValue={setNaAction}
          defaultValue={0}
          marginY={marginY}
        />
        <CustomSelect
          main_title="Plot method"
          options={plot_data}
          value={plotmethod}
          setValue={setPlotMethod}
          defaultValue={0}
          marginY={marginY}
        />
        <CustomSelect
          main_title="Plot Type"
          options={plot_type_data}
          value={plottype}
          setValue={setPlotType}
          defaultValue={0}
          marginY={marginY}
        />
        <CustomSelect
          main_title="Reorder Correlation"
          options={reorder_coor_data}
          value={recorrel}
          setValue={setReCorrel}
          defaultValue={0}
          marginY={marginY}
        />
        <Counter
          main_title="Text Size"
          value={textsize}
          setValue={setTextSize}
          max={100}
          marginY={marginY}
        />
        <MyCheckbox
          label="Significance Text"
          value={significancetest}
          setValue={setSignificanceTest}
          marginY={marginY}
        />
        <MyCheckbox
          label="Confidence Interval"
          value={confidenceinterval}
          setValue={setConfidenceInterval}
          marginY={marginY}
        />
        <CustomButton />
      </Box>
    </Box>
  );
};

export default Correlation;
