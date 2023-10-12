// @ts-nocheck
import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";

const ConfusionMatrixPlot = ({
  confusionMatrix,
  symbol,
  fontSize,
  dataMap,
  columnNames,
}) => {
  const scatterData = [];
  for (let i = 0; i < confusionMatrix.length; i++) {
    for (let j = 0; j < confusionMatrix[i].length; j++) {
      const count = confusionMatrix[i][j];
      scatterData.push([j, i, count]);
      if (i === j) {
        const isTP = i === 0; // Assuming the first row represents TP and the second row represents TN
        const color = isTP ? "#00FF00" : "#0000FF"; // Green for TP, Blue for TN
        scatterData.push([j, i, count, color]);
      }
    }
  }

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 128) + 128; // Restrict red to 128-255 (lighter shades)
    const g = Math.floor(Math.random() * 128) + 128; // Restrict green to 128-255 (lighter shades)
    const b = Math.floor(Math.random() * 128) + 128; // Restrict blue to 128-255 (lighter shades)
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

  const [nonDiagonalColors, setNonDiagonalColors] = useState({});
  useEffect(() => {
    const newNonDiagonalColors = {};

    for (let i = 0; i < columnNames.length; i++) {
      for (let j = 0; j < columnNames.length; j++) {
        if (i !== j) {
          const key = `${i}-${j}`;
          if (!newNonDiagonalColors[key]) {
            newNonDiagonalColors[key] = getRandomColor();
          }
        }
      }
    }

    setNonDiagonalColors(newNonDiagonalColors);
  }, [columnNames]);

  // Loop through the columns to assign unique colors to non-diagonal elements
  for (let i = 0; i < dataMap.length; i++) {
    for (let j = 0; j < dataMap.length; j++) {
      if (i !== j) {
        const key = `${i}-${j}`;
        if (!nonDiagonalColors[key]) {
          nonDiagonalColors[key] = getRandomColor();
        }
      }
    }
  }
  const xAxisData = columnNames;
  const yAxisData = columnNames;
  // Define the options for the ECharts chart
  const options = {
    // title: {
    //   text: "Confusion Matrix (Scatter Plot)",
    //   left: "center",
    // },
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "cross",
      },

      position: "top",
      formatter: function (params) {
        const xAxisLabel = dataMap[params.value[0]];
        const yAxisLabel = dataMap[params.value[1]];
        const count = params.value[2];
        return `${xAxisLabel}<br /> ${yAxisLabel}<br />Count: ${count}`;
      },
    },
    grid: {
      show: false,
      left: "20",
      right: "2%",
      bottom: "1%",
      top: "10px",
      containLabel: true,
    },
    xAxis: {
      // axisLine: {
      //   show: false,
      // },

      type: "category",
      position: "top",
      data: columnNames.length === 0 ? dataMap : xAxisData,
      axisLabel: {
        interval: 0, // Display all labels
        rotate: -90, // Rotate labels to save space
        fontSize: fontSize || 8,
        formatter: function (value: any) {
          return value.replace("-", " "); // Replace hyphen (-) symbol with space
        },
      },
      splitLine: {
        show: false, // Hide the grid lines on the x-axis
      },
    },
    yAxis: {
      // axisLine: {
      //   show: false,
      // },
      type: "category",
      inverse: true,
      data: columnNames.length === 0 ? dataMap : yAxisData,
      axisLabel: {
        fontSize: fontSize || 8,
        formatter: (value: any) => value.replace("-", " "),
      },
      splitLine: {
        show: false, // Hide the grid lines on the x-axis
      },
    },
    visualMap: {
      show: true,

      type: "continuous", // or 'continuous' based on your needs
      min: 0, // Minimum value
      max: 30, // Maximum value
      dimension: 1, // Maximum value
      calculable: true, // Whether the visualMap is interactive
      inRange: {
        color: ["#053061", "#67001F", "#E6866A"],
      },
      // pieces: [
      //   { min: 0, max: 10 }, // True Negatives (TN)
      //   { min: 11, max: 20 }, // True Positives (TP)
      //   { min: 21, max: 30 }, // Custom range for other values
      // ],
      orient: "vertical", // Orientation (horizontal or vertical)
      right: -8, // Positioning
      bottom: 2,
      // top: "center",
      height: "70%",
      itemGap: "20px",
      itemHeight: "600px",
      itemWidth: "10px",
      text: ["30", "0"],
      textStyle: {
        rotate: -45,
        fontSize: 10, // Font size of the text labels
        color: "#000000", // Font color of the text labels
      },
      formatter: function (value) {
        // Return the value with two decimal places
        return value.toFixed(0);
      },
    },

    series: [
      {
        // name: "Confusion Matrix (Scatter Plot)",
        type: "scatter",
        data: scatterData,
        lineWidth: 0,
        // min: 2,
        // max: 4,
        symbol: symbol,
        symbolSize: function (val) {
          return Math.sqrt(val[2]) * 4; // Adjust the symbol size based on the count
        },
        symbolRotate: 45,
        itemStyle: {
          color: function (params) {
            // Check if the cell is part of the diagonal line
            if (params.value[0] === params.value[1]) {
              return "#053061"; // Set color for diagonal elements
            } else {
              // Assign random colors to non-diagonal elements
              const key = `${params.value[0]}-${params.value[1]}`;
              return nonDiagonalColors[key];
            }
          },
          opacity: function (params) {
            // Adjust opacity based on some condition
            // For example, make non-diagonal elements more transparent
            return params.value[0] === params.value[1] ? 1 : 0.5;
          },
        },
      },
    ],
  };

  return (
    <div
      style={{
        marginTop: "20px",
        width: "100%",
        height: "700px",
        position: "relative",
      }}
    >
      <ReactECharts style={{ height: "100%" }} option={options} />
    </div>
  );
};

export default ConfusionMatrixPlot;
