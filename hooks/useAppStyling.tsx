import React from "react";
import { StylesConfig } from "react-select";

const useAppStyling = () => {
  const setSelectStyle = (): StylesConfig<SelectOption> => {
    return {
      control: (base, state) => ({
        ...base,
        borderRadius: "none",
        width: "25rem",
        height: "2.75rem",
        cursor: "pointer",
        fontSize: "1rem",
        borderColor: "#C3C3C3",
        boxShadow: state.isFocused ? "none" : "none",
      }),
      menu: (base) => ({
        ...base,
        marginTop: "0rem",
        padding: 0,
        color: "#000",
        width: "25rem",
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
      }),
      placeholder: (base) => ({
        ...base,
        // color: color,
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

  return { setSelectStyle };
};

export default useAppStyling;
