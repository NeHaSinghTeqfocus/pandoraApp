// @ts-nocheck
import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import Slider from "@mui/material/Slider";

const Counter = ({
  main_title,
  value,
  setValue,
  min = 0,
  max,
  slider = false,
  marginY,
  disabled = false,
  isNColumn = false,
  isTextSize = false,
}) => {
  const CounterFn = (val) => {
    if (isTextSize) {
      let newValue;

      if (val === "add") {
        newValue = Math.min(value + 0.2, max || 3);
      } else {
        newValue = Math.max(value - 0.2, min || 0.2);
      }

      newValue = Math.round(newValue * 10) / 10;

      setValue(newValue);
    } else if (isNColumn) {
      if (val === "add") {
        if (max === undefined) {
          setValue(value + 5);
        } else {
          if (value < max) {
            setValue(value + 5);
          }
        }
      } else {
        if (value > min) {
          setValue(value - 5);
        }
      }
    } else {
      if (val === "add") {
        if (max === undefined) {
          setValue(value + 1);
        } else {
          if (value < max) {
            setValue(value + 1);
          }
        }
      } else {
        if (value > min) {
          setValue(value - 1);
        }
      }
    }
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <Stack
      sx={{ display: "flex", flexDirection: "column", width: "100%" }}
      marginY={marginY}
    >
      <span
        style={{ whiteSpace: "nowrap", marginTop: "5px", fontSize: "14px" }}
      >
        {main_title}
      </span>
      <Box height="32px !important" display="flex" width="270px">
        {slider ? (
          <Slider
            disabled={disabled}
            sx={{
              margin: "0px 15px",
            }}
            value={value}
            max={max}
            min={min}
            onChange={handleChange}
            // aria-label="Disabled slider"
          />
        ) : null}
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button sx={{ width: "68px" }} onClick={() => CounterFn("sub")}>
            -
          </Button>
          <Button
            sx={{ width: "68px", color: "black" }}
            disabled={disabled}
            disableRipple
          >
            {value}
          </Button>
          <Button
            sx={{ width: "68px" }}
            disabled={disabled}
            onClick={() => CounterFn("add")}
          >
            +
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default Counter;
