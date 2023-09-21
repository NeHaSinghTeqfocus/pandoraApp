import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import React, { useState } from "react";
import { TextField, Tooltip } from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const NewSelect = ({ type, main_title, dropvalues, marginY }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const handleOptions = (option: any) => {
    return (option = option.title);
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
          "& .MuiAutocomplete-inputRoot": {
            // padding: "5px",
            // height: "32px",
            fontSize: "13px",
            padding: "4px 4px 7.5px 5px",
            // margin: "5px 0px",
          },
          // "& .MuiAutocomplete-input": {},
          "& .MuiAutocomplete-endAdornment": {
            display: "none",
          },
        }}
        multiple
        id="tags-outlined"
        options={dropvalues}
        getOptionLabel={handleOptions}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& .MuiChip-label": {
                fontSize: "12px",
              },
            }}
            placeholder="Type to search"
          />
        )}
      />
    </Stack>
  );
};

export default NewSelect;
