import React, { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as C from "./style";
import {  Input } from "@mui/material";

interface RangeSliderProps {
  value: (number | null)[];
  onChange: (value: number | number[]) => void;
  label: string;
  max: number;
  title?: string;
  real?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = (props) => {
  const { max } = props;
  const [value, setValue] = useState<(number | null)[]>(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as (number | null)[]);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const handleInputChange = useCallback(
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue =
        event.target.value === "" ? null : parseInt(event.target.value, 10);
      const updatedValue: (number | null)[] = [...value];
      updatedValue[index] = newValue;
      setValue(updatedValue);
      
      const filteredValues = updatedValue.filter(
        (val) => val !== null
      ) as number[];

      if (props.onChange) {
        props.onChange(
          filteredValues.length === 1 ? filteredValues[0] : filteredValues
        );
      }
    },
    [value, props.onChange]
  );

  return (
    <C.Container>
      <Box>
        <C.ContentLabel>{props.label}</C.ContentLabel>
        <Box sx={{ width: 236, display: "flex", alignItems: "center" }}>
          <Slider
            aria-labelledby="range-slider-label"
            value={value.map((val) => (val === null ? NaN : val))}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={max}
            sx={{
              color: "#851F2C",
              "& .MuiSlider-thumb": {
                backgroundColor: "#851F2C",
              },
            }}
          />
        </Box>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.real}
            <Input
              sx={{ width: "60px", textAlign: "center", paddingLeft: "1.4em" }}
              type="number"
              value={value[0] === null ? "" : value[0]}
              onChange={handleInputChange(0)}
            />
            <span style={{ margin: "0px 10px" }}>-</span>
            {props.real}
            <Input
              sx={{ width: "80px", textAlign: "center", paddingLeft: ".8em" }}
              type="number"
              value={value[1] === null ? "" : value[1]}
              onChange={handleInputChange(1)}
            />
            {props.title}
          </div>
        </div>
      </Box>
    </C.Container>
  );
};

export default RangeSlider;
