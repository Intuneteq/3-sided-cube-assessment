import React from "react";
import { StylesConfig } from "react-select";

const useAppStyling = () => {
  const setSelectStyle = (): StylesConfig<SelectOption> => {
    return {
      control: (base, state) => ({
        ...base,
        borderRadius: "none",
        width: "100%",
        maxWidth: "25rem",
        height: "2.75rem",
        cursor: "pointer",
        fontSize: "1rem",
        borderColor: state.isFocused ? "#5B5B5B" : "#C3C3C3",
        boxShadow: "none",
        "&:hover": {
          borderColor: "none",
        },
      }),
      menu: (base) => ({
        ...base,
        marginTop: "0rem",
        padding: 0,
        color: "#000",
        width: "100%",
        maxWidth: "25rem",
        background: "white",
        boxShadow: "none",
      }),

      option: (base) => ({
        ...base,
        background: "#F8F8F8",
        marginBottom: "0.06rem",
        fontSize: "1rem",
        color: "#000",
        padding: "0.375rem 0.75rem",
      }),

      menuList: (base) => ({
        ...base,
        padding: 0,

        height: "10.3rem",
        scrollbarWidth: "none",
        overflowY: "scroll",

        "::-webkit-scrollbar": {
          width: "4px",
          height: "0px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }),
      placeholder: (base) => ({
        ...base,
        textTransform: "capitalize",
        fontSize: "1rem",
      }),
      singleValue: (base) => ({
        ...base,
        color: "#000",
        textTransform: "capitalize",
        fontSize: "0.875rem",
      }),
      dropdownIndicator: (base) => ({
        ...base,
        color: "#F70087",
      }),
      indicatorsContainer: (base) => ({
        ...base,
      }),
    };
  };

  const sliderStyle = {
    color: "#C3C3C3",
    height: "0.5rem",
    border: "none",
    borderRadius: 0,
    "& .MuiSlider-track": {
      backgroundColor: "#F70087",
      borderRadius: "none",
      height: "0.5rem",
    },
    "& .MuiSlider-thumb": {
      height: "1.5rem",
      width: "1.5rem",
      backgroundColor: "#F70087",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
    },
  };

  return { setSelectStyle, sliderStyle };
};

export default useAppStyling;
