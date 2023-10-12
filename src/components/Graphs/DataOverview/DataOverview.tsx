// @ts-nocheck
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const ChartComponent = ({
  grid,
  titles,
  xAxis,
  yAxis,
  series,
  fontSize,
  // color,
}) => {
  const [options, setOptions] = useState({
    title: titles ? titles : [],
    xAxis: xAxis
      ? xAxis.map((axis) => ({
          ...axis,
          axisLabel: {
            ...axis.axisLabel,
            fontSize: fontSize, // Set the font size for x-axis labels
          },
        }))
      : [],
    yAxis: yAxis
      ? yAxis.map((axis) => ({
          ...axis,
          axisLabel: {
            ...axis.axisLabel,
            fontSize: fontSize, // Set the font size for y-axis labels
          },
        }))
      : [],
    grid: grid ? grid : [],
    series: series ? series : [],
  });

  useEffect(() => {
    setOptions({
      title: titles ? titles : [],
      xAxis: xAxis
        ? xAxis.map((axis) => ({
            ...axis,
            axisLabel: {
              ...axis.axisLabel,
              fontSize: fontSize,
            },
          }))
        : [],
      yAxis: yAxis
        ? yAxis.map((axis) => ({
            ...axis,
            axisLabel: {
              ...axis.axisLabel,
              fontSize: fontSize,
            },
          }))
        : [],
      grid: grid ? grid : [],
      series: series ? series : [], // Use the updated series with the selected color
    });
  }, [grid, titles, xAxis, yAxis, series, fontSize]);

  return (
    <div id="main" style={{ height: "100%" }}>
      {/* <ReactECharts option={options} style={{ height: "400px" }} /> */}
      {grid.length === options.grid.length ? (
        <ReactECharts
          echarts={echarts}
          option={options}
          style={{ height: "100%" }}
          opts={{ renderer: "canvas" }}
        />
      ) : null}
    </div>
  );
};

export default ChartComponent;
