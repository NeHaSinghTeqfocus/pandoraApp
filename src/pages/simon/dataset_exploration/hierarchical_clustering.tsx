import React, { useState } from "react";
import CustomSelect from "@/components/Select/Select";
import { Box, Button, Grid } from "@mui/material";
import NewSelect from "@/components/Select/NewSelect";
import Counter from "@/components/Counter/Counter";
import Switch from "@/components/Switch/Switch";
import MyCheckbox from "@/components/MyCheckbox/Checkbox";
import CustomButton from "@/components/Button/Button";
import PlotIcon from "@/icon/PlotGrowIcon";

const hierarchical_clustering = ({ rotation, opacity }) => {
  const marginY = 3;

  const Columns = [{ title: "Outcome", records: 50 }];
  const rows_data = ["CD3", "CD4", "CD8", "naive CD4", "CM CD4", "EM CD4"];
  const scale_data = ["Row", "Column", "None"];
  const display_data = [
    { title: "Numbers", bool: false },
    { title: "Legends", bool: true },
    { title: "Rownames", bool: false },
    { title: "Colnames", bool: false },
  ];
  const cluster_dist_data = [
    "Correlation",
    "Eulidean",
    "Maximum",
    "Manhattan",
    "Canberra",
    "Binary",
    "Minkowski",
  ];
  const cluster_met_data = [
    "Single",
    "Complete",
    "Average",
    "mcquitty",
    "Median",
    "Centroid",
    "Ward.D2",
  ];
  const tree_ord_data = [
    "Tightest Cluster first",
    "Higher median value first",
    "Higher mean value first",
    "Lower median value first",
    "Original",
    "Reverse original",
  ];

  const [counter, setCounter] = useState(100);
  const [rowcounter, setRowCounter] = useState(25);
  const [removena, setRemoveNA] = useState(true);
  const [preprocess, setPreprocess] = useState(true);
  const [scale, setScale] = useState("");
  const [display, setDisplay] = useState([
    { title: "Numbers", bool: false },
    { title: "Legends", bool: true },
    { title: "Rownames", bool: false },
    { title: "Colnames", bool: false },
  ]);
  const [colnames, setColnames] = useState(9);
  const [rownames, setRownames] = useState(9);
  const [plotwidth, setPlotWidth] = useState(20);
  const [plotratio, setPlotRatio] = useState(0.8);
  const [clusterdist, setClusterDis] = useState("");
  const [clustermet, setClusterMet] = useState("");
  const [treeorder, setTreeOrder] = useState("");
  const [overallfont, setOverallFont] = useState(0.8);

  const [isPlotImage, setIsPlotImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <Grid p={2} container style={{ backgroundColor: "white" }}>
        <Grid item md={4} sm={4}>
          <NewSelect
            main_title="Columns"
            dropvalues={Columns}
            marginY={marginY}
          />
          <Counter
            main_title="First (n) columns"
            value={counter}
            setValue={setCounter}
            max={100}
            marginY={marginY}
          />
          <NewSelect
            main_title="Rows"
            dropvalues={rows_data}
            marginY={marginY}
          />
          <Counter
            main_title="First (n) rows"
            value={rowcounter}
            setValue={setRowCounter}
            max={100}
            marginY={marginY}
          />
          <MyCheckbox
            label="Remove NA?"
            value={removena}
            setValue={setRemoveNA}
            marginY={marginY}
          />
          <MyCheckbox
            label="Preprocess"
            value={preprocess}
            setValue={setPreprocess}
            marginY={marginY}
          />
          <CustomSelect
            main_title="Scale"
            options={scale_data}
            value={scale}
            setValue={setScale}
            defaultValue={0}
            marginY={marginY}
          />
          <span>Display</span>
          {display?.map((data, i) => (
            <MyCheckbox
              label={data.title}
              value={data.bool}
              setValue={data.bool}
              marginY={marginY}
              multiple={true}
            />
          ))}
          {/* <MyCheckbox
              multiple={true}
              list_data={display_data}
              label="Display"
              value={preprocess}
              setValue={setPreprocess}
              marginY={marginY}
            /> */}
          <Counter
            main_title="Colnames Size"
            value={colnames}
            setValue={setColnames}
            max={100}
            marginY={marginY}
          />
          <Counter
            main_title="Rownames Size"
            value={rownames}
            setValue={setRownames}
            max={100}
            marginY={marginY}
          />
          <Counter
            main_title="Plot width"
            value={plotwidth}
            setValue={setPlotWidth}
            max={100}
            marginY={marginY}
          />
          <Counter
            main_title="Plot Ratio (height / width)"
            value={plotratio}
            setValue={setPlotRatio}
            max={100}
            marginY={marginY}
          />
          <CustomSelect
            main_title="Clustering distance"
            options={cluster_dist_data}
            value={clusterdist}
            setValue={setClusterDis}
            defaultValue={0}
            marginY={marginY}
          />
          <CustomSelect
            main_title="Clustering method"
            options={cluster_met_data}
            value={clustermet}
            setValue={setClusterMet}
            defaultValue={0}
            marginY={marginY}
          />
          <CustomSelect
            main_title="Tree Ordering"
            options={tree_ord_data}
            value={treeorder}
            setValue={setTreeOrder}
            defaultValue={0}
            marginY={marginY}
          />
          <Counter
            main_title="Overall Font-Size"
            value={overallfont}
            setValue={setOverallFont}
            max={100}
            marginY={marginY}
          />
          <CustomButton />
        </Grid>
        <Grid item md={8} sm={8}>
          {isPlotImage ? (
            <Box>
              <Typography>
                The tableplot is a visualization method that is used to explore
                and analyze large datasets, is able to display the aggregated
                distribution patterns of a dozen of variables in one single
                figure.
              </Typography>
              <ExportToCsv
                data={csvData}
                filename="chart_data.csv"
                label="Download CSV"
              />

              <Card sx={{ marginTop: "15px", width: "100%", height: "500px" }}>
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <ChartComponent
                    grid={grid}
                    xAxis={xAxis}
                    yAxis={yAxis}
                    titles={titles}
                    series={series}
                    fontSize={fontsize}
                  />
                )}
              </Card>
            </Box>
          ) : (
            <PlotIcon rotation={rotation} opacity={opacity} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default hierarchical_clustering;
