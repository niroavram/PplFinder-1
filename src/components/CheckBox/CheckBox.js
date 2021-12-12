import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({  label, value, handleChangeFilter,filterType}) => {

  const handleChange = () => {
    handleChangeFilter(filterType,label);
  };

  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox checked={value.checked} onChange={handleChange} color="primary" />}
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
