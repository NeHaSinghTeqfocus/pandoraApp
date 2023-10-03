import { Box } from "@mui/material";
import React from "react";

const ExportToCsv = ({ data, filename, label }) => {
  const generateCSV = () => {
    const csvContent = data?.map((row) => row.join(",")).join("\n");
    return encodeURI(csvContent);
  };

  const handleDownload = () => {
    const csvData = generateCSV();
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename || "download.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Box display="flex" justifyContent="end">
      <button
        style={{
          marginTop: "5px",
          backgroundColor: "#85CE61",
          padding: "9px 15px",
          borderRadius: "20px",
          color: "#fff",
          border: "none",
        }}
        onClick={handleDownload}
      >
        {label || "Download CSV"}
      </button>
    </Box>
  );
};

export default ExportToCsv;
