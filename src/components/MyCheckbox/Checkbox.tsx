import { Box, Checkbox, Stack } from "@mui/material";

const MyCheckbox = ({ label, value, setValue, marginY, multiple = false }) => {
  return (
    <Stack marginY={multiple ? 0 : marginY}>
      {/* {multiple ? <span>{label}</span> : null} */}
      {multiple ? (
        <Box
          display="flex"
          gap="15px"
          justifyContent="start"
          alignItems="center"
        >
          <span style={{ fontSize: "14px" }}>{label}</span>
          <Checkbox
            {...label}
            checked={value.bool}
            onChange={(event) => (setValue = event.target.checked)}
          />
        </Box>
      ) : (
        <Box
          display="flex"
          gap="15px"
          justifyContent="start"
          alignItems="center"
        >
          <span>{label}</span>
          <Checkbox
            {...label}
            checked={value}
            onChange={(event) => setValue(event.target.checked)}
          />
        </Box>
      )}
    </Stack>
  );
};

export default MyCheckbox;
