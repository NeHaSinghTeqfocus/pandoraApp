// pages/index.tsx
import Cards from "@/components/Carditem/CardsItem";
import React, { useEffect, useState } from "react";
import DataGrid from "@/components/DataGrid/DataGrid";
import {
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GetAppIcon from "@mui/icons-material/GetApp";
import DeleteIcon from "@mui/icons-material/Delete";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import CustomTextField from "@/components/Textfield/Textfield";

import styles from "./page.module.css";
import CustomDropdown from "@/components/Dropdown/Dropdown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";

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
  {
    id: 3,
    name: "Bob Johnson",
    created: "2023-09-15",
    process: "Completed",
    status: "80",
    extraction: "Yes",
    sparsity: "20%",
    resamples: 15,
    models_processed: 30,
    successful_models: 25,
    action: "View/Delete",
  },
  {
    id: 4,
    name: "Bob Johnson",
    created: "2023-09-15",
    process: "Completed",
    status: "60",
    extraction: "Yes",
    sparsity: "20%",
    resamples: 15,
    models_processed: 30,
    successful_models: 25,
    action: "View/Delete",
  },
];

const Home: React.FC = () => {
  const [tableData, setTableData] = useState(data);
  const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [editedValues, setEditedValues] = useState<{ [key: number]: string }>(
    {}
  );
  const [sorting, setSorting] = useState({
    column: "id", // Default sorting column (you can change it)
    order: "asc", // Default sorting order (asc or desc)
  });
  const [selectedSortOrder, setSelectedSortOrder] = useState("Ascending");
  const [searchQuery, setSearchQuery] = useState("");
  const [allRowsSelected, setAllRowsSelected] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setAllRowsSelected(selectionModel.length === tableData.length);
  }, [selectionModel, tableData]);
  const handleSortChange = (column: string) => {
    const newSortOrder =
      selectedSortOrder === "Ascending" ? "Descending" : "Ascending";

    // Update the selected sort order state
    setSelectedSortOrder(newSortOrder);

    // Sort the data based on the selected column and order
    const sortedData = [...tableData].sort((a, b) => {
      if (newSortOrder === "Ascending") {
        return (a[column] as number) - (b[column] as number);
      } else {
        return (b[column] as number) - (a[column] as number);
      }
    });

    // Update the table data
    setTableData(sortedData);
  };

  const handleSearch = () => {
    // Filter the data based on the search query
    const filteredData = data.filter((row) =>
      row.id.toString().includes(searchQuery)
    );

    // Update the table data with the filtered data
    setTableData(filteredData);
  };
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setSearchQuery("");
      setTableData(data);
    }
  };

  const handleMoreInfo = (id: number) => {};

  const handleDownload = (id: number) => {};

  const handleDelete = (id: number) => {};

  const handleCheckboxChange = (id: GridRowId) => {
    if (selectionModel.includes(id)) {
      // Unselect the checkbox
      setSelectionModel((prevSelection) =>
        prevSelection.filter((selectedId) => selectedId !== id)
      );
    } else {
      // Select only the clicked checkbox
      setSelectionModel([id]);
    }
    setSelectedRowId(id);
    setOpen(true);
  };
  const handleEdit = (id: number, initialValue: string) => {
    console.log(id, initialValue);
    setIsEditing(id);
    setEditedValues((prevEditedValues) => ({
      ...prevEditedValues,
      [id]: initialValue,
    }));
  };

  const handleSave = (id: number) => {
    setIsEditing(null);
    const updatedData = tableData.map((row) =>
      row.id === id ? { ...row, name: editedValues[id] || row.name } : row
    );
    setTableData(updatedData);
  };

  const handleSelectionChange = (newSelection: GridRowId[]) => {
    setSelectionModel(newSelection);
  };
  const CustomHeaderCheckbox: React.FC = () => {
    const indeterminate =
      selectionModel.length > 0 && selectionModel.length < tableData.length;
    const checked = selectionModel.length === tableData.length;

    const handleSelectAllClick = () => {
      if (checked || indeterminate) {
        // Clear the selection
        setSelectionModel([]);
        setOpen(false);
      }
    };

    return (
      <Checkbox
        sx={{
          marginLeft: "3px",
          "& .MuiSvgIcon-root": {
            width: "18px",
            height: "18px",
            borderRadius: "4px",
            color: checked || indeterminate ? "black" : "#E0E0E0",
          },
        }}
        checked={checked}
        indeterminate={indeterminate}
        onChange={handleSelectAllClick}
        inputProps={{ "aria-label": "Select All" }}
        disableRipple
        disabled={!checked && !indeterminate}
      />
    );
  };

  const columns: GridColDef[] = [
    {
      field: "selection",
      headerName: "Select",
      renderHeader: () => <CustomHeaderCheckbox />,
      sortable: false,
      flex: 0.3,
      renderCell: (params: GridValueGetterParams) => {
        const rowId = params.row.id as GridRowId;
        return (
          <Checkbox
            sx={{
              // Change the color to black
              "& .MuiSvgIcon-root": {
                width: "18px",
                height: "18px",
                borderRadius: "4px",
                borderColor: "white",
              },
            }}
            checked={selectionModel.includes(rowId)}
            onChange={() => handleCheckboxChange(rowId)}
            inputProps={{ "aria-label": "Select" }}
            disableRipple
          />
        );
      },
    },
    {
      field: "id",
      headerName: "ID",
      width: 90,
      align: "left",
      flex: 0.05,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      renderCell: (params) => (
        <div>
          {isEditing === params.row.id ? (
            <div>
              <TextField
                sx={{
                  width: "120px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                }}
                variant="outlined"
                size="small"
                value={editedValues[params.row.id] || params.value}
                onChange={(e) =>
                  setEditedValues((prevEditedValues) => ({
                    ...prevEditedValues,
                    [params.row.id]: e.target.value,
                  }))
                }
                onBlur={() => handleSave(params.row.id)}
                // onKeyDown={(e) => handleSave(params.row.id, e.target.value)}
              />
              <IconButton
                sx={{
                  marginLeft: "12px",
                  border: "1px solid grey",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
                color="primary"
                onClick={() => handleEdit(params.row.id, params.value)}
              >
                <CheckIcon sx={{ color: "grey" }} fontSize="small" />
              </IconButton>
            </div>
          ) : (
            <div>
              {params.value}
              <IconButton
                sx={{
                  marginLeft: "12px",
                  border: "1px solid grey",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
                color="primary"
                onClick={() => handleEdit(params.row.id, params.value)}
              >
                <EditOutlinedIcon sx={{ color: "grey" }} fontSize="small" />
              </IconButton>
            </div>
          )}
        </div>
      ),
    },
    {
      field: "created",
      headerName: "Created",
      align: "center",
      headerAlign: "left",
      flex: 0.5,
    },
    {
      field: "process",
      headerName: "Process",
      align: "center",
      headerAlign: "left",
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      align: "center",
      headerAlign: "left",
      flex: 1,
      renderCell: (params) => (
        <Typography
          sx={{
            backgroundColor: "#f0f9eb",
            border: "1px solid #e1f3d8",
            color: "#67c23a",
            height: "24px",
            padding: "0 8px",
            lineHeight: "22px",
            fontSize: "12px",
            borderRadius: "4px",
            fontFamily: "Arial",
          }}
        >{`Completed (${params.value}%)`}</Typography>
      ),
    },
    {
      field: "extraction",
      headerName: "Extraction",
      align: "center",
      headerAlign: "left",
      flex: 0.5,
    },
    {
      field: "sparsity",
      headerName: "Sparsity(%)",
      align: "center",
      headerAlign: "left",
      flex: 0.5,
      headerClassName: "header-cell",
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckCircleIcon
            style={{ fontSize: "15px", color: "#82C23A", marginRight: "4px" }}
          />
          {`${params.value}`}
        </div>
      ),
    },
    {
      field: "resamples",
      headerName: "Resamples",
      align: "center",
      headerAlign: "left",
      flex: 0.5,
      headerClassName: "header-cell",
    },
    {
      field: "models_processed",
      headerName: "Models Processed",
      align: "center",
      headerAlign: "left",
      flex: 0.5,
      headerClassName: "header-cell",
    },
    {
      field: "successful_models",
      headerName: "Successful Processed",
      align: "center",
      headerAlign: "left",
      flex: 0.5,
      headerClassName: "header-cell",
    },
    {
      field: "action",
      headerName: "Operations",
      align: "center",
      headerAlign: "left",
      flex: 1.5,
      renderCell: (params) => (
        <div>
          <InfoOutlinedIcon
            onClick={() => handleMoreInfo(params.row.id)}
            style={{
              cursor: "pointer",
              fontSize: "12px",
              padding: "7px 15px",
              marginRight: "8px",
              color: "#67C23A",
              background: "#f0f9eb",
              borderColor: "#c2e7b0",
              borderRadius: "20px",
              border: "1px solid #DCDFE6",
            }}
            sx={{
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          />
          <DownloadOutlinedIcon
            onClick={() => handleDownload(params.row.id)}
            style={{
              cursor: "pointer",
              marginRight: "8px",
              fontSize: "12px",
              borderColor: "#67C23A",
              backgroundColor: "#67C23A", // Change to your desired background color
              padding: "7px 15px", // Adjust padding as needed
              borderRadius: "3px",
              color: "#fff", // This creates a square background
            }}
          />
          <DeleteIcon
            onClick={() => handleDelete(params.row.id)}
            style={{
              fontSize: "12px",
              borderColor: "#F56C6C",
              backgroundColor: "#F56C6C", // Change to your desired background color
              padding: "7px 15px", // Adjust padding as needed
              borderRadius: "3px",
              color: "#fff",
              marginRight: "8px",
              cursor: "pointer", // This creates a square background
            }}
          />
          <LoopOutlinedIcon
            onClick={() => handleMoreInfo(params.row.id)}
            style={{
              cursor: "pointer",
              fontSize: "12px",
              padding: "7px 15px",
              color: "#f0c78a",
              background: "#fdf6ec",
              borderColor: "#faecd8",
              borderRadius: "20px",
              border: "1px solid #DCDFE6",
            }}
          />
        </div>
      ),
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%" }}
    >
      {open && selectedRowId && (
        <Alert
          icon={false}
          sx={{
            minHeight: "34px",
            position: "relative",
            top: "-58px",
            left: "432px",
            backgroundColor: "#E3006E",
            color: "white",
            borderRadius: 0,
            border: 0,
            padding: "3px 12px",
            overflowX: "hidden",
            "& .MuiAlert-icon": {
              display: "none", // Hide the icon
            },
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleCheckboxChange(selectedRowId);
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {`Queue ID: ${selectedRowId}`}
        </Alert>
      )}
      <Box
        sx={{ direction: "flex", width: "95%", justifyContent: "flex-start" }}
      >
        <Cards />
      </Box>
      <Box
        mt={4}
        display="flex"
        width="95%"
        justifyContent="flex-start"
        gap={2}
      >
        <CustomTextField
          label=""
          placeholder="Please Enter task ID"
          width="300px !important"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        <CustomDropdown
          label=""
          options={["Ascending", "Descending"]}
          placeholder="Select an option"
          width="200px"
          value={selectedSortOrder} // Use selectedSortOrder as the value
          onChange={(value) => {
            setSelectedSortOrder(value); // Update the selectedSortOrder state
            handleSortChange(sorting.column);
          }}
        />
        <Button
          sx={{
            backgroundColor: "#5D4E6E",
            padding: "5px 15px",
            fontSize: "12px",
            textTransform: "capitalize",
            ":hover": {
              backgroundColor: "#35224a",
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
            backgroundColor: "#5D4E6E",
            padding: "5px 15px",
            fontSize: "12px",
            textTransform: "capitalize",
            ":hover": {
              backgroundColor: "#35224a",
            },
          }}
          variant="contained"
          startIcon={<DownloadOutlinedIcon fontSize="small" />}
        >
          Export table
        </Button>
      </Box>
      <Box sx={{ width: "95%", height: "400px", mt: 4 }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          hideFooter
          autoHeight
          checkboxSelection={false}
          selectionModel={selectionModel} // Pass the selectionModel
          onSelectionModelChange={handleSelectionChange}
        />
        <Box mt={4}>Total {tableData.length}</Box>
      </Box>
    </Box>
  );
};

export default Home;
