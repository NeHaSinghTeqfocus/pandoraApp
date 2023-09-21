import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Task from "../../../public/Task.png";
import Dataset from "../../../public/Dataset.png";
import Gallery from "../../../public/Gallery.png";
import Feature from "../../../public/Feature.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button1: {
    backgroundColor: "#FFFFFF",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#70F3F3",
      color: "#3c52b2",
    },
  },
  button2: {
    backgroundColor: "#FFFFFF",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#DAE0E0",
      color: "#3c52b2",
    },
  },
  rtol: {
    direction: "rtl",
  },
});
export default function Cards() {
  const classes = useStyles();

  // Define the total statistics
  const totalStats = {
    tasks: 5,
    datasets: 355,
    models: 247,
    features: 8572,
  };

  const [stats, setStats] = React.useState({
    tasks: 0,
    datasets: 0,
    models: 0,
    features: 0,
  });
  // Function to animate the stats
  const animateStats = () => {
    const animationDuration = 4000; // 2 seconds

    const intervalId = setInterval(() => {
      setStats((prevStats) => {
        const newStats = {};
        for (const key in totalStats) {
          newStats[key] =
            prevStats[key] + 1 <= totalStats[key]
              ? prevStats[key] + 1
              : totalStats[key];
        }
        return newStats;
      });
    }, animationDuration / (totalStats.tasks + totalStats.datasets + totalStats.models + totalStats.features));

    // Clear the interval when the animation is complete
    setTimeout(() => {
      clearInterval(intervalId);
    }, animationDuration);
  };

  React.useEffect(() => {
    animateStats();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          ml: 1.5,
          mt: 3,
          width: 290,
          height: 108,
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{ justifyContent: "flex-start", display: "flex" }}
      >
        <Box
          sx={{
            height: "60px",
            width: "60px",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        >
          <Button className={classes.button2}>
            <Image src={Task} alt="Task-icon" width={60} height={50} />
          </Button>
        </Box>
        <Box sx={{ marginLeft: "120px", marginTop: "30px" }}>
          <Typography variant="body2" fontWeight={700} color={"#999999"}>
            Tasks
          </Typography>
          <Typography
            variant="h6"
            className={classes.rtol}
            fontWeight={700}
            color={"#626262"}
          >
            {stats.tasks}
          </Typography>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{ justifyContent: "flex-start", display: "flex" }}
      >
        <Box
          sx={{
            height: "60px",
            width: "60px",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        >
          <Button className={classes.button2}>
            <Image src={Dataset} alt="Dataset-icon" width={40} height={40} />
          </Button>
        </Box>
        <Box sx={{ marginLeft: "120px", marginTop: "30px" }}>
          <Typography variant="body2" fontWeight={700} color={"#999999"}>
            Datasets
          </Typography>
          <Typography
            variant="h6"
            className={classes.rtol}
            fontWeight={700}
            color={"#626262"}
          >
            {stats.datasets}
          </Typography>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{ justifyContent: "flex-start", display: "flex" }}
      >
        <Box
          sx={{
            height: "60px",
            width: "60px",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        >
          <Button className={classes.button2}>
            <Image src={Gallery} alt="Gallery-icon" width={50} height={50} />
          </Button>
        </Box>
        <Box sx={{ marginLeft: "120px", marginTop: "30px" }}>
          <Typography variant="body2" fontWeight={700} color={"#999999"}>
            Models
          </Typography>
          <Typography
            variant="h6"
            className={classes.rtol}
            fontWeight={700}
            color={"#626262"}
          >
            {stats.models}
          </Typography>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{ justifyContent: "flex-start", display: "flex" }}
      >
        <Box
          sx={{
            height: "60px",
            width: "60px",
            marginTop: "25px",
            marginLeft: "20px",
          }}
        >
          <Button className={classes.button2}>
            <Image src={Feature} alt="Feature-icon" width={40} height={40} />
          </Button>
        </Box>
        <Box sx={{ marginLeft: "120px", marginTop: "30px" }}>
          <Typography variant="body2" fontWeight={700} color={"#999999"}>
            Features
          </Typography>
          <Typography
            variant="h6"
            className={classes.rtol}
            fontWeight={700}
            color={"#626262"}
          >
            {stats.features}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
