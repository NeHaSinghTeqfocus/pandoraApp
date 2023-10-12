// @ts-nocheck
import React from "react";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

const CustomPagination = (count, page) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 1;

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <Typography variant="body1">Total 5</Typography>
      <Pagination
        sx={{
          "& .MuiButtonBase-root": {
            borderRadius: "2px",
            height: "25px",
          },
          "& .css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
            {
              backgroundColor: "black",
            },
          "& .MuiPaginationItem-page": {
            color: "white",
          },
        }}
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
      />
    </div>
  );
};

export default CustomPagination;
