import React, { useState } from "react";
import MyApp from "@/components/FileUpload/FileUpload";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DocIcon from "../../../public/DocIcon.png";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextField from "@/components/Textfield/Textfield";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from '@mui/icons-material/Delete';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import On from '../../../public/On.png';
import Off from '../../../public/Off.png';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  height: "auto",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "3px",
  boxShadow: 24,
  p: 2,
};
const style2 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "auto",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

const styleSpan = {
  width: 50,
  height: "auto",
  bgcolor: "background.paper",
  transform: "translate(-50%, -50%)",
  border: "0px solid #000",
  borderRadius: "2px",
};

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  // createData("Eclair", 262, 16.0, 24, 6.0),
  // createData("Cupcake", 305, 3.7, 67, 4.3),
  // createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const data = [
  {
    id: 1,
    name: "John Doe",
    created: "2023-09-13",
    process: "Processing",
    status: "10",
    extraction: "Yes",
    sparsity: "50%",
    resamples: 10,
    models_processed: 20,
    successful_models: 15,
    action: "Edit/Delete",
  },

  {
    id: 2,
    name: "Jane Smith",
    created: "2023-09-14",
    process: "Pending",
    status: "50",
    extraction: "No",
    sparsity: "30%",
    resamples: 5,
    models_processed: 10,
    successful_models: 7,
    action: "Edit/Delete",
  },
];

