import { BaseUrl } from '../../util/axiosApi'
import axios from 'axios'
/* action start */
const SET_SEARCH_RESULTS = 'header/SET_SEARCH_RESULTS'

//액션 생성 함수
export const setSearchResults = (searchData: string) => ({
  type: SET_SEARCH_RESULTS,
  payload: searchData
})

type HeaderAction = ReturnType<typeof setSearchResults>
/* action end */

/* reducer start */

interface storeDTO {
  address: string
  avg_rating: number
  name: string
  rest_id: string
  url: string
}

type PageState = {
  page: string
  searchResults: storeDTO[]
}

const initialState: PageState = {
  page: 'home',
  searchResults: []
}

export default async function headerReducer(
  state: PageState = initialState,
  action: HeaderAction
) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
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
          return (state.searchResults = response.data)
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
