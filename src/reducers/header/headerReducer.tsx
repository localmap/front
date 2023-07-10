/* action start */

const SET_PAGE= 'header/SET' as const;
const RESET_PAGE = 'header/RESET' as const;
const SET_SEARCH_RESULTS = 'header/SET_SEARCH_RESULTS' as const;


//액션 생성 함수
export const reset = () => ({type : RESET_PAGE});
export const set = (page : String) => ({
    type : SET_PAGE,
    payload : page
});

export const setSearchResults = (results: Array<any>) => ({
    type: SET_SEARCH_RESULTS,
    payload: results,
  });


export interface SearchResult {
    title: string;
    description: string;
}

type HeaderAction = 
    | ReturnType<typeof reset>
    | ReturnType<typeof set>
    | ReturnType<typeof setSearchResults>;
/* action end */

/* reducer start */

type PageState = {
    page : String;
    searchResults?: {
        payload?:{
            id?:number;
            food?:string;
        };
    };
};

const initialState: PageState = {
    page : 'home',
};

export default function headerReducer(state: PageState = initialState, action: HeaderAction) {
    switch (action.type){
        case SET_PAGE:
            return { page : action.payload}
        case RESET_PAGE:
            return { page : 'home'}
        case SET_SEARCH_RESULTS:
            return { ...state, searchResults: action.payload };
        default : 
            return state
    }
}

/* reducer end */