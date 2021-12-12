import React from "react";
import * as S from "./style";
import CheckBox from "components/CheckBox";


const Filter = ({filterItems,filterType,handleChangeFilter}) => {

  return (
        <S.Filters>
      {Object.keys(filterItems).map((item)=>{
        return  <CheckBox key={item} value={filterItems[item].key} label={item} handleChangeFilter={handleChangeFilter} filterType={filterType} />
      })
    }
      </S.Filters>
  );
};

export default Filter;
