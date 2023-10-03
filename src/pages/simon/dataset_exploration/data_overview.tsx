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

const DataOverview = ({ rotation, opacity }) => {
  const [sisa, setSisa] = useState([]);
  const [col, setCol] = useState([]);

  useEffect(() => {
    setSisa(JSON.parse(localStorage.getItem("sisa")));
    setCol(Object.keys(JSON.parse(localStorage.getItem("sisa"))[0]));
  }, []);

  const marginY = 3;

  const theme_data = ["Ten", "twenty", "thirty"];
  const color_data = ["black", "red", "blue", "green", "yellow"];

  const [selected, setSelected] = useState("");
  const [preproces, setPreprocess] = useState(true);
  const [theme, setTheme] = useState("");
  const [color, setColor] = useState(color_data[0]);
  const [counter, setCounter] = useState(0);
  const [fontsize, setFontSize] = useState(12);
  const [plotratio, setPlotRatio] = useState(1);
  const [isPlotImage, setIsPlotImage] = useState(false);
  const [imageURL, setImageURL] = useState("");
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

  const handlePlotImage = async () => {
    setIsLoading(true);
    setTitles([]);
    setxAxis([]);
    setyAxis([]);
    setGrid([]);
    setSeries([]);

    var col_data = {};
    var grid_val = [];
    var xaxis_val = [];
    var yaxis_val = [];
    var title_val = [];
    var series_val = [];
    for (var i = 0; i < selected.length; i++) {
      var records = sisa.map((ele) => parseFloat(ele[selected[i]]));
      var minimum = Math.min(...records);
      var maximum = Math.max(...records);
      var ans = divideArray(
        records,
        parseInt(records.length / 100),
        records.length
      );

      var age_summary = [];
      for (var t = 0; t < 100; t++) {
        var summary = {};
        summary = {
          start: Math.min(...ans[t]) - minimum,
          draw: Math.max(...ans[t]) / 2,
          min: Math.min(...ans[t]),
          max: Math.max(...ans[t]),
          mean: ans[t].reduce((acc, val) => acc + val, 0) / ans[t].length,
        };
        age_summary.push(summary);
      }
      col_data[selected[i]] = age_summary;

      var shift_left = (100 / selected.length).toFixed(2);

      title_val.push({
        text: selected[i],
        top: 0,
        left:
          i === 0
            ? shift_left / 2 - Math.round(selected[i].length / 2) + "%"
            : shift_left * i +
              shift_left / 2 -
              Math.round(selected[i].length / 2) +
              "%",
      });

      grid_val.push({
        show: "true",
        backgroundColor: "#F0F0F0",
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

      series_val.push(
        {
          type: "bar",
          color: "transparent",
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
          color: "#4494C3",
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
          color: "#195080",
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
          color: "#4494C3",
          stack: selected[i],
          xAxisIndex: i,
          yAxisIndex: i,
          // label: {
          //   show: true
          // },
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

    // setIsLoading(true);
    // try {
    //   const response = await fetch(
    //     "https://run.mocky.io/v3/d13707f7-0511-48df-9fa7-05d025c2b31c"
    //   );
    //   if (response.ok) {
    //     const data = await response.json();
    //     setImageURL(data.image_png);
    //     setIsPlotImage(true);
    //   } else {
    //     console.error("Failed to fetch image URL");
    //   }
    // } catch (error) {
    //   console.error("Error fetching image URL:", error);
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
        <Grid item md={4} sm={4}>
          <NewSelect
            main_title="Columns"
            dropvalues={col}
            marginY={marginY}
            setSelectCol={setSelected}
          />
          <Counter
            main_title="First (n) columns"
            value={counter}
            setValue={setCounter}
            max={sisa?.length}
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
          <CustomButton
            onClick={() => {
              setTitles([]);
              setxAxis([]);
              setyAxis([]);
              setGrid([]);
              setSeries([]);
              handlePlotImage();
            }}
          />
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
                    color={color}
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
