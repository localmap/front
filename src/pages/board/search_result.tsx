import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../reducers/index'
import Search_type from '../../types/types'


const Search_result: React.FC = () => {
  const search_data = useSelector<RootState, Search_type[]>(state => state.headerReducer);
  return (
    <div>
      <h1>검색결과:</h1>
      {Array.isArray(search_data) && 
      search_data.map((item:Search_type)=>(
        <h1><div key={item.rest_id}>{item.address}</div></h1>
      ))}
    </div>
  );
}

export default Search_result;
