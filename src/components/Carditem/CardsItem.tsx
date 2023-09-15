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
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button1: {
    backgroundColor: '#FFFFFF',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#70F3F3',
      color: '#3c52b2',
  }
},
button2: {
  backgroundColor: '#FFFFFF',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#DAE0E0',
    color: '#3c52b2',
}},
rtol: {
  direction: 'rtl',
}
})
export default function Cards() {
  const classes = useStyles()
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 4,
          ml: -3,
          mt: 3,
          width: 300,
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
            marginLeft:'20px'
          }}
        >
          <Button className={classes.button2}>
          <Image src={Task} alt="Task-icon" width={60} height={50} />
          </Button>
        </Box>
        <Box  sx={{marginLeft:'120px', marginTop:'30px'}}>
          <Typography variant="body2" fontWeight={700} color={'#999999'}>Tasks</Typography>
          <Typography variant="h6" className={classes.rtol} fontWeight={700} color={'#626262'}>5</Typography>
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
            marginLeft:'20px'
          }}
        >
          <Button className={classes.button2}>
          <Image src={Dataset} alt="Dataset-icon" width={40} height={40} />
          </Button>
        </Box>
        <Box  sx={{marginLeft:'120px', marginTop:'30px'}}>
          <Typography variant="body2" fontWeight={700} color={'#999999'}>Datasets</Typography>
          <Typography variant="h6" className={classes.rtol} fontWeight={700} color={'#626262'} >355</Typography>
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
            marginLeft:'20px'
          }}
        >
          <Button className={classes.button2}>
          <Image src={Gallery} alt="Gallery-icon" width={50} height={50} />
          </Button>
        </Box>
        <Box  sx={{marginLeft:'120px', marginTop:'30px'}}>
          <Typography variant="body2" fontWeight={700} color={'#999999'}>Models</Typography>
          <Typography variant="h6" className={classes.rtol} fontWeight={700} color={'#626262'}>247</Typography>
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
            marginLeft:'20px'
          }}
        >
          <Button className={classes.button2}>
          <Image src={Feature} alt="Feature-icon" width={40} height={40} />
          </Button>
        </Box>
        <Box  sx={{marginLeft:'120px', marginTop:'30px'}}>
          <Typography variant="body2" fontWeight={700} color={'#999999'}>Features</Typography>
          <Typography variant="h6" className={classes.rtol} fontWeight={700} color={'#626262'} >8,572</Typography>
        </Box>
      </Paper>

    </Box>
  );
}
