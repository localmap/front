import { BaseUrl } from '../../util/axiosApi'
import axios from 'axios'

// actions
const GET_STORE = "GET_STORE";
const GET_ONE_Store = "GET_ONE_STORE";

// action types
type GetStoresAction = ReturnType<typeof getStore>;
type GetOneStoresAction = ReturnType<typeof goStoreInfo>;

//action creators
export const getStore = (restaurantData: string) => ({
    type: GET_STORE,
    payload: restaurantData
})

export const goStoreInfo = (rest_id: string) => {
    const url = BaseUrl + '/Restaurant/restaurant/'
    axios
      .post(url,{
        headers: {
            'Content-Type': 'application/json'
          },
          body: {rest_id: rest_id }
    })
    .then(function (response) {
        return (response.data)
      })
      .catch(function (error) {
      })
}


export default function restaurantReducer (
    action: GetOneStoresAction | GetStoresAction
 ) {
    switch (action) {

    }
 }


