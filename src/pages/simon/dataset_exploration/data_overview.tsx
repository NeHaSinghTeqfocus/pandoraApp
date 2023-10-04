import React, { useEffect, useState } from "react";
import CustomSelect from "@/components/Select/Select";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import NewSelect from "@/components/Select/NewSelect";
import Counter from "@/components/Counter/Counter";
import Switch from "@/components/Switch/Switch";
import CustomButton from "@/components/Button/Button";
import ChartComponent from "@/components/Graphs/DataOverview/DataOverview";
import ExportToCsv from "@/components/ExportToCsv/ExportToCsv";
import PlotIcon from "@/icon/PlotGrowIcon";
import colorData from "../../../utils/colorData.json";
import themeColors from "../../../utils/themeColor.json";

const DataOverview = ({ rotation, opacity }) => {
  const [sisa, setSisa] = useState([]);
  const [col, setCol] = useState([]);

  useEffect(() => {
    setSisa(JSON.parse(localStorage.getItem("sisa")));
    setCol(Object.keys(JSON.parse(localStorage.getItem("sisa"))[0]));
  }, []);

  const marginY = 3;

  const color_data = colorData.map((colors) => colors.value);
  const theme_data = themeColors.map((colors) => colors.name);
  // Create a function to map color name to hexValue
  useEffect(() => {
    const mapping = {};
    colorData.forEach((colors) => {
      mapping[colors.value] = colors.color;
    });
    setColorDataMapping(mapping);
  }, []);
  useEffect(() => {
    const mapping = {};
    themeColors.forEach((colors) => {
      mapping[colors.name] = colors.color;
    });
    setThemeDataMapping(mapping);
  }, []);
  const [selectedColorName, setSelectedColorName] = useState(color_data[0]);
  const [colorDataMapping, setColorDataMapping] = useState({});
  const [theme, setTheme] = useState(theme_data[0]);
  const [themeDataMapping, setThemeDataMapping] = useState({});
  const [selected, setSelected] = useState([]);
  const [preproces, setPreprocess] = useState(true);
  const [counter, setCounter] = useState(5);
  const [fontsize, setFontSize] = useState(12);
  const [plotratio, setPlotRatio] = useState(1);
  const [isPlotImage, setIsPlotImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [titles, setTitles] = useState([]);
  const [xAxis, setxAxis] = useState([]);
  const [yAxis, setyAxis] = useState([]);
  const [grid, setGrid] = useState([]);
  const [series, setSeries] = useState([]);

  const divideArray = (nums, K, N) => {
    let ans = [];
    let temp = [];

    for (let i = 0; i < N; i++) {
      temp.push(nums[i]);

      if ((i + 1) % K === 0) {
        ans.push([...temp]);
        temp.length = 0;
      }
    }

    // If the last group doesn't have enough elements, add 0s to it
    if (temp.length !== 0) {
      while (temp.length < K) {
        temp.push(0);
      }
      ans.push([...temp]);
    }

    return ans;
  };
  useEffect(() => {
    console.log("in useEffect", selected);
    const updatedSelected = selected;
  }, [selected]);
  const handlePlotImage = () => {
    // console.log(selected, "select");
    // console.log(col, "col");
    // console.log(selected.length, "selected length");
    // console.log(col.length, "col length");

    if (selected.length == 0 && col.length > 0) {
      setSelected(col);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setTitles([]);
    setxAxis([]);
    setyAxis([]);
    setGrid([]);
    setSeries([]);

    const columnsToPlot = selected.length > 0 ? selected : col;

    // try {
    const col_data = {};
    const grid_val = [];
    const xaxis_val = [];
    const yaxis_val = [];
    const title_val = [];
    const series_val = [];
    // const columnsToPlot = selected.length === 0 ? col : selected;
    for (let i = 0; i < columnsToPlot.length; i++) {
      // Assuming sisa and selected are defined elsewhere in your code
      const records = sisa.map((ele) => parseFloat(ele[columnsToPlot[i]]));
      const minimum = Math.min(...records);
      const maximum = Math.max(...records);
      const ans = divideArray(
        records,
        parseInt(records.length / 100),
        records.length
      );

      const age_summary = [];
      for (let t = 0; t < 100; t++) {
        const summary = {
          start: Math.min(...ans[t]) - minimum,
          draw: Math.max(...ans[t]) / 2,
          min: Math.min(...ans[t]),
          max: Math.max(...ans[t]),
          mean: ans[t].reduce((acc, val) => acc + val, 0) / ans[t].length,
        };
        age_summary.push(summary);
      }
      col_data[selected[i]] = age_summary;

      const shift_left = (100 / selected.length).toFixed(2);

      title_val.push({
        text: selected[i],
        top: 0,
        left:
          i === 0
            ? `${shift_left / 2 - Math.round(selected[i].length / 2)}%`
            : `${
                shift_left * i +
                shift_left / 2 -
                Math.round(selected[i].length / 2)
              }%`,
        textStyle: {
          fontSize: 12,
          fontWeight: 600, // Adjust the font size as needed
        },
      });

      grid_val.push({
        show: "true",
        backgroundColor: themeDataMapping[theme],
        top: 30,
        width: String(shift_left + "%"),
        bottom: 0,
        left: i === 0 ? 10 : String(shift_left * i + "%"),
        containLabel: true,
      });

      xaxis_val.push({ type: "value", gridIndex: i });
      yaxis_val.push(
        i === 0
          ? { type: "category", gridIndex: i }
          : { type: "category", gridIndex: i, show: false }
      );

      // Pushing multiple series objects for each selected item
      series_val.push(
        {
          type: "bar",
          color: colorDataMapping[selectedColorName],
          stack: selected[i],
          xAxisIndex: i,
          yAxisIndex: i,
          label: {
            // show: true
          },
          emphasis: {
            focus: "series",
          },
          data: col_data[selected[i]]?.map((ele) => ele["start"]),
        },
        {
          type: "bar",
          color: colorDataMapping[selectedColorName],
          stack: selected[i],
          xAxisIndex: i,
          yAxisIndex: i,
          emphasis: {
            focus: "series",
          },
          data: col_data[selected[i]]?.map((ele) => ele["draw"]),
        },
        {
          type: "bar",
          color: colorDataMapping[selectedColorName],
          stack: selected[i],
          xAxisIndex: i,
          yAxisIndex: i,
          emphasis: {
            focus: "series",
          },
          data: col_data[selected[i]]?.map((ele) => (maximum / 200).toFixed(2)),
        },
        {
          type: "bar",
          color: colorDataMapping[selectedColorName],
          stack: selected[i],
          xAxisIndex: i,
          yAxisIndex: i,
          emphasis: {
            focus: "series",
          },
          data: col_data[selected[i]]?.map((ele) => ele["draw"]),
        }
      );
    }

    setTitles(title_val);
    setxAxis(xaxis_val);
    setyAxis(yaxis_val);
    setGrid(grid_val);
    setSeries(series_val);
    setIsPlotImage(true);
    setIsLoading(false);
    // } catch (error) {
    //   console.error("Error:", error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const prepareDataForCSV = () => {
    const csvData = [];

    // Header row (column names)
    csvData.push(col);

    // Data rows
    series.forEach((s) => {
      const rowData = s.data.map((item) => [item.name, item.value]);
      csvData.push(...rowData);
    });

    return csvData;
  };

  // Call this function to get the data for CSV export
  const csvData = prepareDataForCSV();

  return (
    <Box>
      <Grid p={2} container style={{ backgroundColor: "white" }}>
        <Grid item md={3} sm={3}>
          <NewSelect
            main_title="Columns"
            dropvalues={col}
            marginY={marginY}
            setSelectCol={setSelected}
          />
          <Counter
            isNColumn
            main_title="First (n) columns"
            value={counter}
            setValue={setCounter}
            max={sisa?.length}
            min={5}
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
              width: "200px",
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
            setValue={(colorName) => {
              setTheme(colorName);
            }}
            defaultValue={0}
            marginY={marginY}
          />
          <CustomSelect
            main_title="Color"
            options={color_data}
            value={selectedColorName}
            setValue={(colorName) => {
              setSelectedColorName(colorName);
            }}
            marginY={marginY}
          />
          <Counter
            main_title="Font Size"
            value={fontsize}
            setValue={setFontSize}
            min={8}
            max={24}
            marginY={marginY}
          />
          <Counter
            main_title="Plot Ratio"
            value={plotratio}
            setValue={setPlotRatio}
            max={100}
            marginY={marginY}
          />
          {/* <CustomButton
            onClick={() => {
              setTitles([]);
              setxAxis([]);
              setyAxis([]);
              setGrid([]);
              setSeries([]);
              handlePlotImage();
            }}
          /> */}
          <CustomButton onClick={handlePlotImage} />
        </Grid>

        <Grid item md={9} sm={9} style={{ overflow: "auto" }}>
          {isPlotImage ? (
            <Box style={{ width: "100%", maxWidth: "100%" }}>
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

              <Card
                sx={{
                  marginTop: "15px",
                  width: "100%",
                  maxWidth: "100%",
                  height: "500px",
                }}
              >
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
                    // color={colorDataMapping[selectedColorName]}
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

export default DataOverview;
