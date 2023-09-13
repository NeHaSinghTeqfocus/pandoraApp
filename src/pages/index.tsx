// pages/index.tsx

import React, { useState } from "react";
import DataGrid from "@/components/DataGrid/DataGrid";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Checkbox, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GetAppIcon from "@mui/icons-material/GetApp";
import DeleteIcon from "@mui/icons-material/Delete";
import LoopOutlinedIcon from "@mui/icons-material//LoopOutlined";
import styles from "./page.module.css";

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
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    []
  );
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleMoreInfo = (id: number) => {};

  const handleDownload = (id: number) => {};

  const handleDelete = (id: number) => {};

  const handleCheckboxChange = (id: number) => {
    if (id === selectedRow) {
      setSelectedRow(null); // Deselect the row if the same checkbox is clicked again
    } else {
      setSelectedRow(id); // Select the clicked row
    }
  };
  const columns: GridColDef[] = [
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
      align: "left",
      headerAlign: "left",
      flex: 0.5,
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
              color: " #67C23A",
              background: "#f0f9eb",
              borderColor: "#c2e7b0",
              borderRadius: "20px",
              border: "1px solid #DCDFE6",
            }}
          />
          <GetAppIcon
            onClick={() => handleDownload(params.row.id)}
            style={{
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
              marginRight: "8px", // This creates a square background
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
    <Box sx={{ width: "80vw" }}>
      <Box sx={{ width: "100%", height: "400px", mt: 4 }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          hideFooter
          autoHeight
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Home;