const About = () => {
  const FileArr = [
    {
      name: "abcd.pdf",
      size: "5.56 KB",
    },
    {
      name: "xyz.pdf",
      size: "8 KB",
    },
    {
      name: "mno.pdf",
      size: "12.2 KB",
    },
    {
      name: "sisa.pdf",
      size: "10 KB",
    },
  ];

  const [openDlt, setOpenDlt] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState(data);
  const [age, setAge] = React.useState("");
  const [ArrData, setArrData] = useState(FileArr);
  const [ascending, setAscending] = useState(true);
  //
  const [sortingOption, setSortingOption] = useState(""); // Initialize with an empty string
  const [sortedFileArr, setSortedFileArr] = useState(FileArr);

  const router = useRouter();
  const currentUrl = router.asPath;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDltOpen = () => setOpenDlt(true);
  const handleDltClose = () => setOpenDlt(false);

  const handleSearchQuery = (e: any) => {
    setSearchQuery(e.target.value);

    if (e.target.value === "") {
      setSearchQuery("");
      setTableData(data);
    }
  };
  const handleSearch = () => {
    // Filter the data based on the search query
    const filteredData = data.filter((row) =>
      row.id.toString().includes(searchQuery)
    );
    // Update the table data with the filtered data
    setTableData(filteredData);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

const handleSorting = () => {
  if (sortingOption === "name") {
    // Sort by name in ascending order
    const sortedByName = [...FileArr].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedFileArr(sortedByName);
  } else if (sortingOption === "size") {
    // Sort by size in ascending order (assuming size is a string)
    const sortedBySize = [...FileArr].sort((a, b) =>
      parseInt(a.size) - parseInt(b.size)
    );
    setSortedFileArr(sortedBySize);
  }
};

  return (
    <>
      <Box sx={{ padding: "0px 10px 20px 10px" }}>
      <Button
          onClick={() => {
            router.push("/");
          }}
          sx={{
            height: "41px",
            width: "120px",
            marginTop:'15px',
            backgroundColor: "#35224a",
            color: "white",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#5D4E6E",
            },
          }}
        >
          {/* {currentUrl} */} Dashboard
        </Button>
        <Button
          onClick={() => {
            router.push("/workspace");
          }}
          sx={{
            marginLeft:'10px',
            marginTop:'15px',
            height: "41px",
            width: "120px",
            backgroundColor: "#35224a",
            color: "white",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#5D4E6E",
            },
          }}
        >
          {currentUrl}
        </Button>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            gap: "1050px",
            minWidth: "350px",
          }}
        >
          <Button
            onClick={handleOpen}
            sx={{
              height: "25px",
              width: "125px",
              backgroundColor: "#35224a",
              color: "white",
              fontSize: "11px",
              borderRadius: "12px",
              textTransform: "none",
              gap:'8px',
              ":hover": {
                backgroundColor: "#5D4E6E",
              },
            }}
          >
            <HelpOutlineIcon sx={{ height:'18px', width:'18px'}} />
            Public Import
          </Button>
          <Button
            // onClick={handleDelete}
            onClick={handleDltOpen}
            sx={{
              height: "25px",
              width: "115px",
              backgroundColor: "#35224a",
              color: "white",
              fontSize: "11px",
              borderRadius: "12px",
              textTransform: "none",
              gap:'8px',
              ":hover": {
                backgroundColor: "#5D4E6E",
              },
            }}
          >
            <DeleteIcon sx={{ height:'15px', width:'15px'}} />
            Delete all
          </Button>
        </Box>
        <Box sx={{ marginTop: "15px" }}>
          <MyApp />
        </Box>
        <Box>
          {/* <Button >Open modal</Button> */}
          <Modal
            open={openDlt}
            onClose={handleDltClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style2}>
              <Typography variant="h6">Warning</Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <PriorityHighIcon />
                <Typography id="body2" variant="subtitle2" component="h2">
                  This will delete all files. Do you wish to proceed?
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginLeft: "250px",
                  marginTop: "15px",
                  gap: "10px",
                }}
              >
                <Button
                  onClick={handleDltClose}
                  sx={{
                    textTransform: "lowercase",
                    border: "1px solid #000",
                    ":hover": {
                      backgroundColor: "#DADADA ",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  sx={{
                    border: "1px solid #000",
                    backgroundColor: "black",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#3E3E3E",
                    },
                  }}
                >
                  Ok
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
        <Box>
          {/* <Button >Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ display: "flex", gap: "320px" }}>
                <Typography id="body2" variant="h6" component="h2">
                  Please choose dataset you wish to import
                </Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon sx={{ color: "gray" }} />
                </IconButton>
              </Box>
              {/* adding texfield, search box export button */}
              <Box
                mt={1}
                p={3}
                display="flex"
                width="95%"
                justifyContent="flex-start"
                gap={2}
              >
                <CustomTextField
                  label=""
                  placeholder="Search by keyword"
                  width="300px !important"
                  value={searchQuery}
                  onChange={handleSearchQuery}
                />
                <Button
                  sx={{
                    backgroundColor: "#35224a",
                    padding: "5px 15px ",
                    fontSize: "12px",
                    textTransform: "capitalize",
                    ":hover": {
                      backgroundColor: "#5D4E6E",
                    },
                  }}
                  onClick={handleSearch}
                  variant="contained"
                  startIcon={<SearchOutlinedIcon fontSize="small" />}
                >
                  Search
                </Button>

                <Button
                  sx={{
                    backgroundColor: "#35224a",
                    padding: "5px 15px",
                    fontSize: "12px",
                    textTransform: "capitalize",
                    ":hover": {
                      backgroundColor: "#5D4E6E",
                    },
                  }}
                  variant="contained"
                  startIcon={<DownloadOutlinedIcon fontSize="small" />}
                >
                  Export table
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginLeft: "0px",
                  marginTop: "15px",
                  gap: "10px",
                }}
              >
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: "770px" }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow sx={{ fontSize: "8px" }}>
                        <TableCell
                          sx={{
                            fontSize: "10px",
                            color: "gray",
                            fontWeight: "700",
                          }}
                        >
                          ID
                          <Box sx={{direction:'flex', flexDirection:'column'}} >
                          <IconButton >
                            <ArrowDropUpIcon />
                          </IconButton>
                          <IconButton>
                           <ArrowDropDownIcon />
                          </IconButton></Box>
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: "10px",
                            color: "gray",
                            fontWeight: "700",
                          }}
                        >
                          Title
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: "10px",
                            color: "gray",
                            fontWeight: "700",
                          }}
                        >
                          Rows
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: "10px",
                            color: "gray",
                            fontWeight: "700",
                          }}
                        >
                          Columns
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: "10px",
                            color: "gray",
                            fontWeight: "700",
                          }}
                        >
                          Sparsity
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: "10px",
                            color: "gray",
                            fontWeight: "700",
                          }}
                        >
                          Updated
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            fontSize: "10px",
                            color: "gray",
                            fontWeight: "700",
                          }}
                        >
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell sx={{fontSize:'12px'}} component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell sx={{fontSize:'12px'}} align="right">{row.calories}</TableCell>
                          <TableCell align="right" sx={{fontSize:'12px'}}>{row.fat}</TableCell>
                          <TableCell align="right" sx={{fontSize:'12px'}}>{row.carbs}</TableCell>
                          <TableCell align="right" sx={{fontSize:'12px'}}>{row.protein}</TableCell>
                          <TableCell align="right" sx={{fontSize:'12px'}}>{row.carbs}</TableCell>
                          <TableCell align="right" sx={{fontSize:'12px'}}>{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
                <Typography variant="caption" sx={{ marginTop: "12px" }}>
                  Table 0
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    sx={{ height: "28px", width: "100px", fontSize: "12px" }}
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem
                      value=""
                      sx={{ fontSize: "12px", height: "34px" }}
                    >
                      <em>None</em>
                    </MenuItem>
                    <MenuItem
                      value={10}
                      sx={{ fontSize: "12px", height: "34px" }}
                    >
                      5/page
                    </MenuItem>
                    <MenuItem
                      value={20}
                      sx={{ fontSize: "12px", height: "34px" }}
                    >
                      25/page
                    </MenuItem>
                    <MenuItem
                      value={30}
                      sx={{ fontSize: "12px", height: "34px" }}
                    >
                      50page
                    </MenuItem>
                  </Select>
                </FormControl>
                <IconButton>
                  <ArrowBackIosIcon sx={{ height: "15px", width: "20px" }} />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "12px",
                    backgroundColor: "#35224a",
                    color: "white",
                    height: "25px",
                    width: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  1
                </Typography>
                <IconButton>
                  <ArrowForwardIosIcon sx={{ height: "15px", width: "20px" }} />
                </IconButton>
                <Typography variant="caption" sx={{ marginTop: "12px" }}>
                  Go to
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <CustomTextField
                    label=""
                    width="45px"
                    height="30px"
                    defaultValue="1"
                  />
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
          <FormControl sx={{ marginTop:'20px', minWidth: 120 }}>
                  <Select
                    sx={{ height: "28px", width: "100px", fontSize: "14px" }}
                    value={sortingOption}
                    onChange={(event) => {
                      setSortingOption(event.target.value);
                      handleSorting(); // Call the sorting function when the option changes
                    }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem
                      value=""
                      sx={{ fontSize: "14px", height: "38px" }}
                    >Select
                    </MenuItem>
                    <MenuItem
                      value="name"
                      sx={{ fontSize: "14px", height: "38px" }}
                    >Size
                    </MenuItem>
                    <MenuItem
                      value="size"
                      sx={{ fontSize: "14px", height: "38px" }}
                    >
                      Name
                    </MenuItem>
                  </Select>
                </FormControl>
                <Typography variant="body1" sx={{marginTop:'20px', marginRight:'9px'}}>DSCE</Typography>
                <IconButton size="small"><Image src={On} alt="toggle-on" height={50} width={50} /></IconButton>
                <Typography variant="body1" sx={{marginTop:'20px', marginLeft:'6px'}}>ASC</Typography>

        </Box>
        <Box sx={{backgroundColor:'white', mt:3, width:'1270px'}}>
          {sortedFileArr.map((file, index) => (
            <Button key={index} sx={{ textTransform: "lowercase" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "white",
                    height: "20px",
                    width: "45px",
                    backgroundColor: "#F24773 ",
                    marginTop: "5px",
                    fontSize: "12px",
                    fontWeight:'700'
                  }}
                >
                  {file.size}
                </span>
                <Image src={DocIcon} alt="File-Icon" height={110} width={100} />
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  {file.name}
                </span>
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default About;
