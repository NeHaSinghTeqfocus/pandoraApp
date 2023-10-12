// @ts-nocheck
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
import CorrelationTab from "@/components/Graphs/Correlation/CorrelationTab";
import ConfusionMatrixPlot from "@/components/Graphs/Correlation/CorrelationTab";

const Correlation = ({ rotation, opacity }) => {
  const dataMap = [
    "IDIndex",
    "Hospitalized",
    "Age",
    "Gender",
    "Height",
    "Weight",
    "CircArm",
    "CircWaist",
    "SympTemp",
    "SympFever7Days",
    "SympHead",
    "SympNausea",
    "SympMuscle",
    "SympRash",
    "SympBleed",
    "SympRhin",
    "SympVomit",
    "SympDrowsy",
    "SympCough",
    "SympAbs",
    "SympDiarrhea",
    "SympOrbital",
    "Tourniquet",
    "HistAllergies",
    "HistHyper",
    "HistAsthma",
    "HistCancer",
    "HistDiab",
    "HistDengHouse4Wk",
    "HistDeng",
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
    "Pie",
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
  const [tempSelectedColumns, setTempSelectedColumns] = useState([]);
  const [counter, setCounter] = useState(100);
  const [correl, setCorrel] = useState("");
  const [naAction, setNaAction] = useState("");
  const [plotmethod, setPlotMethod] = useState(plot_data[1]);
  const [plottype, setPlotType] = useState("");
  const [recorrel, setReCorrel] = useState("");
  const [textsize, setTextSize] = useState(8);
  const [significancetest, setSignificanceTest] = useState(false);
  const [confidenceinterval, setConfidenceInterval] = useState(false);

  const [isPlotImage, setIsPlotImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [symbol, setSymbol] = useState("circle");
  const [tempTextSize, setTempTextSize] = useState(textsize);
  const plotMethodToSymbol = {
    Mixed: "rect",
    Circle: "circle",
    Square: "rect",
    Ellipse: "path://M0,50A50,25,0,1,0,100,50A50,25,0,1,0,0,50Z",
    // Ellipse: "path://M 0 0 A 45 25 0 1 0 90 0 A 45 25 0 1 0 0 0",
    Number: "4",
    Shade: "diamond",
    Color: "triangle",
    Pie: "path://M14 18v-14c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14c0-2.251-0.532-4.378-1.476-6.262l-12.524 6.262zM28.524 7.738c-2.299-4.588-7.043-7.738-12.524-7.738v14l12.524-6.262z",
  };

  const handlePlotImage = () => {
    setIsPlotImage(!isPlotImage);
    setTextSize(tempTextSize);
    setCol(tempSelectedColumns);
  };
  const handlePlotMethodChange = (event) => {
    const selectedPlotMethod = event.target.value;
    setPlotMethod(selectedPlotMethod);
    const updatedSymbol = plotMethodToSymbol[selectedPlotMethod];
    setSymbol(updatedSymbol);
  };
  const handleTextSizeChange = (event) => {
    const newSize = parseFloat(event.target.value);
    setTempTextSize(newSize);
  };
  const handleColumnSelectionChange = (selectedCols) => {
    // Update the temporary selected columns whenever the selection changes
    setTempSelectedColumns(selectedCols);
  };

  const confusionMatrix = [
    [
      30, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 30, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 30, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 30, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 30, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 30, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 30, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 30, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 30, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 30, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 30, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 30, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 30, 5, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 30, 8, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 30, 2, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 30, 14, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 30, 10, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 30, 9, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 30, 5, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 30, 15, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 30, 2,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 30,
      3, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3,
      30, 5, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5,
      30, 8, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5,
      8, 30, 2, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5,
      8, 2, 30, 14, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5,
      8, 2, 14, 30, 10, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5,
      8, 2, 14, 10, 30, 9, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5,
      8, 2, 14, 10, 9, 30, 5,
    ],
    [
      2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5, 8, 2, 14, 10, 9, 5, 15, 2, 3, 5,
      8, 2, 14, 10, 9, 5, 30,
    ],
  ];

  return (
    <Box>
      <Grid p={1} spacing={0} container style={{ backgroundColor: "white" }}>
        <Grid item md={3} sm={3}>
          <NewSelect
            main_title="Columns"
            dropvalues={dataMap}
            marginY={marginY}
            setSelectCol={handleColumnSelectionChange}
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
            onChange={() => {}}
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
            onChange={handlePlotMethodChange}
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
            isTextSize
            main_title="Text Size"
            value={tempTextSize} // Use tempTextSize as the value
            setValue={setTempTextSize} // Update tempTextSize when the value changes
            min={8}
            max={20}
            marginY={marginY}
            onChange={handleTextSizeChange} // Handle text size change
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
          <CustomButton onClick={handlePlotImage} />
        </Grid>
        <Grid item md={9} sm={9}>
          {isPlotImage ? (
            <Box>
              {/* <ExportToCsv
                data={csvData}
                filename="chart_data.csv"
                label="Download CSV"
              /> */}

              <Card
                sx={{
                  marginRight: "300px",
                  background: "transparent",
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  // marginBottom: "200px",
                }}
                elevation={0}
              >
                <ConfusionMatrixPlot
                  fontSize={textsize}
                  confusionMatrix={confusionMatrix}
                  symbol={symbol}
                  dataMap={dataMap}
                  columnNames={col}
                />
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
