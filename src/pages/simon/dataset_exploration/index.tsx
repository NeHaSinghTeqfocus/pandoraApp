import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataOverview from "./data_overview";
import Correlation from "./correlation";
import Hierarchical_clustering from "./hierarchical_clustering";
import PCA_Analysis from "./pca_analysis";
import T_SNE_Analysis from "./t_sne_analysis";
import UMAP_Analysis from "./umap_analysis";
import { Grid, Paper } from "@mui/material";
import PlotIcon from "@/icon/PlotGrowIcon";
import { styled } from "@mui/system";

const DatasetExploration = () => {
  const [value, setValue] = React.useState(0);
  const [animatePlotIcon, setAnimatePlotIcon] = React.useState(false);

  const [rotation, setRotation] = React.useState(360);
  const [opacity, setOpacity] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setRotation(280);
    setOpacity(0);
    setTimeout(() => {
      setRotation(360);
      setOpacity(1);
    }, 500);
    // setAnimatePlotIcon(true); // Trigger the animation
    // setTimeout(() => {
    //   // setAnimatePlotIcon(false); // Reset the animation after a delay (adjust timing as needed)
    // }, 500); // Delay should match the transition duration in CSS
  };
  const AnimatedPlotIcon = styled(PlotIcon)(({ theme }) => ({
    transition: "transform 0.5s ease-in",
  }));
  const iconSize = "20px !important";

  return (
    <>
      <Box
        width="100%"
        mt={4}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          // maxWidth: { xs: 320, sm: 480 },
          bgcolor: "#F5F7FA",
        }}
      >
        <Tabs
          sx={{
            padding: "1px 5px",
            "& .Mui-selected": {
              color: "#35224a !important",
              backgroundColor: "#fff",
              borderRightColor: "#DCDFE6",
              borderLeftColor: "#DCDFE6",
            },
          }}
          value={value}
          TabIndicatorProps={{
            style: { display: "none" },
          }}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            sx={{
              textTransform: "capitalize",
              flexDirection: "row",
              alignItems: "center",
            }}
            label={
              <React.Fragment>
                <CalendarMonthIcon sx={{ fontSize: iconSize }} />{" "}
                <span style={{ height: "14px" }}>Data overview</span>
              </React.Fragment>
            }
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              flexDirection: "row",
              alignItems: "center",
            }}
            label={
              <React.Fragment>
                <CalendarMonthIcon sx={{ fontSize: iconSize }} />{" "}
                <span style={{ height: "14px" }}>Correlation</span>
              </React.Fragment>
            }
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              flexDirection: "row",
              alignItems: "center",
            }}
            label={
              <React.Fragment>
                <CalendarMonthIcon sx={{ fontSize: iconSize }} />{" "}
                <span style={{ height: "14px" }}>Hierarchical clustering</span>
              </React.Fragment>
            }
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              flexDirection: "row",
              alignItems: "center",
            }}
            label={
              <React.Fragment>
                <CalendarMonthIcon sx={{ fontSize: iconSize }} />{" "}
                <span style={{ height: "14px" }}>PCA analysis</span>
              </React.Fragment>
            }
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              flexDirection: "row",
              alignItems: "center",
            }}
            label={
              <React.Fragment>
                <CalendarMonthIcon sx={{ fontSize: iconSize }} />{" "}
                <span style={{ height: "14px" }}>t-SNE analysis</span>
              </React.Fragment>
            }
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              flexDirection: "row",
              alignItems: "center",
            }}
            label={
              <React.Fragment>
                <CalendarMonthIcon sx={{ fontSize: iconSize }} />{" "}
                <span style={{ height: "14px" }}>UMAP analysis</span>
              </React.Fragment>
            }
          />
        </Tabs>
      </Box>
      <Grid container style={{ backgroundColor: "white" }}>
        <Grid item xs={12}>
          {value === 0 ? (
            <DataOverview
              rotation={rotation}
              setRotation={setRotation}
              opacity={opacity}
              setOpacity={setOpacity}
            />
          ) : value === 1 ? (
            <Correlation
              rotation={rotation}
              setRotation={setRotation}
              opacity={opacity}
              setOpacity={setOpacity}
            />
          ) : value === 2 ? (
            <Hierarchical_clustering
              rotation={rotation}
              setRotation={setRotation}
              opacity={opacity}
              setOpacity={setOpacity}
            />
          ) : value === 3 ? (
            <PCA_Analysis
              rotation={rotation}
              setRotation={setRotation}
              opacity={opacity}
              setOpacity={setOpacity}
            />
          ) : value === 4 ? (
            <T_SNE_Analysis
              rotation={rotation}
              setRotation={setRotation}
              opacity={opacity}
              setOpacity={setOpacity}
            />
          ) : value === 5 ? (
            <UMAP_Analysis
              rotation={rotation}
              setRotation={setRotation}
              opacity={opacity}
              setOpacity={setOpacity}
            />
          ) : null}
        </Grid>
        {/* <Grid bgcolor="#fff" mt={1} pl={15} item xs={8}>
          <AnimatedPlotIcon />
        </Grid> */}
      </Grid>
    </>
  );
};

export default DatasetExploration;
