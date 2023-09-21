import React, { useState } from "react";
import CustomSelect from "@/components/Select/Select";
import { Box, Button, Grid } from "@mui/material";
import NewSelect from "@/components/Select/NewSelect";
import Counter from "@/components/Counter/Counter";
import Switch from "@/components/Switch/Switch";
import MyCheckbox from "@/components/MyCheckbox/Checkbox";
import CustomButton from "@/components/Button/Button";

const T_SNE_Analysis = () => {
  const marginY = 3;

  const Columns = ["CD3", "CD4", "CD8", "naive CD4", "CM CD4", "EM CD4"];
  const excluded_data = ["CD3", "CD4", "CD8", "naive CD4", "CM CD4", "EM CD4"];
  const grouping_data = ["Outcome"];
  const cluster_algo_data = [
    "KNN graph and Louvain",
    "Hierarchical",
    "Mclust",
    "Density-based clustering",
  ];
  const theme_data = [
    "Gray",
    "Black&White",
    "Line Draw",
    "Light",
    "Dark",
    "Minimal",
    "Classic",
  ];
  const color_data = ["Red", "Blue", "Green", "Yellow"];

  const [counter, setCounter] = useState(1000);
  const [clusteralgo, setClusterAlgo] = useState("");
  const [knncluster, setKnnCluster] = useState(250);
  const [preprocess, setPreprocess] = useState(true);
  const [theme, setTheme] = useState("");
  const [color, setColor] = useState("");
  const [fontsize, setfontsize] = useState(12);
  const [ratio, setRatio] = useState(1);

  return (
    <Box>
      <Box justifyContent="center" m={2}>
        <NewSelect
          main_title="Columns"
          dropvalues={Columns}
          marginY={marginY}
        />
        <Counter
          main_title="First (n) columns"
          value={counter}
          setValue={setCounter}
          max={10000}
          marginY={marginY}
        />
        <NewSelect
          main_title="Exclude Columns"
          dropvalues={excluded_data}
          marginY={marginY}
        />
        <NewSelect
          main_title="Grouping Variables"
          dropvalues={grouping_data}
          marginY={marginY}
        />
        <CustomSelect
          main_title="Clustering Algoritam"
          options={cluster_algo_data}
          value={clusteralgo}
          setValue={setClusterAlgo}
          defaultValue={0}
          marginY={marginY}
        />
        <Counter
          main_title="KNN Cluster"
          value={knncluster}
          setValue={setKnnCluster}
          max={1000}
          marginY={marginY}
        />
        <Switch
          main_title="Preprocess"
          value={preprocess}
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
          setValue={setfontsize}
          max={100}
          marginY={marginY}
        />
        <Counter
          main_title="Ratio"
          value={ratio}
          setValue={setRatio}
          max={100}
          marginY={marginY}
        />

        <CustomButton />
      </Box>
    </Box>
  );
};

export default T_SNE_Analysis;
