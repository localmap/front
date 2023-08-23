import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../reducers/index";
import Search_type from "../../types/types";
import { set } from "../../reducers/modal/modalReducer";
import { useDispatch } from "react-redux";
import Filter from "../modal/filter";

const Search_result: React.FC = () => {
  const search_data = useSelector<RootState, Search_type[]>(
    (state) => state.headerReducer
  );

  const dispatch = useDispatch();
  const open_filter_modal = () => {
    dispatch(set({ state: "필터모달", cashe1: "캐시1", cashe2: "캐시2" }));
  };
  return (
    <div className="search_result">
      <h1>검색결과:</h1>
      {Array.isArray(search_data) &&
        search_data.map((item: Search_type) => (
          <h1>
            <div key={item.rest_id}>{item.address}</div>
          </h1>
        ))}
      <button className="filter_btn" onClick={open_filter_modal}>
        필터
      </button>
      <Filter />
    </div>
  );
};

export default Search_result;
