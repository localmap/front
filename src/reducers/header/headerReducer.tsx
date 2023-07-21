import { BaseUrl } from '../../util/axiosApi'
import axios from 'axios'
import Search_type from '../../types/types'
/* action start */

//액션타입 생성

const HEADER_SEARCH_RESULT = 'header/HEADER_SEARCH_RESULT'

//액션생성함수
 export const setSearchResults = (searchData:string) => ({
  type: HEADER_SEARCH_RESULT,
  payload: searchData
})

type HeaderAction = ReturnType<typeof setSearchResults>

//상태 정의
type PageState = {
  page:String
  searchResults:Search_type[]
}

const initialState:PageState = {
  page:'home',
  searchResults:[]
}

export default async function headerReducer(
  state: PageState = initialState,
  action: HeaderAction 
) {
  switch(action.type){
    case HEADER_SEARCH_RESULT :
    const url = BaseUrl + '/restaurant/search/'
    axios
        .get(url, {
          params: {
            search: action.payload
          },
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function (response) {
          console.log("검색결과"+response.data)
          return state.searchResults = response.data
        })
        .catch(function (error) {
          alert('검색 오류')
        })
        break
        default:
          return state
  }
}

/* reducer end */
