import {
  GridColDef,
  GridSortModel,
  GridColumnVisibilityModel,
  GridEditMode,
} from "@mui/x-data-grid";

interface ExperimentalFeaturesType {
  columnGrouping: boolean;
}
interface SortModelType {
  field: "string";
  sort: "asc" | "desc" | null;
}
interface DataGridType {
  rows: object[];
  columns: GridColDef<object>[];
  sx?: object;
  processRowUpdate?: (
    newRow: object,
    oldRow: object
  ) => object | Promise<object>;
  pageSizeOptions?: number[];
  paginationMode?: "client" | "server";
  sortModel?: SortModel[];
  onSortModelChange?: (model: any) => void;
  editMode?: GridEditMode;
  hideFooter?: boolean;
  columnVisibilityModel?: GridColumnVisibilityModel;
  experimentalFeatures?: ExperimentalFeatures;
  disableRowSelectionOnClick?: boolean;
  checkboxSelection?: boolean;
  initialState?: object;
  columnGroupingModel?: any;
  autoHeight?: boolean;
  disableColumnFilter?: boolean;
  onRowSelectionModelChange?: (ids?: any) => void;
  onRowsUpdate?: (ids?: any) => void;
  getRowId?: (row?: any) => number;
  rowHeight?: number;
  name?: string;
  headerHeight?: number;
  maxSelect?: number;
  disableMultipleSelection?: any;
  selectionModel?: any;
}

export type { ExperimentalFeaturesType, SortModelType, DataGridType };
