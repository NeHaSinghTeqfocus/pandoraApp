import React, { useState } from "react";
import CustomSelect from "@/components/Select/Select";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import NewSelect from "@/components/Select/NewSelect";
import Counter from "@/components/Counter/Counter";
import Switch from "@/components/Switch/Switch";
import MyCheckbox from "@/components/MyCheckbox/Checkbox";
import CustomButton from "@/components/Button/Button";
import PlotIcon from "@/icon/PlotGrowIcon";
import ExportToCsv from "@/components/ExportToCsv/ExportToCsv";
import ChartComponent from "@/components/Graphs/DataOverview/DataOverview";

const Correlation = ({ rotation, opacity }) => {
  const topFiles = [
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
  const [col, setCol] = useState([]);
  const [counter, setCounter] = useState(100);
  const [correl, setCorrel] = useState("");
  const [naAction, setNaAction] = useState("");
  const [plotmethod, setPlotMethod] = useState("");
  const [plottype, setPlotType] = useState("");
  const [recorrel, setReCorrel] = useState("");
  const [textsize, setTextSize] = useState(0.4);
  const [significancetest, setSignificanceTest] = useState(false);
  const [confidenceinterval, setConfidenceInterval] = useState(false);

  const [isPlotImage, setIsPlotImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <Grid p={2} container style={{ backgroundColor: "white" }}>
        <Grid item md={4} sm={4}>
          <NewSelect
            main_title="Columns"
            dropvalues={col}
            marginY={marginY}
            setSelectCol={setCol}
          />
          <Counter
            main_title="First (n) columns"
            value={counter}
            setValue={setCounter}
            max={100}
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
              {/* <ExportToCsv
                data={csvData}
                filename="chart_data.csv"
                label="Download CSV"
              /> */}

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

export default Correlation;
