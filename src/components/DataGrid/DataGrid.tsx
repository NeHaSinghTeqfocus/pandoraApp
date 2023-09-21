import * as React from "react";
import {
  GridCellModes,
  GridCellModesModel,
  GridCellParams,
  DataGrid as MuiDataGrid,
} from "@mui/x-data-grid";
import Colors from "../../../src/utils/color";
import { styled } from "@mui/material/styles";
import { DataGridType } from "../DataGrid/DataGrid.type";
import Stack from "@mui/material/Stack";
import { useCallback, useState } from "react";
import "./CustomDataGrid.css"; // Import a CSS file for custom styling
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import LeftArrow from '../../../public/LeftArrow.png'
import RightArrow from '../../../public/RightArrow.png'

export const StyledDataGrid = styled(MuiDataGrid)(({ theme }) => ({
  background: "#FFFFFF", // Set the background color to white
  borderRadius: 0,
  border: "1px solid #e0e0e0 !important",

  "& .MuiDataGrid-main": {
    overflow: "unset",
  },
  "& .MuiDataGrid-columnHeaders": {
    position: "sticky",
    top: -1,
    zIndex: 1100,
    background: "#FFFFFF",
  },
  "& .MuiDataGrid-colCell, & .MuiDataGrid-cell": {
    borderRight: "1px solid #e0e0e0", // Adjust the color and style as needed
  },
  "& .MuiDataGrid-virtualScroller": {
    marginTop: "0!important",
    overflowX: "hidden",
  },
  "& .MuiDataGrid-checkboxInput": {
    transform: "scale(0.65)", // Adjust the scale value as needed
  },
}));

const DataGrid = ({
  rows = [],
  columns,
  sx,
  pageSizeOptions,
  disableColumnFilter,
  experimentalFeatures,
  rowHeight = 45,
  paginationMode,
  editMode,
  onSortModelChange,
  sortModel,
  hideFooter = true,
  columnVisibilityModel,
  columnGroupingModel,
  processRowUpdate,
  autoHeight,
  disableRowSelectionOnClick,
  checkboxSelection,
  initialState,
  name,
  headerHeight,

  onRowSelectionModelChange = () => {},
}: DataGridType) => {
  const [cellModesModel, setCellModesModel] = useState<GridCellModesModel>({});

  const handleCellClick = (params: any, event: React.MouseEvent) => {
    if (params.field !== "__check__") {
      event.stopPropagation();
    }
    handleCellEdit(params, event);
  };

  const handleCellEdit = React.useCallback(
    (params: GridCellParams, event: React.MouseEvent) => {
      if (!params.isEditable) {
        return;
      }

      // Ignore portal
      if (!event.currentTarget.contains(event.target as Element)) {
        return;
      }

      setCellModesModel((prevModel) => {
        return {
          // Revert the mode of the other cells from other rows
          ...Object.keys(prevModel).reduce(
            (acc, id) => ({
              ...acc,
              [id]: Object.keys(prevModel[id]).reduce(
                (acc2, field) => ({
                  ...acc2,
                  [field]: { mode: GridCellModes.View },
                }),
                {}
              ),
            }),
            {}
          ),
          [params.id]: {
            // Revert the mode of other cells in the same row
            ...Object.keys(prevModel[params.id] || {}).reduce(
              (acc, field) => ({
                ...acc,
                [field]: { mode: GridCellModes.View },
              }),
              {}
            ),
            [params.field]: { mode: GridCellModes.Edit },
          },
        };
      });
    },
    []
  );

  const handleCellModesModelChange = React.useCallback(
    (newModel: GridCellModesModel) => {
      setCellModesModel(newModel);
    },
    []
  );

  return (
    <>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        sx={{
          ...sx,
          height: rows.length ? "auto" : 200,
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#909399",
            fontSize: "11.5px",
            fontWeight: 500,
            fontFamily: "Poppins",
            lineHeight: "18px",
            // textWrap: "wrap",
            textAlign: "center",
          },
          "& .MuiDataGrid-cellContent": {
            // color: Colors.primary,
            fontWeight: 400,
            lineHeight: "21px",
            fontFamily: "Poppins",
            fontSize: "11px",
            height: 20,
          },

          "& .MuiDataGrid-row:hover": { backgroundColor: Colors.lightGrey },
          "& .MuiDataGrid-withBorderColor": {
            // borderColor: Colors.secondaryGrey,
            ...(headerHeight && { maxHeight: `${headerHeight}px !important` }),
          },
          "& .MuiDataGrid-columnHeader": {
            // background: Colors.backGroundTableColor,
          },

          "& .MuiDataGrid-menuIcon": {
            display: "none",
          },
          "& .MuiDataGrid-cell--withRenderer": {
            color: Colors.primary,
            fontSize: "12px",
          },
          borderColor: Colors.secondaryGrey,
          // borderTopLeftRadius: "10px",
          // borderTopRightRadius: "10px",
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .Mui-selected": {
            background: "#ECECFD !important",
          },
          "& .MuiCheckbox-root, .Mui-checked": {
            color: "#e0e0e0",
            height: 18,
            width: 18,
          },
          "& .Mui-checked": {
            color: `black !important`,
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: "space-between",
            borderColor: "#FFF !important",
            marginLeft: "-2px",
          },
          "& .MuiDataGrid-cell--editable": {
            border: `1px solid ${Colors.primaryGrey}`,
            borderRadius: 1,
            maxHeight: "26px !important",
            minHeight: "26px !important",
            marginTop: "4px",
            fontSize: "12px",
            "& .MuiInputBase-input": {
              fontSize: "12px",
            },
          },
          "& .MuiDataGrid-row": {
            // borderBottom: `1px solid ${Colors.primaryGrey}`,
          },
        }}
        hideFooter={hideFooter}
        pageSizeOptions={pageSizeOptions}
        disableColumnFilter={disableColumnFilter}
        disableColumnMenu={true}
        // sortModel={sortModel}
        // onSortModelChange={onSortModelChange}
        columnVisibilityModel={columnVisibilityModel}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        experimentalFeatures={experimentalFeatures}
        columnGroupingModel={columnGroupingModel}
        checkboxSelection={checkboxSelection}
        initialState={initialState}
        editMode={editMode}
        paginationMode={paginationMode}
        autoHeight={autoHeight}
        processRowUpdate={processRowUpdate}
        onRowSelectionModelChange={(ids) => onRowSelectionModelChange(ids)}
        onCellClick={handleCellClick}
        rowHeight={rowHeight}
        columnHeaderHeight={40}
        cellModesModel={cellModesModel}
        onCellModesModelChange={handleCellModesModelChange}
        slots={{
          noRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              No record available
            </Stack>
          ),
        }}
      />
      <Box sx={{ padding: "20px 10px 20px 10px", display:'flex'}}>
        <Typography variant="caption">Table 5</Typography>
          <Box sx={{ padding: "5px 20px 5px 20px", display:'flex', gap:'30px'}} >
          <Image src={LeftArrow} alt="LeftArrow" height={10} width={10} />
          <Typography variant="h6" color={'white'} sx={{backgroundColor:'black', padding:'0px 10px 0px 10px'}}>1</Typography>
          <Image src={RightArrow} alt="RightArrow" height={10} width={10} />
          </Box>    
      </Box>
    </>
  );
};

export default React.memo(DataGrid);
