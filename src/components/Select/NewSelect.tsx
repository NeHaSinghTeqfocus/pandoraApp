import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import React, { useState } from "react";
import { TextField, Tooltip } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const NewSelect = ({ main_title, dropvalues, marginY, setSelectCol }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnChange = (e, value) => {
    setSelectedOptions(value); // Update selected options
    setSelectCol(value); // Call the provided onChange callback
  };

  return (
    <Stack spacing={1} sx={{ width: 270 }} marginY={marginY}>
      <span style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
        {main_title}
        <Tooltip
          placement="top"
          arrow
          title="Please select columns you wish to plot. If nothing is selected we will take all valid numerical columns."
        >
          <ContactSupportIcon fontSize="small" />
        </Tooltip>
      </span>
      <Autocomplete
        sx={{
          display: "flex",
          flexWrap: "wrap",

          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "black !important",
              border: "1px solid",
            },
          "& .MuiAutocomplete-inputRoot": {
            // padding: "5px",
            height: "fit-content",
            fontSize: "13px",
            // padding: "8px 18px",
            // margin: "5px 0px",
            borderRadius: "5px",
          },

          "& .MuiInputBase-input": {
            padding: "0px !important",
          },
          "& .MuiInputBase-root": {
            borderColor: "black !important",
          },
          "& .MuiAutocomplete-endAdornment": {
            display: "none",
          },
          "& .MuiAutocomplete-tag": {
            color: "#9D93A5",
          },
        }}
        multiple
        id="tags-outlined"
        options={dropvalues}
        onChange={handleOnChange}
        value={selectedOptions}
        // defaultValue={[top100Films[13]]}
        // filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& .MuiChip-label": {
                fontSize: "11px",
              },
              "& .MuiChip-deleteIcon": {
                fontSize: "12px !important",
                color: "#909399 !important",
              },
              "& .MuiChip-filled": {
                height: "27px",
              },
            }}
            placeholder={selectedOptions.length === 0 ? "Type to search" : ""}
          />
        )}
      />
    </Stack>
  );
};

export default NewSelect;
